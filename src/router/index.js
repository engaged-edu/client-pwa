import { createRouter, createWebHistory } from 'vue-router';
import { i18n } from '@/i18n';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/payment-link',
			name: 'payment-link',
			component: () => import('../views/PaymentLinkView.vue'),
			meta: { title: i18n.t('payment.title') },
			children: [
				{
					path: 'credit-card',
					name: 'payment-link-method-credit-card',
					component: () => import('../views/MethodCreditCard.vue'),
					meta: { name: i18n.t('payment.methods.creditCard') }
				},
				{
					path: 'bank-slip',
					name: 'payment-link-method-bank-slip',
					component: () => import('../views/MethodBankSlip.vue'),
					meta: { name: i18n.t('payment.methods.bankSlip') }
				},
				{
					path: 'pix',
					name: 'payment-link-method-pix',
					component: () => import('../views/MethodPix.vue'),
					meta: { name: i18n.t('payment.methods.pix') }
				}
			]
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: () => import('../views/CheckoutView.vue'),
			meta: { title: i18n.t('payment.checkout') },
			children: [
				{
					path: 'credit-card',
					name: 'checkout-method-credit-card',
					component: () => import('../views/MethodCreditCard.vue'),
					meta: { name: i18n.t('payment.methods.creditCard') }
				},
				{
					path: 'bank-slip',
					name: 'checkout-method-bank-slip',
					component: () => import('../views/MethodBankSlip.vue'),
					meta: { name: i18n.t('payment.methods.bankSlip') }
				},
				{
					path: 'pix',
					name: 'checkout-method-pix',
					component: () => import('../views/MethodPix.vue'),
					meta: { name: i18n.t('payment.methods.pix') }
				}
			]
		}
	]
});

export default router;
