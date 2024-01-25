export default {
	amount: 'Valor',
	bankSlipInstructions: 'Para pagar pelo Internet Banking, copie o código de barras que será gerado ou leia o código de barras. Para pagar em qualquer banco, caixa eletrônico ou lotérica, por favor, imprima o boleto.',
	billingTaxData: 'Dados fiscais para faturamento',
	chargeName: 'A cobrança aparecerá na sua fatura como: <strong class="font-bold">{domain}</strong>',
	creditCard: {
		cvv: 'CVV',
		expiration: 'Validade',
		name: 'Nome impresso no cartão',
		number: 'Número do cartão',
		saveCard: 'Salvar os dados para os próximos pagamentos?',
		selectInstallments: 'Selecione as parcelas'
	},
	cryptoSafe: 'Utilizamos criptografia para assegurar a proteção de seus dados de pagamento, garantindo o nível de segurança das instituições bancárias.',
	discount: 'Desconto|Descontos',
	finishPayment: 'Finalizar pagamento',
	hideSummary: 'Ocultar resumo',
	installmentOption: ({ list }) => list(0) > 1 ? `${list(0)}x de <strong>${list(1)}</strong> (sem juros)` : `À vista em <strong>${list(1)}</strong> sem juros`,
	invoiceSubtotal: 'Subtotal da fatura',
	invoiceTotal: 'Total da fatura',
	itemsSummary: 'Resumo dos itens',
	methods: {
		bankSlip: 'Boleto',
		creditCard: 'Cartão de Crédito',
		pix: 'PIX'
	},
	ofTotal: 'De um total de {0}',
	paymentMethod: 'Forma de pagamento',
	paymentResponsible: 'Responsável pelo pagamento',
	pixInstructions: [
		'Gere o código e o QR Code',
		'Acesse o app do seu banco ou internet banking de preferência',
		'Escolha pagar com o PIX, cole o código e finalize o pagamento. Ou leia o qr code com a câmera do seu celular.',
		'Seu pagamento será aprovado em alguns segundos'
	],
	showSummary: 'Ver resumo dos itens',
	terms: 'A EngagED está processando o pagamento de {name}. <br /> Ao prosseguir você concorda com os <strong>Termos de Uso</strong> e <strong>Política de Privacidade</strong>.',
	title: 'Link de Pagamento',
	totalPayment: 'Total do pagamento',
	youArePaying: 'Você está pagando',
	youArePayingInfo: 'Você está pagando {0} de uma fatura com o valor total de {1}'
};
