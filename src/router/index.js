import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import People from "../views/People/People.vue";
import Planets from "../views/Planets/Planets.vue";
import Starships from "../views/Starships/Starships.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/people",
    name: "People",
    component: People,
  },
  {
    path: "/planets",
    name: "Planets",
    component: Planets,
  },
  {
    path: "/starships",
    name: "Starships",
    component: Starships,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
