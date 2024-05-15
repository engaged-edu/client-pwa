export const publicFetchCheckout = `
query publicFetchCheckout(
	$checkoutSharedId: String!
) {
	publicFetchCheckout(
		checkoutSharedId: $checkoutSharedId
	) {
		description
		invoiceItems {
			type
			quantity
			... on ProductInvoiceItem {
				productPrice
				product {
					name
					description
				}
			}
			... on InlineInvoiceItem {
				name
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
