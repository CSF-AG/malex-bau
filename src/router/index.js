import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DienstleistungenView from "../views/DienstleistungenView.vue";
import GalerieView from "../views/GalerieView.vue";
import KontaktView from "../views/KontaktView.vue";
import OfferteView from "../views/OfferteView.vue";
import ImpressumView from "../views/ImpressumView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dienstleistungen",
      name: "dienstleistungen",
      component: DienstleistungenView,
    },
    {
      path: "/galerie",
      name: "galerie",
      component: GalerieView,
    },
    {
      path: "/kontakt",
      name: "kontakt",
      component: KontaktView,
    },
    {
      path: "/offerte",
      name: "offerte",
      component: OfferteView,
    },
    {
      path: "/impressum",
      name: "impressum",
      component: ImpressumView,
    },
  ],
});

export default router;
