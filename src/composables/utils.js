export function useUtils() {
	const format = {
		cpf(v) {
			return String(v).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/u, '$1.$2.$3-$4');
		},
		cnpj(v) {
			return String(v).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/u, '$1.$2.$3/$4-$5');
		}
	};

	return {
		formatText(text, type) {
			return format[type](text);
		}
	};
}
