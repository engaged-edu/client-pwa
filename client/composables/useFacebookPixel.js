export function useFacebookPixel() {
	function createCheckoutObject(data) {
		const invoiceItems = (
			Array.isArray(data.invoiceItems) ? data.invoiceItems : []
		).map((item) => {
			const price = (item?.product?.prices?.[0]?.billingConfig?.unitAmount ?? 0) / 100;

			return {
				id: item?.product?.prices?.[0]?._id ?? '',
				quantity: item?.quantity ?? 0,
				itemPrice: price || 0,
				title: item?.product?.name ?? 'Unknown Product'
			};
		});

		const contentIds = Array.isArray(invoiceItems) ? invoiceItems.map((item) => item.id) : [];
		const totalValue = Array.isArray(invoiceItems) ? invoiceItems.reduce((total, item) => total + item.quantity * item.item_price,
			0) : 0;

		return {
			sourceUrl: window.location.href,
			orderId: data?._id ?? '',
			checkoutId: data?._id ?? '',
			checkoutName: data?.description ?? '',
			contentName: 'Pagina de Checkout',
			contentType: 'product',
			contentIds: contentIds,
			contents: invoiceItems,
			numItens: invoiceItems.length,
			value: totalValue,
			currency: data?.currency ?? 'BRL',
			eventID: `IniciateCheckout:${data?._id ?? ''}`
		};
	}

	function trackEvent(event, params) {
		if (window.fbq) {
			window.fbq('track', event, params);
		}
	}

	function initializePixel(appId) {
		if (window.fbq) {
			window.fbq('init', appId);
		}
	}

	function trackPageView() {
		if (window.fbq) {
			window.fbq('track', 'PageView');
		}
	}

	function trackFbViewContent(data) {
		if (!window.fbq) {
			window.fbq('track', 'ViewContent', data);
		}
	}

	function trackInitiateCheckout(data) {
		if (window.fbq) {
			const checkoutData = createCheckoutObject(data);

			window.fbq('track', 'InitiateCheckout', checkoutData);
		}
	}

	function trackSubscribeEvent(data) {
		if (window.fbq) {
			const checkoutData = createCheckoutObject(data);

			window.fbq('track', 'Subscribe', checkoutData);
		}
	}

	function trackLeadEvent(data) {
		const checkoutData = createCheckoutObject(data);

		if (window.fbq) {
			window.fbq('track', 'Lead', checkoutData);
		}
	}

	function trackPurchaseEvent(data, purchase) {
		if (window.fbq) {
			const checkoutData = createCheckoutObject(data);
			const payload = {
				...checkoutData,
				sourceUrl: data.sourceUrl || window.location.href,
				orderId: purchase?._id,
				checkoutId: purchase?.payment?._id,
				checkoutName: data?.checkoutName,
				contentName: 'Tela do Checkout'
			};

			window.fbq('track', 'Purchase', payload);
		}
	}

	return {
		trackPurchaseEvent,
		trackSubscribeEvent,
		trackInitiateCheckout,
		trackLeadEvent,
		trackFbViewContent,
		createCheckoutObject,
		trackPageView,
		initializePixel,
		trackEvent
	};
}
