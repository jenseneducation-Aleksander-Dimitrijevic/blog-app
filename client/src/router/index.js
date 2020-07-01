import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("@/views/Create.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("@/views/Blogs.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/blogs/edit/:id",
    name: "edit",
    props: true,
    component: () => import("@/views/Edit.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = JSON.parse(localStorage.getItem("user"));
  if (to.matched.some((route) => route.meta.requiresAuth && !isLoggedIn)) {
    next("/");
  } else {
    next();
  }
});

export default router;
