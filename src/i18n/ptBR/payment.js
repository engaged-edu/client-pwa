export default {
	amount: 'Valor',
	bankSlipInstructions: 'Clique em "<strong>Finalizar pagamento</strong>" para pagar pelo Internet Banking. Copie o código de barras que será gerado ou leia o código de barras. Para pagar em qualquer banco, caixa eletrônico ou lotérica, por favor, imprima o boleto.',
	bankSlipInfo: 'Se o pagamento é feito de segunda a sexta, é creditado no dia seguinte. Se você paga no fim de semana, será creditado no próximo dia útil.',
	barCode: 'Código de barras',
	billingTaxData: 'Dados fiscais para faturamento',
	chargeName: 'A cobrança aparecerá na sua fatura como: <strong class="font-bold">{domain}</strong>',
	checkout: 'Checkout',
	confirmCancelPayment: 'Utilizar outro método de pagamento',
	confirmCancelPaymentDescription: 'Esta ação irá cancelar este pagamento para que possa escolher um novo método de pagamento.\n\nDeseja continuar?',
	copyBarCode: 'Copiar código de barras',
	copyPixCode: 'Copiar código PIX',
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
	errorAtField: 'Erro no campo: "{0}"',
	errorMessage: 'Cód. {0} - {1}',
	expiration: 'Validade',
	finishPayment: 'Finalizar pagamento',
	hideSummary: 'Ocultar resumo',
	installmentOption: ({ list }) => list(0) > 1 ? `${list(0)}x de <strong>${list(1)}</strong> (sem juros)` : `À vista em <strong>${list(1)}</strong> sem juros`,
	invoicePaymentProgress: 'Progresso de pagamento da fatura',
	invoicePaymentProgressInfo: 'Confira abaixo seu progresso para liquidar o valor da fatura',
	invoiceSubtotal: 'Subtotal da fatura',
	invoiceTotal: 'Total da fatura',
	itemsSummary: 'Resumo dos itens',
	methods: {
		bankSlip: 'Boleto',
		creditCard: 'Cartão de Crédito',
		pix: 'PIX'
	},
	ofTotal: 'De um total de {0}',
	paid: 'Pago',
	paidAt: 'Pago em',
	paymentMethod: 'Forma de pagamento',
	paymentResponsible: 'Responsável pelo pagamento',
	pixCode: 'Código PIX',
	pixInstructions: [
		'Clique em "<strong>Finalizar pagamento</strong>" para gerar o código e o QR Code.',
		'Acesse o app do seu banco ou internet banking de preferência.',
		'Escolha pagar com o PIX, cole o código e finalize o pagamento, ou leia o QR Code com a câmera do seu celular.',
		'Seu pagamento será aprovado em alguns segundos.'
	],
	printBankSlip: 'Imprimir boleto',
	processingPurchase: 'Estamos processando sua compra',
	showSummary: 'Ver resumo dos itens',
	terms: 'A EngagED está processando o pagamento de {0}. {1} Ao prosseguir você concorda com os {2}, políticas de {3} e {4}.',
	title: 'Link de Pagamento',
	totalPayment: 'Total do pagamento',
	useOtherMethod: 'Utilizar outro método de pagamento',
	youArePaying: 'Você está pagando',
	youArePayingInfo: 'Você está pagando {0} de uma fatura com o valor total de {1}'
};
