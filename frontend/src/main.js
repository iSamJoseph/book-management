
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import store from './Store/store'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)

const options = {
    
};

app.use(Toast, options);

app.use(store)
app.use(router)

app.mount('#app')
