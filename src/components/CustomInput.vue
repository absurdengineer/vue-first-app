<template>
  <div class="mt-20">
    <label>{{ label }} : </label>
    <br />
    <input
      :type="type"
      :name="name"
      @input="handleInput"
      :required="required"
    />
    <br />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: ["name", "label", "type", "required"],
  methods: {
    handleInput(event) {
      this.$emit("custom-input", event);
    },
  },
};
</script>

<style></style>
