import defaultLogo from '/pwa/engaged-logo-200x82.png';
import defaultLogo256 from '/pwa/engaged-logo-256x256.png';
import defaultLogo32 from '/pwa/engaged-logo-32x32.png';

export function useLogo() {
	function getLogo(appearance) {
		return appearance?.logo?.url || appearance?.squareLogo256?.url || appearance?.squareLogo32?.url || defaultLogo;
	}

	function getLogo256(appearance) {
		return appearance?.squareLogo256?.url || defaultLogo256;
	}

	function getLogo32(appearance) {
		return appearance?.squareLogo32?.url || defaultLogo32;
	}

	return {
		getLogo,
		getLogo256,
		getLogo32
	};
}
