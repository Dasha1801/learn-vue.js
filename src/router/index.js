import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: MainPage, name: "MainPage" },
  { path: "/about", component: AboutPage, name: "AboutPage" },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
