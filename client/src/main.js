import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const isLoggedIn = JSON.parse(localStorage.getItem("user"));
    if (isLoggedIn) {
      store.commit("SET_USER_DATA", isLoggedIn);
    }
  },
  render: (h) => h(App),
}).$mount("#app");
