import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import "material-icons/iconfont/filled.css";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
