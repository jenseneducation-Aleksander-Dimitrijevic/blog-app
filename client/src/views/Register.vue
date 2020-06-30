<template>
  <div>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Enter your name</label>
        <input type="text" v-model="input.name" id="name" name="name" />
      </div>
      <div class="form-group">
        <label for="email">Enter your e-mail</label>
        <input type="text" v-model="input.email" id="email" name="email" />
      </div>
      <div class="form-group">
        <label for="password">Enter a password</label>
        <input
          type="password"
          v-model="input.password"
          id="password"
          name="password"
        />
      </div>
      <div class="form-group">
        <label for="repeatPassword">Confirm password</label>
        <input
          type="password"
          v-model="input.repeatPassword"
          id="repeatPassword"
          name="repeatPassword"
        />
      </div>
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      input: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      },
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
