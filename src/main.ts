import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import { isDevMode } from '@/utils/env';

const app = createApp(App);
app.use(router);
app.use(store);

if (!isDevMode()) {
  // @ts-ignore
  app.config.devtools = false;
} else {
  // @ts-ignore
  app.config.devtools = true;
}

// 挂载全局变量
window['$vue'] = app;

app.mount('#app');
