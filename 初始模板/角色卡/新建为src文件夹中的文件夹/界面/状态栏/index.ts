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
>>>>>>> 1fdfca54e89542414750e2c88ad8fca7d4a3f85c
  createApp(App).use(createPinia()).mount('#app');
});
