import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminRouts from "./Admin/Admin";

Vue.use(VueRouter);

const baseRoutes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];
const routes = [...baseRoutes, ...AdminRouts];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
