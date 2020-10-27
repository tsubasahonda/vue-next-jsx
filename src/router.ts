import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home } from "@/pages/Home";
import { About } from "@/components/About";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
