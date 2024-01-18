import gql from 'graphql-tag';

export const publicFetchInvoicePaymentLink = gql`
query publicFetchInvoicePaymentLink(
	$accessToken: String!
) {
	publicFetchInvoicePaymentLink(
		accessToken: $accessToken
	) {
		_id
		createdAt
		updatedAt
		expirationDate
		status
		amount
		invoice {
			... on Invoice {
				_id
				currency
				items {
					type
					quantity
					... on ProductInvoiceItem {
						productPrice
						product {
							name
							description
							prices {
								_id
								billingConfig {
									... on PerUnitProductPrice {
										unitAmount
									}
								}
							}
						}
					}
					... on InlineInvoiceItem {
						name
						quantity
						amount
					}
				}
				discounts {
					_id
					type
					... on InvoiceManualDiscount {
						description
						amount
					}
				}
				user {
					name
					email
					phoneNumber
					phoneNumberCountry
				}
				userPaymentProfile {
					name
					type
					country
					taxIds {
						type
						value
					}
					address {
						state
						city
						neighborhood
						street
						number
						complement
						zipcode
					}
				}
			}
		}
		payments {
			... on Payment {
				_id
				updatedAt
				status
				failCode
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
		pix {
			enabled
		}
		creditCard {
			enabled
			installmentsRule {
				type
				... on InvoicePaymentLinkCreditCardUpToInstallmentsRule {
					upTo
				}
				... on InvoicePaymentLinkCreditCardSpecificInstallmentsInstallmentsRule {
					installments
				}
			}
		}
		bankSlip {
			enabled
			expirationRule {
				type
				... on InvoicePaymentLinkDaysAfterCreationExpirationRule {
					days
				}
				... on InvoicePaymentLinkSpecificDateExpirationRule {
					date
				}
			}
		}
		organization {
			_id
			name
			payment {
				creditCard {
					softDescriptor
				}
			}
			appearance {
				primaryColor
				logo {
					title
					description
					altText
					url
					filestackUrl
				}
				squareLogo32 {
					title
					description
					altText
					url
					filestackUrl
				}
				squareLogo256 {
					title
					description
					altText
					url
					filestackUrl
				}
			}
		}
	}
}`;
