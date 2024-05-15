export const publicFetchInvoicePaymentLink = `
query publicFetchInvoicePaymentLink(
	$accessToken: String!
) {
	publicFetchInvoicePaymentLink(
		accessToken: $accessToken
	) {
		invoice {
			... on Invoice {
				items {
					type
					... on ProductInvoiceItem {
						product {
							name
							description
						}
					}
					... on InlineInvoiceItem {
						name
					}
				}
			}
		}
		organization {
			name
			appearance {
				primaryColor
				logo {
					url
				}
				squareLogo32 {
					url
				}
				squareLogo256 {
					url
				}
			}
		}
	}
}
`;
