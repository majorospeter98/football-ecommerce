<template>
  <div class="site flex justify-center bg-[var(--black)]">
    <div class="form-container m-8 w-[90%] h-[530px] max-w-[600px] p-6 rounded-lg bg-gradient-to-l from-lighRedGradient to-darkRedGradient">
      <form @submit.prevent="loginUser" class="flex flex-col">
        <p class="text-end "><router-link class="hover:border-b-0" :to="'/register'">Register</router-link></p>
        <h2 class="text-4xl">Login</h2>
        <label class="text-white" for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required />
        <label class="text-white" for="name">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
        />
        <button class="button-10" type="submit">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
import { useAuth } from "../stores/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      const auth = useAuth();
      const userCheck = auth.registeredUsers.filter(
        (user) => user.email === this.email && user.password === this.password
      );
      if (userCheck.length > 0) {
        const auth = useAuth();
        auth.isUserLoggedIn = true;
        auth.whoisLoggedIn = this.email;
        auth.changeIsUser(true);
        alert("Successfully logged in");
        this.$router.push("/store");
      } else {
        alert("Wrong Email/Password");
      }
    },
  },
};
</script>
<style scoped>


h2 {
  margin-bottom: 20px;
  text-align: center;
  color:white;
}

input,
textarea {
  margin-bottom: 25px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
button {
  padding: 15px;
  border: none;
  border-radius: 20px;
  background-color: white;
  color: var(--black);
  cursor: pointer;
  width: 50%;
  margin: 2rem auto;
}
</style>
