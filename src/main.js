import { createApp } from "vue";

// Custom imports

import PrimeVue from "primevue/config";
import "./assets/css/main.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "boxicons/css/boxicons.min.css";

import App from "./App.vue";
const app = createApp(App);

app.use(PrimeVue);
app.mount("#app");
