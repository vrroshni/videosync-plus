import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './routes';
import 'animate.css';
import 'vue3-toastify/dist/index.css';
import Vue3Toastify from 'vue3-toastify';

const pinia = createPinia()
const app=createApp(App)
app.use(Vue3Toastify,{
    autoClose: 3000,
  } )
app.use(pinia)
app.use(router);
app.mount('#app')
