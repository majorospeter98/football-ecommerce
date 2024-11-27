<template>
  <div>
    <header
      id="header"
      class="container mt-3 min-h-20 flex justify-evenly items-center p-2 bg-gradient-to-l from-darkBrownGradient to-lightBrownGradient max-md:flex-col max-md:min-h-96"
    >
      <router-link to="/store">Store</router-link>
      <router-link to="/MyOrders" v-if="isLoggedin">My Orders</router-link>
      <span class="text-white" v-if="isLoggedin"> User: {{ getEmail }}</span>
      <router-link :to="'/'" @click="logOut" v-if="isLoggedin"
        >Logout</router-link
      >
      <router-link to="/login" v-if="!isLoggedin">Login</router-link>
      <router-link to="/register" v-if="!isLoggedin">Register</router-link>
      <section id="svg">
        <router-link to="/cart">
          <svg
            class="w-8 h-8 text-white svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            border="none"
            stroke="none"
          >
            <path
              d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
            />
          </svg>
          <h3 class="text-center">{{ getCartLength }}</h3>
        </router-link>
      </section>
    </header>
  </div>
</template>
<script>
import { useAuth } from "../stores/auth";
import { useCart } from "../stores/cart";

export default {
  data() {
    return {
      currentUser: false,
    };
  },
  computed: {
    isLoggedin() {
      const auth = useAuth();
      const isUserLogged = auth.getIsUser;
      return isUserLogged;
    },
    getEmail() {
      const auth = useAuth();
      const whoisLoggedIn = auth.whoisLoggedIn;
      return whoisLoggedIn;
    },
    getCartLength() {
      const cart = useCart();
      const cartLength = cart.cart.length;
      return cartLength;
    },
  },
  methods: {
    logOut() {
      const auth12 = useAuth();
      auth12.isUserLoggedIn = false;
      auth12.whoisLoggedIn = null;
    },
  },
  created() {
    const auth = useAuth();

    this.currentUser = auth.getIsUser;
  },
};
</script>
