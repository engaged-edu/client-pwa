import { useVuelidate } from '@vuelidate/core';
import { i18n } from '@/i18n';
import { useValidations } from '@/composables/utils';
import { CountryIsoCode, LegalPersonType } from '@/gql.ts';

const formInitialState = {
	name: '',
	email: '',
	confirmEmail: '',
	country: CountryIsoCode.Br,
	phone: {
		phoneNumber: '',
		phoneNumberCountry: CountryIsoCode.Br
	},
	legal: LegalPersonType.Individual,
	cpf: '',
	cnpj: '',
	companyName: ''
};
const form = reactive({ ...formInitialState });

export function usePayerForm() {
	const {
		required,
		requiredIf,
		minLength,
		sameAs,
		email,
		phone,
		cpf,
		cnpj
	} = useValidations();
	const $v = useVuelidate({
		name: {
			required: required(),
			minLength: minLength(5, i18n.t('validations.fullName'))
		},
		email: {
			required: required(),
			email: email()
		},
		confirmEmail: {
			required: required(),
			email: email(),
			sameAsEmail: sameAs(computed(() => form.email), i18n.t('validations.confirmEmail'))
		},
		country: { required: required() },
		phone: { phone: phone() },
		legal: { required: required() },
		cpf: {
			required: requiredIf(computed(() => form.country === CountryIsoCode.Br && form.legal === LegalPersonType.Individual)),
			cpf: cpf()
		},
		cnpj: {
			required: requiredIf(computed(() => form.country === CountryIsoCode.Br && form.legal !== LegalPersonType.Individual)),
			cnpj: cnpj()
		},
		companyName: {
			required: requiredIf(computed(() => form.legal !== LegalPersonType.Individual)),
			minLength: minLength(5)
		}
	}, form, { $lazy: true });

	return {
		form,
		$v,
		handleCountry(event) {
			const phoneModel = $v.value.phone.$model;

			if (phoneModel.phoneNumber) {
				return;
			}

			phoneModel.phoneNumberCountry = event.value.code;
		}
	};
}
