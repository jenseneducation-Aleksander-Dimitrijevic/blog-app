<template>
  <div v-if="user">
    <router-view />
    <h1>Welcome back, {{ user.name }}</h1>
    <router-link :to="{ name: 'create' }">Create new blog</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "dashboard",
  created() {
    axios.get("//localhost:5000/api/users/dashboard").then(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      this.user = user;
    });
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
