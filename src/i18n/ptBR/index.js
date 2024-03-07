import { i18n } from '@/i18n';
import countries from './countries';
import enums from './enums';
import errors from './errors';
import general from './general';
import payment from './payment';
import checkout from './checkout';

export default {
	countries,
	enums,
	errors,
	general,
	payment,
	checkout,
	campli: 'EngagED',
	cur: ({ list }) => i18n.n(list(0) / 100, list(1))
};
