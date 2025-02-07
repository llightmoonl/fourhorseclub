import { createApp } from 'vue';
import App from './App.vue';
import router from './services/router.ts';

import '@/assets/styles/style.scss';

createApp(App)
    .use(router)
    .mount('#app')
