<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" v-show="!loggedIn">Home</router-link>
      </li>
      <li>
        <router-link to="/dashboard" v-show="loggedIn">Dashboard</router-link>
      </li>
      <li>
        <router-link to="/blogs" v-show="loggedIn">My blogs</router-link>
      </li>
      <li>
        <router-link to="/register" v-show="!loggedIn">Sign up</router-link>
      </li>
      <li>
        <router-link to="/login" v-show="!loggedIn">Sign in</router-link>
      </li>
      <li>
        <button v-show="loggedIn" @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  computed: { ...mapGetters(["loggedIn"]) },
  methods: {
    logout() {
      localStorage.removeItem("user");
      location.reload();
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
