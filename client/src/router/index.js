import { createRouter, createWebHistory } from "vue-router";
import RegisterPage from "../views/RegisterPage.vue"
import LoginPage from "../views/LoginPage.vue"
import HomePage from "../views/HomePage.vue"
import DetailPage from "../views/DetailPage.vue"

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
  ],
});

router.beforeEach((to, from, next) => {
  const authentication = localStorage.getItem("user_token")
  if (to.name === 'home' && !authentication) next({ name: 'login' })
  else if (to.name === 'login' && authentication) next({ name: 'home' })
  else if (to.name === 'register' && authentication) next({ name: 'home' })
  else next()
})
export default router;
