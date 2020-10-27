import { createApp, App as Application } from "vue";
import { RouterHistory, Router } from "vue-router";
import { router } from "@/router";
import { App } from "@/App";
import "@/styles";

declare global {
  interface Window {
    h: RouterHistory;
    r: Router;
    vm: ReturnType<Application["mount"]>;
  }
}

const app = createApp(App);
app.use(router);

app.mount("#app");
