<template>
  <h1>Vue Application</h1>
  <select v-model="activeComponent">
    <option value="Home">Home</option>
    <option value="Login">Login</option>
  </select>
  <component :is="activeComponent"></component>
</template>

<script>
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";

export default {
  name: "App",
  components: {
    Home,
    Login,
  },
  data() {
    return {
      activeComponent: "Home",
    };
  },
};
</script>

<style></style>
