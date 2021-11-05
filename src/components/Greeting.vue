<template>
  <h3>Hello {{ user }}</h3>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    user() {
      if (this.age < 12) return "Child";
      else if (this.age >= 12 && this.age < 18) return "Teen";
      else if (this.age >= 18 && this.age < 55) return "Adult";
      else return "Sr. Citizen";
    },
  },
  methods: {
    handleAgeChange(order) {
      if (order === "i") this.age++;
      else this.age--;
    },
  },
  props: ["age"],
};
</script>

<style scoped lang="scss">
$color: red;
h3 {
  color: $color;
}
</style>
