<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-form @submit.prevent="register" v-model="isValid" ref="signupForm">
          <h1 class="mb-4 text-center">Register</h1>
          <v-text-field
            type="text"
            v-model="input.name"
            label="Enter your name"
            color="teal"
            name="name"
            required
            :rules="nameRules"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            type="email"
            v-model="input.email"
            label="Enter your E-mail"
            name="email"
            color="teal"
            required
            :rules="emailRules"
            prepend-icon="mdi-email"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="input.password"
            label="Enter a password"
            name="password"
            color="teal"
            required
            :rules="passwordRules"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          <v-text-field
            v-model="input.repeatPassword"
            name="repeatPassword"
            label="Confirm password"
            color="teal"
            required
            type="password"
            prepend-icon="mdi-lock"
            :rules="repeatPasswordRules"
          />
          <v-btn
            :disabled="!isValid"
            class="mt-4"
            width="100%"
            type="submit"
            color="teal"
            dark
            large
            >Sign up</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      isValid: false,
      input: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
      nameRules: [(value) => !!value || "Name is required"],
      emailRules: [
        (value) => !!value || "E-mail is required",
        (value) => value.indexOf("@") !== 0 || "Email should have a username.",
        (value) => value.includes("@") || "Email should include an @ symbol.",
        (value) =>
          value.indexOf(".") - value.indexOf("@") > 1 ||
          "Email should contain a valid domain.",
        (value) =>
          value.includes(".") || "Email should include a period symbol.",
        (value) =>
          value.indexOf(".") <= value.length - 3 ||
          "Email should contain a valid domain extension.",
      ],
      passwordRules: [
        (value) => !!value || "Password is required",
        (value) => value.length > 5 || "Password is too short",
      ],
      repeatPasswordRules: [
        (value) => !!value || "Please repeat password",
        (value) => value === this.input.password || "No match",
      ],
      showPassword: false,
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("registerUser", {
          name: this.input.name,
          email: this.input.email,
          password: this.input.password,
          repeatPassword: this.input.repeatPassword,
        })
        .then(() => this.$router.push({ name: "dashboard" }));
    },
  },
};
</script>

<style lang="scss" scoped></style>
