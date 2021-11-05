<template>
  <login-form :handleSubmit="handleSubmit">
    <template v-slot:description>
      <h3>Login Form</h3>
    </template>
    <custom-input
      v-for="field in fields"
      :key="field"
      :name="field.name"
      :type="field.type"
      :label="field.label"
      :required="field.required"
      @custom-input="handleInput"
    />
    <template v-slot:buttons>
      <button type="reset" class="mt-20">Reset</button>
      <button class="mt-20">Submit</button>
    </template>
  </login-form>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import CustomInput from "../components/CustomInput.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
    CustomInput,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      fields: [
        {
          name: "email",
          type: "email",
          label: "Email",
          required: true,
        },
        {
          name: "password",
          type: "password",
          label: "Password",
          required: true,
        },
      ],
    };
  },
  methods: {
    handleInput(event) {
      this.formData[event.target.name] = event.target.value;
    },
    handleSubmit() {
      console.log("Submitted");
      console.log("Data : ", this.formData);
      alert(
        ` Data Submitted with \n Email : ${this.formData.email} \n Password : ${this.formData.password}`
      );
    },
  },
};
</script>

<style>
.mt-20 {
  margin-top: 20px;
}
</style>
