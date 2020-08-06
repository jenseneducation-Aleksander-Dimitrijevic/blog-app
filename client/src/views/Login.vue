<template>
  <v-container fill-height>
    <v-row>
      <v-col>
        <v-form @submit.prevent="loginUser" ref="loginForm" v-model="isValid">
          <h1>Log in</h1>
          <v-text-field
            type="email"
            v-model="input.email"
            label="Your e-mail"
            prepend-icon="mdi-email"
            name="email"
            required
            :rules="emailRules"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            v-model="input.password"
            label="Your password"
            name="password"
            required
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            :rules="passwordRules"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          />
          <v-btn
            class="mt-4"
            width="100%"
            type="submit"
            color="teal"
            dark
            large
            :disabled="!isValid"
            >Log in</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isValid: false,
      input: {
        email: "",
        password: "",
      },
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
      showPassword: false,
    };
  },
  methods: {
    loginUser() {
      this.$store
        .dispatch("loginUser", {
          email: this.input.email,
          password: this.input.password,
        })
        .then(() => this.$router.push({ name: "dashboard" }));
    },
  },
};
</script>

<style lang="scss" scoped></style>
