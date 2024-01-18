import { useVuelidate } from '@vuelidate/core';
import { i18n } from '@/i18n';
import { useMasks, useValidations } from '@/composables/utils';
import { InvoicePaymentLinkCreditCardInstallmentRuleType } from '@/gql.ts';

const addCard = ref(true),
	saveCard = ref(true),
	formInitialState = {
		name: '',
		number: '',
		expiration: '',
		cvv: '',
		installments: null
	},
	form = reactive({ ...formInitialState });

export function useCreditCardForm(invoice) {
	const { masks } = useMasks(),
		{
			required,
			minLength,
			ccNumber,
			ccExpiration,
			ccCVV
		} = useValidations(),
		$v = useVuelidate({
			name: {
				required: required(),
				minLength: minLength(5)
			},
			number: {
				required: required(),
				ccNumber: ccNumber()
			},
			expiration: {
				required: required(),
				ccExpiration: ccExpiration()
			},
			cvv: {
				required: required(),
				ccCVV: ccCVV()
			},
			installments: { required: required() }
		}, form, { $lazy: true }),
		makeInstallmentsArray = (ins) => ins.map((i) => ({
			name: i18n.t('payment.installmentOption', [i, i18n.n((invoice.value.amount || 0) / i / 100, invoice.value.currency)]),
			value: i
		})),
		installments = computed(() => {
			if (!invoice.value.creditCard?.enabled) {
				return [];
			}

			const installmentsRule = invoice.value?.creditCard.installmentsRule,
				installmentsArray = installmentsRule?.type === InvoicePaymentLinkCreditCardInstallmentRuleType.UpTo ? makeInstallmentsArray(Array.from({ length: installmentsRule.upTo }, (_, i) => i + 1)) : makeInstallmentsArray(installmentsRule?.installments);

			if (installmentsArray.length) {
				form.installments = installmentsArray[0].value;
			}

			return installmentsArray;
		}),
		currentInstallment = computed(() => installments.value.find((i) => i.value === form.installments).name);

	return {
		addCard,
		saveCard,
		masks,
		form,
		$v,
		installments,
		currentInstallment
	};
}

export function useCreditCard() {
	function getCardFlag(number) {
		const cardFlags = [
			{ flag: 'Visa', regex: /^4\d{3,}$/u },
			{ flag: 'Mastercard', regex: /^(5[1-5]\d{4}|677154\d{2,})$/u },
			{ flag: 'Amex', regex: /^3[47]\d{2,}$/u },
			{ flag: 'Discover', regex: /^6(?:011\d{0,}|5[0-9]{2}\d{0,})$/u },
			{ flag: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])\d{0,}$/u },
			{ flag: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{0,}$/u },
			{ flag: 'Elo', regex: /^((4011|4312|4514|4576)\d{8,12}|(5067|5090|5041|5082|5096|5097|5098|5099)\d{8,15}|(6500|6550)\d{8,12}|(6516|6556)\d{10,14})$/u },
			{ flag: 'Hiper', regex: /^(637095|637612|637599|637609|637568)\d{5,10}$/u },
			{ flag: 'Hipercard', regex: /^(606282\d{5,10}(\d{0,3})?)|(3841\d{10,15})$/u },
			{ flag: 'Maestro', regex: /^(?:5[0678]\d{2,10}|6304\d{1,12}|6390\d{1,12}|67\d{2}\d{1,12})$/u },
			{ flag: 'MIR', regex: /^220[0-4]\d{2,}$/u },
			{ flag: 'UnionPay', regex: /^(62[0-5]\d{2,16})|(81\d{2,15})$/u }
		];

		for (const card of cardFlags) {
			if (card.regex.test(number.replace(/\s+/gu, ''))) {
				return card.flag;
			}
		}

		return false;
	}

	function getCardFlagShort(number) {
		const flag = getCardFlag(number.replace(/\D/gu, ''));

		if (!flag) {
			return flag;
		}

		return flag.toLowerCase().split(' ')[0];
	}

	function luhnCheck(cardNumber) {
		const cardDigits = cardNumber.replace(/\D/gu, '').split('')
			.reverse();

		let sum = 0;

		for (let i = 0; i < cardDigits.length; i++) {
			let digit = parseInt(cardDigits[i]);

			if (i % 2 !== 0) {
				digit *= 2;

				if (digit > 9) {
					digit -= 9;
				}
			}

			sum += digit;
		}

		return sum % 10 === 0;
	}

	function isValidCardNumber(cardNumber) {
		const isValidFormat = /^(\d{12,19})$/u,
			cleanedNumber = cardNumber.replace(/\D/gu, '');

		if (!isValidFormat.test(cleanedNumber)) {
			return false;
		}

		return luhnCheck(cleanedNumber);
	}

	function isValidCVV(cvv) {
		const isValidFormat = /^\d{3,4}$/u;

		return isValidFormat.test(cvv.replace(/\D/gu, ''));
	}

	function isValidExpirationDate(expDate) {
		const isValidFormat = /^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/u,
			[month, year] = expDate.split('/').map(Number),
			currentYear = new Date().getFullYear(),
			currentMonth = new Date().getMonth() + 1,
			expYear = year >= 100 ? year : 2000 + year;

		if (!isValidFormat.test(expDate)) {
			return false;
		}

		if ((expYear < currentYear || expYear === currentYear) && month < currentMonth) {
			return false;
		}

		return true;
	}

	return {
		getCardFlag,
		getCardFlagShort,
		luhnCheck,
		isValidCardNumber,
		isValidCVV,
		isValidExpirationDate
	};
}
