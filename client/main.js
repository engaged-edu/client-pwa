import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import { createHead } from '@unhead/vue';

import App from './App.vue';
import router from './router';
import i18n from './i18n';

const app = createApp(App);
const head = createHead();

app.use(PrimeVue, { ripple: false });
app.use(ConfirmationService);
app.use(ToastService);
app.use(head);
app.use(router);
app.use(i18n);

app.mount('#app');
