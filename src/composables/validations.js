import {
	helpers,
	required,
	minLength,
	email,
	sameAs
} from '@vuelidate/validators';

import { i18n } from '@/i18n';
import { useCreditCard } from './creditCard';

export function useValidations() {
	const {
		isValidCardNumber,
		isValidCVV,
		isValidExpirationDate
	} = useCreditCard();

	return {
		validateForm($v) {
			$v.value.$touch();

			return new Promise((resolve, reject) => {
				const isValid = !$v.value.$invalid;

				if (isValid) {
					resolve(isValid);
				}

				reject(isValid);
			});
		},
		required: (message = i18n.t('validations.required')) => helpers.withMessage(message, required),
		minLength: (length = 1, message = i18n.tc('validations.minLength', length)) => helpers.withMessage(message, minLength(length)),
		email: (message = i18n.t('validations.email')) => helpers.withMessage(message, email),
		sameAs: (equalTo, message = i18n.t('validations.sameAs')) => helpers.withMessage(message, sameAs(equalTo)),
		ccNumber: (message = i18n.t('validations.ccNumber')) => helpers.withMessage(message, (number) => isValidCardNumber(number)),
		ccCVV: (message = i18n.t('validations.ccCVV')) => helpers.withMessage(message, (number) => isValidCVV(number)),
		ccExpiration: (message = i18n.t('validations.ccExpiration')) => helpers.withMessage(message, (date) => isValidExpirationDate(date))
	};
}

