import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import {createApp} from 'vue';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
import i18n from './i18n';

const app = createApp(App);

app.use(PrimeVue, {ripple: true});
app.use(router);
app.use(i18n);

app.mount('#app');
