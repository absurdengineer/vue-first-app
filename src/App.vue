<template>
  <h1>Application</h1>
  <greeting />
</template>

<script>
import Greeting from "./components/Greeting.vue";

export default {
  name: "App",
  components: {
    Greeting,
  },
};
</script>
