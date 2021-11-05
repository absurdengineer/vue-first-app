<template>
  <h3>{{ name }}</h3>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
    <button class="mt-20">Submit</button>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  components: {},
  props: ["name", "handleSubmit"],
};
</script>

<style></style>
