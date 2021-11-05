<template>
  <p>{{ message }}</p>
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

<style scoped lang="scss">
$color: red;
p {
  color: $color;
}
</style>
