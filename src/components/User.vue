<template>
  <p>User is {{ age }} Years Old.</p>
  <button @click="handleAgeChange('i')">Increment Age</button>
  <button @click="handleAgeChange('d')">Increment Age</button>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["age-change"],
  methods: {
    handleAgeChange(order) {
      this.$emit("age-change", order);
    },
  },
};
</script>

<style></style>
