import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);

app.use(router);
app.mount("#app");

// https://trello.com/b/wugdDEcK/supportticket-sprint-1
// https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-push-an-existing-project-to-GitHub
