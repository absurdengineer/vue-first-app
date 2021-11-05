<template>
  <slot name="description"></slot>
  <form @submit.prevent="handleSubmit">
    <slot></slot>
    <slot name="buttons"></slot>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
  components: {},
  props: ["handleSubmit"],
};
</script>

<style></style>
