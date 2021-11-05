import { createApp } from "vue";
import App from "./App.vue";
// Commented Code is for Global Registering the Components.
// import Greeting from "./components/Greeting.vue";

const vm = createApp(App);

// vm.component("Greeting", Greeting);

vm.mount("#app");
