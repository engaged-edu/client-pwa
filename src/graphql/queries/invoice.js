import gql from 'graphql-tag';

export const publicFetchInvoicePaymentLink = gql`
query publicFetchInvoicePaymentLink(
	$accessToken: String!
) {
	publicFetchInvoicePaymentLink(
		accessToken: $accessToken
	) {
		_id
		invoice {
			... on Invoice {
				_id
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
		organization {
			_id
			name
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
