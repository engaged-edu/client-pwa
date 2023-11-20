import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import {createApp} from 'vue';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
import i18n from './locale';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(PrimeVue, {ripple: true});

app.mount('#app');
