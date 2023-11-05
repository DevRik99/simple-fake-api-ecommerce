import { createApp } from "vue";

// Custom imports

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "./assets/css/main.css";
import "boxicons/css/boxicons.min.css";

import App from "./layout.vue";
import router from "./routes/routes";
const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.mount("#app");
