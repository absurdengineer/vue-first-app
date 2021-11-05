<template>
  <h3>Home Page</h3>
</template>

<script>
export default {
  name: "Home",
  unmounted() {
    console.log("Home Component Unmounted.");
  },
  activated() {
    console.log("Home Component Activated.");
  },
  deactivated() {
    console.log("Home Component Deactivated");
  },
};
</script>

<style></style>
