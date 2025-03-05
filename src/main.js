import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia'
import EN from "./components/locales/en.json"
import HU from "./components/locales/hu.json"
import './assets/tailwind.css' 
import { createI18n } from "vue-i18n";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
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
const messages ={
  hu: HU,
en : EN,

}
const i18n= createI18n({
  locale: 'hu',
  fallbackLocale: "en",
  globalInjection:true,
    messages
})
const app = createApp(App);
const pinia = createPinia()
app.use(i18n);
app.use(Toast,{timeout: 1500})
app.use(router);
app.use(pinia)
app.mount("#app");