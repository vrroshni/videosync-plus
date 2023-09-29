import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import router from './routes';
import 'animate.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options={
  transition: "Vue-Toastification__bounce",
  autoClose: 2000,
}

const pinia = createPinia()
const app=createApp(App)
app.use(Toast,options)
app.use(pinia)
app.use(router);
app.mount('#app')
