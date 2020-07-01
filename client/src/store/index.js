import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    createdBlogs: [],
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
    SET_BLOG(state, blogData) {
      state.createdBlogs.push(blogData);
    },
  },
  actions: {
    registerUser({ commit }, credentials) {
      return axios
        .post("//localhost:5000/api/users/register", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    loginUser({ commit }, credentials) {
      return axios
        .post("//localhost:5000/api/users/login", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    createBlog({ commit }, blog) {
      axios.post("//localhost:5000/api/blogs", blog).then(({ data }) => {
        commit("SET_BLOG", data);
      });
    },
    updateBlog({ commit }, blog) {
      return axios
        .post("//localhost:5000/api/blogs/update", blog)
        .then(({ data }) => {
          commit("SET_BLOG", data);
        });
    },
  },
  getters: {
    loggedIn(state) {
      return !!state.user;
    },
    isBlogCreated(state) {
      return state.createdBlogs.length > 0;
    },
  },
});
