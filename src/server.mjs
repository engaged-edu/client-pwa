import express from 'express';
import puppeteer from 'puppeteer';

const app = express();
const port = 4000;

async function ssr(url, browserWSEndpoint) {
	const browser = await puppeteer.connect({ browserWSEndpoint });

	try {
		const page = await browser.newPage();

		await page.setViewport({ width: 1366, height: 768 });

		const response = await page.goto(url, {
			timeout: 25000,
			waitUntil: 'networkidle2'
		});

		await page.evaluate(() => {
			const base = document.createElement('base');

			base.href = url;

			document.head.prepend(base);
		}, url);

		await page.evaluate(() => {
			const elements = document.querySelectorAll('script, link[rel="import"]');

			elements.forEach((e) => e.remove());
		});

		const html = await page.content();

		await page.close();

		return {
			html,
			status: response.status()
		};
	} catch (e) {
		const html = e.toString();

		console.warn({ message: `URL: ${url} Failed with message: ${html}` });

		return { html, status: 500 };
	}
}

app.get('/', async (req, res) => {
	const { url } = req.query;

	let browserWSEndpoint = null;

	if (!url) {
		return res.status(400);
	}

	if (!browserWSEndpoint) {
		const browser = await puppeteer.launch();

		browserWSEndpoint = await browser.wsEndpoint();
	}

	const { html, status } = await ssr(url, browserWSEndpoint);

	return res.status(status).send(html);
});

app.listen(port, () => console.warn(`Port: ${port}`));
