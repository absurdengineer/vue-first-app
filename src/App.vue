<template>
  <h1>Application</h1>
  <greeting :age="age" />
  <user :age="age" @age-change="handleAgeChange" />
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
  methods: {
    handleAgeChange(order) {
      if (order === "i") this.age++;
      else this.age--;
    },
  },
  components: {
    Greeting,
    User,
  },
};
</script>
