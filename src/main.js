import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia'
import './assets/tailwind.css' 
import App from "./App.vue";
import FootballStore from "./pages/FootballStore.vue"
import NotFound from "./components/NotFound.vue"
import LoginUser from "./pages/LoginUser.vue"
import RegisterUser from "./pages/RegisterUser.vue"
import FootballStoreDetail from "./pages/FootballStoreDetail.vue"
import FootballCart from "./pages/FootballCart.vue"
import MyOrders from "./pages/MyOrders.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/store",
    },
    {
      path: "/store",
      component: FootballStore,
    },
    {
      path: "/store/:storeid",
      name: "detail",
      component: FootballStoreDetail,
      props:true
    },
    {
      path: "/cart",
            component: FootballCart,
          },
    {
      path: "/MyOrders",
            component: MyOrders,
          },
      {
      path: "/register",
      component: RegisterUser,
    },
    {
      path: "/login",
      component: LoginUser,
    },
    {
      path: "/:NotFound(.*)",
      component: NotFound,
    },
  ],
});
const app = createApp(App);
const pinia = createPinia()
app.use(router);
app.use(pinia)
app.mount("#app");