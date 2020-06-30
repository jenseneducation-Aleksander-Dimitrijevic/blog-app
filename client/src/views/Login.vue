<template>
  <div>
    <form @submit.prevent="loginUser">
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
      <button>Sign up</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
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
