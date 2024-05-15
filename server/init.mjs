import express from 'express';
import useragent from 'express-useragent';
import router from '#server/router.mjs';

const { PORT, PATH_PREFIX } = process.env;

export default function () {
	const app = express();

	app.set('view engine', 'pug');
	app.set('views', './server/views');
	app.use(useragent.express());
	app.use(express.static('dist'));
	app.use(`/${PATH_PREFIX}`, router());

	app.listen(PORT, () => console.info(`Listening on port: ${PORT}`));
}
