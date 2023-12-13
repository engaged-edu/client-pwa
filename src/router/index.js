import {createRouter, createWebHistory} from 'vue-router';
import {i18n} from '@/i18n';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/payment-link',
			name: 'payment-link',
			component: () => import('../views/PaymentLinkView.vue'),
			meta: {title: i18n.t('paymentLink.title')}
		}
	]
});

export default router;
