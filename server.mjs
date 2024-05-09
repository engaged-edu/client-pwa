import { URLSearchParams, fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import useragent from 'express-useragent';
import puppeteer from 'puppeteer';

const { PORT } = process.env;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.static('dist'));
app.use(useragent.express());

async function ssr(url) {
	const pupp = await puppeteer.launch();
	const browserWSEndpoint = pupp.wsEndpoint();
	const browser = await puppeteer.connect({ browserWSEndpoint });

	try {
		const page = await browser.newPage();
		const response = await page.goto(url, {
			timeout: 25000,
			waitUntil: 'networkidle2'
		});

		await page.evaluate(() => {
			const elements = document.querySelectorAll('style, script, link[rel="stylesheet"], link[rel="modulepreload"], link[rel="import"]');

			elements.forEach((e) => e.remove());
		});

		const html = await page.content();

		await page.close();

		return { html, status: response.status() };
	} catch (e) {
		const html = e.toString();

		console.warn({ message: `URL: ${url} Failed with message: ${html}` });

		return { html, status: 500 };
	}
}

function printLog(url, browser) {
	const timestamp = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());

	console.info('==============================');
	console.info(`Timestamp: ${timestamp}`);
	console.info(`Browser: ${browser}`);
	console.info(`URL: ${url}`);
	console.info('==============================');
}

app.get('/*', async (req, res) => {
	const { browser } = req.useragent;
	const isSSR = req.query.ssr;
	let url = `${req.protocol}://${req.headers.host}${req.originalUrl}`;

	if (isSSR || !req.useragent.isBot) {
		printLog(url, isSSR ? 'Puppeteer' : browser);

		return res.sendFile(`${__dirname}/dist/p/index.html`);
	}

	const query = new URLSearchParams(req.query);

	query.append('ssr', true);

	url = `${url.split('?')[0]}?${query.toString()}`;

	const { html, status } = await ssr(url);

	return res.status(status).send(html);
});

app.listen(PORT, () => {
	console.info(`Listening on port: ${PORT}`);
});
