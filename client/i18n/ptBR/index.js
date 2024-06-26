import { i18n } from '@/i18n';
import countries from './countries';
import enums from './enums';
import errors from './errors';
import general from './general';
import payment from './payment';
import checkout from './checkout';
import validations from './validations';
import terms from './terms';

export default {
	countries,
	enums,
	errors,
	general,
	payment,
	checkout,
	validations,
	terms,
	campli: 'EngagED',
	privacyEmail: '{\'privacidade@engaged.com.br\'}',
	supportEmail: '{\'suporte@engaged.com.br\'}',
	cur: ({ list }) => i18n.n(list(0) / 100, list(1))
};
