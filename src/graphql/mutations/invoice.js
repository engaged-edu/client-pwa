import gql from 'graphql-tag';

/* eslint-disable */
export const publicCreatePaymentFromInvoicePaymentLink = gql`
mutation publicCreatePaymentFromInvoicePaymentLink(
	$cardToken: String
	$installments: Int
	$accessToken: String!
	$paymentMethod: PaymentMethod!
) {
	publicCreatePaymentFromInvoicePaymentLink(
		cardToken: $cardToken
		installments: $installments
		accessToken: $accessToken
		paymentMethod: $paymentMethod
	) {
		invoicePaymentLink {
			_id
			status
		}
		payment {
			_id
			updatedAt
			status
			failCode
			failMessage
			amount
			currency
			paymentMethod
			... on CreditCardPayment {
				createdAt
				updatedAt
				brand
				installments
				lastDigits
			}
			... on BankSlipPayment {
				createdAt
				updatedAt
				code
				expirationDate
				pdfUrl
			}
			... on PixPayment {
				createdAt
				updatedAt
				code
				expirationDate
				qrCodeUrl
			}

		}
	}
}`;

export const publicCancelInvoicePaymentLinkPayment = gql`
mutation publicCancelInvoicePaymentLinkPayment(
	$accessToken: String!
) {
	publicCancelInvoicePaymentLinkPayment(
		accessToken: $accessToken
	) {
		invoicePaymentLink {
			_id
		}
	}
}`;