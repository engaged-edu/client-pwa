import { AsYouType } from 'libphonenumber-js';
import numberExamples from 'libphonenumber-js/examples.mobile.json';
export { useCreditCard } from './creditCard';
export { useDarkMode } from './darkMode';
export { useLogo } from './logo';
export { useValidations } from './validations';
import {
	PaymentMethod,
	PaymentStatus,
	InvoicePaymentLinkExpirationRuleType
} from '@/gql.ts';

const head = ref({ title: 'carregando...' });

export function useHead() {
	return {
		head,
		getHead() {
			return head;
		},
		setHead(newHead) {
			head.value = newHead;
		}
	};
}

export function useFormatText() {
	const format = {
		cpf(v) {
			return String(v).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/u, '$1.$2.$3-$4');
		},
		BR_CPF(v) {
			return this.cpf(v);
		},
		cnpj(v) {
			return String(v).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/u, '$1.$2.$3/$4-$5');
		},
		BR_CNPJ(v) {
			return this.cnpj(v);
		}
	};

	return {
		formatText(text, type) {
			if (type in format) {
				return format[type](text);
			}

			console.error(`format ${type} doesn't exist`);

			return text;
		}
	};
}

export function useDate() {
	return {
		isExpired(expirationRule) {
			if (!expirationRule) {
				return false;
			}

			switch (expirationRule.type) {
				case InvoicePaymentLinkExpirationRuleType.SpecificDate: {
					return new Date(expirationRule.date) < new Date();
				}

				default: {
					return false;
				}
			}
		},

		getExpirationDate(expirationRule) {
			switch (expirationRule.type) {
				case InvoicePaymentLinkExpirationRuleType.SpecificDate: {
					const expirationDate = new Date(expirationRule.date);

					expirationDate.setDate(expirationDate.getDate() + 1);

					return expirationDate;
				}
			}
		}
	};
}

export function useMasks() {
	return {
		masks: {
			ccNumber: '9999 9999 9999? 9999',
			ccExp: '99/99',
			cvv: '999?9',
			cpf: '999.999.999-99',
			cnpj: '99.999.999/9999-99',
			phone(country) {
				const ayt = new AsYouType(country);
				let lengths = ayt.metadata.possibleLengths();
				let numberExample = numberExamples[country];
				let template;

				numberExample += '9'.repeat(lengths.at(-1) - numberExample.length);

				ayt.input(numberExample);
				template = ayt.getTemplate().replace(/x/gu, '9');

				if (lengths.length > 1) {
					let i = 0;

					template = template.replace(/9/gu, (match) => i++ === lengths[0] ? `?${match}` : match);
				}

				return template;
			}
		}
	};
}

export function useWatchPix(refetch, allowLoader) {
	const timeoutIDs = [];

	return {
		watchPix(payment) {
			if (!payment || !(payment.paymentMethod === PaymentMethod.Pix && payment.status === PaymentStatus.WaitingPayment)) {
				return;
			}

			timeoutIDs.push(window.setTimeout(async () => {
				allowLoader.value = false;

				await refetch();

				allowLoader.value = true;
			}, 5000));
		},

		clearPixWatcher() {
			timeoutIDs.forEach((id) => {
				clearTimeout(id);
			});
		}
	};
}
