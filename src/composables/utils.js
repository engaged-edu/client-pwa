export function useUtils() {
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
