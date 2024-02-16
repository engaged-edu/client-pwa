export default {
	PaymentMethod: {
		BANK_SLIP: 'Boleto',
		CREDIT_CARD: 'Cartão de Crédito',
		MONEY: 'Dinheiro',
		PIX: 'PIX'
	},
	PaymentStatus: {
		PARTIALLY_REFUNDED: 'Parcialmente reembolsado',
		WAITING_PAYMENT: 'Aguardando pagamento',
		PENDING_REFUND: 'Reembolso pendente',
		PENDING_REVIEW: 'Revisão pendente',
		AUTHORIZED: 'Autorizado',
		PROCESSING: 'Processando',
		ANALYZING: 'Analisando',
		PENDING: 'Pendente',
		FAILED: 'Falhou',
		PAID: 'Pago',
		CHARGEDBACK: 'Contestado',
		REFUNDED: 'Reembolsado',
		REFUSED: 'Recusado',
		EXPIRED: 'Expirado',
		CANCELED: 'Cancelado'
	},
	InvoicePaymentLinkStatus: {
		PAYMENT_GENERATED: 'Aguardando pagamento',
		CANCELED: 'Cancelado',
		EXPIRED: 'Expirado',
		PENDING: 'Pendente',
		PAID: 'Pago'
	},
	TaxIdType: {
		AU_ABN: '',
		EU_VAT: '',
		BR_CNPJ: 'CNPJ',
		BR_CPF: 'CPF',
		CA_BN: '',
		CA_GST_HST: '',
		CA_PST_BC: '',
		CA_PST_MB: '',
		CA_PST_SK: '',
		CA_QST: '',
		CL_TIN: '',
		HK_BR: '',
		IN_GST: '',
		ID_NPWP: '',
		IL_VAT: '',
		JP_CN: '',
		JP_RN: '',
		KR_BRN: '',
		LI_UID: '',
		MY_FRP: '',
		MY_ITN: '',
		MY_SST: '',
		MX_RFC: '',
		NZ_GST: '',
		NO_VAT: '',
		RU_INN: '',
		RU_KPP: '',
		SA_VAT: '',
		SG_GST: '',
		SG_UEN: '',
		ZA_VAT: '',
		ES_CIF: '',
		CH_VAT: '',
		TW_VAT: '',
		TH_VAT: '',
		AE_TRN: '',
		GB_VAT: '',
		US_EIN: ''
	}
};
