<template>
  <h1>Application</h1>
  <greeting :age="age" />
  <user :age="age" />
</template>

<script>
import Greeting from "./components/Greeting.vue";
import User from "./components/User.vue";

export default {
  name: "App",
  data() {
    return {
      age: 16,
    };
  },
  components: {
    Greeting,
    User,
  },
};
</script>
