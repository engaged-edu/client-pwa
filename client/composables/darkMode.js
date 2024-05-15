import { usePrimeVue } from 'primevue/config';

export function useDarkMode() {
	const PrimeVue = usePrimeVue();
	const storageKey = 'darkmode';
	const localTheme = window.localStorage.getItem(storageKey);
	const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	function applyTheme(dark = false) {
		const lightTheme = 'aura-light-blue';
		const darkTheme = 'aura-dark-blue';
		const apply = dark ? [lightTheme, darkTheme] : [darkTheme, lightTheme];

		PrimeVue.changeTheme(...apply, 'theme-link');
	}

	function setTheme(dark = 'auto') {
		if (dark === 'auto') {
			applyTheme(systemDark);
			window.localStorage.removeItem(storageKey);

			return;
		}

		applyTheme(dark);
		window.localStorage.setItem(storageKey, JSON.stringify(dark));
	}

	function darkMode() {
		setTheme(true);
	}

	function lightMode() {
		setTheme(false);
	}

	function autoMode() {
		setTheme('auto');
	}

	function initTheme() {
		setTheme(localTheme ? JSON.parse(localTheme) : 'auto');
	}

	return {
		initTheme,
		darkMode,
		lightMode,
		autoMode
	};
}
