<template>
  <h3>Home Page</h3>
  <button @click="flag = !flag">Toggle</button>
  <transition name="fade" appear mode="out-in">
    <h5 v-if="flag" key="main">This is First Text</h5>
    <h5 v-else key="secondary">This is Another Text</h5>
  </transition>
</template>

<script>
export default {
  name: "Home",
  data() {
    return { flag: true };
  },
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

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
