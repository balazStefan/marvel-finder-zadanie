import { createRouter, createWebHistory } from "vue-router";

const HeroDetails = () => import("./components/HeroDetails.vue");
const FavoriteHeroes = () =>
  import("./Pages/FavoriteHeroes/FavoriteHeroes.vue");
const HomePage = () => import("./Pages/HomePage.vue");
const NotFound = () => import("./Pages/NotFound.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/favorite",
      component: FavoriteHeroes,
    },
    {
      path: "/home/:id",
      component: HeroDetails,
    },

    {
      path: "/:NotFound(.*)",
      component: NotFound, // potom zmeniť na NotFound
    },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

export default router;
