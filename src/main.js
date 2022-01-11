import { createApp, defineAsyncComponent } from "vue";
import store from "./store.js";
import router from "./router";
import App from "./App.vue";

const TheHeader = defineAsyncComponent(() =>
  import("./components/UI/TheHeader.vue")
);
const BaseCard = defineAsyncComponent(() =>
  import("./components/UI/BaseCard.vue")
);
const BaseSpinner = defineAsyncComponent(() =>
  import("./components/UI/BaseSpinner.vue")
);
const BaseDialog = defineAsyncComponent(() =>
  import("./components/UI/BaseDialog.vue")
);

import "./assets/tailwind.css";
const app = createApp(App);
app.component("the-header", TheHeader);
app.component("base-card", BaseCard);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.use(store);
app.use(router);
app.mount("#app");
