// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { auth } from './firebaseConfig';
import VueToastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.use(VueToastify);
    app.mount('#app');
  }
});
