<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      message: "Hello World",
    };
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
