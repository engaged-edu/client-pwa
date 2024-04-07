import { createI18n } from 'vue-i18n';
import ptBR from './ptBR';
import enUS from './enUS';

const i18n = createI18n({
	locale: 'pt-BR',
	fallbackLocale: 'pt-BR',
	messages: {
		'pt-BR': ptBR,
		'en-US': enUS
	},
	numberFormats: {
		'pt-BR': {
			BRL: {
				style: 'currency',
				currency: 'BRL',
				notation: 'standard'
			}
		}
	},
	datetimeFormats: {
		'pt-BR': {
			friendly: {
				month: 'short',
				day: 'numeric'
			},
			short: {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric'
			},
			full: {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric'
			}
		}
	}
});

const { global } = i18n;

export { global as i18n };
export default i18n;
