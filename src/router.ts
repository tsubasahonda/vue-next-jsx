import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home } from "@/pages/Home";
import { About } from "@/components/About";
import { Mountain } from "@/pages/Mountain";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/mountains/:slug", component: Mountain, name: "MountainPage" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
