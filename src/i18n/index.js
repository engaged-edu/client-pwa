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
		}
	}),
	{ global } = i18n;

export { global as i18n };
export default i18n;
