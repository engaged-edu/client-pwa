import { Router } from 'express';
import CheckoutService from '#server/services/checkout.mjs';
import InvoiceService from '#server/services/invoice.mjs';

async function ssr(
	service, req, res, next
) {
	if (req.useragent.isBot) {
		return res.render('index', await service(req));
	}

	next();
}

export default function () {
	const router = Router();

	router.use('/*', (req, res, next) => {
		const timestamp = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());

		console.info('==============================');
		console.info(`Timestamp: ${timestamp}`);
		console.info(`Browser: ${req.useragent.browser}`);
		console.info(`URL: ${req.protocol}://${req.headers.host}${req.originalUrl}`);
		console.info('==============================');

		next();
	});
	router.use('/checkout/:id', (...attrs) => ssr(CheckoutService.getCheckout, ...attrs));
	router.use('/payment-link', (...attrs) => ssr(InvoiceService.getPaymentLink, ...attrs));
	router.get('/*', (req, res) => res.sendFile(`${process.env.PWD}/dist/p/index.html`));

	return router;
}
