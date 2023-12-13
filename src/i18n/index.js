import {createI18n} from 'vue-i18n';
import ptBR from './ptBR';
import enUS from './enUS';

const i18n = createI18n({
		locale: 'ptBR',
		fallbackLocale: 'enUS',
		messages: {ptBR, enUS}
	}),
	{global} = i18n;

export {global as i18n};
export default i18n;
