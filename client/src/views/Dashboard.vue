<template>
  <v-container v-if="user" fill-height>
    <router-view />
    <v-row>
      <v-col class="text-center">
        <h2>Hi there, {{ user.name }}</h2>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn class="mt-4 mt-auto" :to="{ name: 'create' }" color="teal" dark
          >Create new blog</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "dashboard",
  created() {
    axios
      .get("https://blogsite-demo.herokuapp.com/api/users/dashboard")
      .then(() => {
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
