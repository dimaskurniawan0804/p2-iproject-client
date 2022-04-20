import { createRouter, createWebHistory } from "vue-router";
import RegisterPage from "../views/RegisterPage.vue"
import LoginPage from "../views/LoginPage.vue"
import HomePage from "../views/HomePage.vue"

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
  ],
});

router.beforeEach((to, from, next) => {
  const authentication = localStorage.getItem("user_token")
  if (to.name === 'HomePage' && !authentication) next({ name: 'LoginPage' })
  else if (to.name === 'LoginPage' && authentication) next({ name: 'HomePage' })
  else if (to.name === 'RegisterPage' && authentication) next({ name: 'HomePage' })
  else next()
})
export default router;
