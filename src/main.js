import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/tailwindcss/main.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store/index.js';



const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount("#app")
