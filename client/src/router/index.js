import { createRouter, createWebHistory } from "vue-router";
import RegisterPage from "../views/RegisterPage.vue"
import LoginPage from "../views/LoginPage.vue"
import HomePage from "../views/HomePage.vue"
import DetailPage from "../views/DetailPage.vue"
import ItineraryPage from "../views/IteneraryPage.vue"
import GalleryPage from "../views/GalleryPage.vue"
import PostForm from "../views/FormGalleryPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/detail",
      name: "detail",
      component: DetailPage,
    },
    {
      path: "/itinerary",
      name: "itinerary",
      component: ItineraryPage,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: GalleryPage,
    },
    {
      path: "/formGallery",
      name: "formGallery",
      component: PostForm,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authentication = localStorage.getItem("user_token")
  if (to.name === 'home' && !authentication) next({ name: 'login' })
  else if (to.name === 'login' && authentication) next({ name: 'home' })
  else if (from.name === "home", to.name === 'register' && authentication) next({ name: 'home' })
  else if (to.name === 'itinerary' && !authentication) next({ name: 'login' })
  else if (to.name === 'gallery' && !authentication) next({ name: 'login' })
  else if (to.name === 'formGallery' && !authentication) next({ name: 'login' })
  else next()
})
export default router;
