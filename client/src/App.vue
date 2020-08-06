<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <v-toolbar-title v-if="!loggedIn">
        <v-btn text rounded to="/">
          <h1 class="text-capitalize">BlogSite</h1>
        </v-btn>
      </v-toolbar-title>
      <v-toolbar-title v-else>
        <v-btn text rounded to="/dashboard">
          <h1 class="text-capitalize">Dashboard</h1>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-card class="text-center">
      <v-navigation-drawer temporary app color="white" v-model="drawer">
        <v-container fill-height>
          <v-list class="mx-auto" dense nav text-center>
            <v-list-item link v-show="!loggedIn">
              <router-link to="/">Home</router-link>
            </v-list-item>
            <v-list-item link v-show="loggedIn">
              <router-link to="/dashboard">Dashboard</router-link>
            </v-list-item>
            <v-list-item link v-show="loggedIn">
              <router-link to="/blogs">My blogs</router-link>
            </v-list-item>
            <v-list-item link v-show="!loggedIn">
              <router-link to="/register">Sign up</router-link>
            </v-list-item>
            <v-list-item link v-show="!loggedIn">
              <router-link to="/login">Sign in</router-link>
            </v-list-item>
            <v-list-item link v-show="loggedIn">
              <v-btn color="red darken-2" dark @click="logout">Logout</v-btn>
            </v-list-item>
          </v-list>
        </v-container>
      </v-navigation-drawer>
    </v-card>
    <v-main>
      <router-view />
    </v-main>
    <v-footer absolute class="font-weight-small">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>BlogSite</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    drawer: false,
    links: [
      {
        label: "Home",
        url: "/",
      },
      {
        label: "Sign In",
        url: "/login",
      },
      {
        label: "Sign Up",
        url: "/register",
      },
      {
        label: "Dashboard",
        url: "/dashboard",
      },
      {
        label: "Blogs",
        url: "/blogs",
      },
    ],
  }),
  computed: { ...mapGetters(["loggedIn"]) },
  methods: {
    logout() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
};
</script>
<style lang="scss"></style>
