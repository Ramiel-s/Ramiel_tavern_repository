<<<<<<< HEAD
import App from './App.vue';

$(() => {
=======
import { waitUntil } from 'async-wait-until';
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
>>>>>>> 951ccd9ef4542130071c3067b09bef4651ce8128
  createApp(App).use(createPinia()).mount('#app');
});
