import { useBreakpoints as useBp } from '@vueuse/core';

export function useBreakpoints() {
	const breakpoints = useBp({
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	});

	return {
		breakpoints,
		largeScreen: computed(() => breakpoints.greaterOrEqual('lg').value),
		smallScreen: computed(() => breakpoints.smaller('lg').value)
	};
}
