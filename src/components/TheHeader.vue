<template>
  <div>
    <header id="header" class="container">
      <router-link to="/store">Store</router-link>
      <router-link to="/MyOrders" v-if="isLoggedin">My Orders</router-link>
       <span v-if="isLoggedin">User: {{ getEmail }}</span>
       <router-link :to="'/'" @click="logOut" v-if="isLoggedin"
        >Logout</router-link
      >
          <router-link to="/login" v-if="!isLoggedin">Login</router-link>
      <router-link to="/register" v-if="!isLoggedin">Register</router-link>
      <section id="svg">
        <router-link to="/cart">
          <svg
            width="100px"
            height="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-1"
          >
            <path
              fill-rule="evenodd"
              d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </section>
     
    </header>
  </div>
</template>
<script>
import { useAuth } from "../stores/auth";
export default {
  data() {
    return {
      results: "ss",
      teszt: false,
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
 
    this.teszt = auth.getIsUser;
  },
};
</script>
<style scoped>

#header {
  margin-top:1rem;
  min-height: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
color:white;
  padding: 0.5rem;
background: linear-gradient(to left, #2b0000, #6b3030);
border-radius: 10px;
}
#header a {
  color:white;
    text-decoration: none;
  letter-spacing: 0.1rem;
}
#header a:hover{
  border-bottom:2px white solid;
}

@media  (max-width:700px) {
  #header{
    min-height: 400px;
    padding-top:2rem;
    flex-direction: column;
    gap:1rem;
    font-size:1.2rem;
    border-radius: 0px;
   
  }
}
</style>
