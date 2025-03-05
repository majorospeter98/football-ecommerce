<template>
  <div class="site flex justify-center bg-[var(--black)]">
    <div
      class="form-container m-8 w-[90%] h-[530px] max-w-[600px] p-6 rounded-lg bg-gradient-to-l from-lighRedGradient to-darkRedGradient"
    >
      <form @submit.prevent="loginUser" class="flex flex-col">
        <p class="text-end">
          <router-link class="hover:border-b-0" :to="'/register'"
            >{{$t("Register")}}</router-link
          >
        </p>
        <h2 class="text-4xl text-center text-white">{{$t("Login")}}</h2>
        <label class="text-white" for="email">Email:</label>
        <input
          class="mb-7 p-3 rounded-lg"
          type="email"
          id="email"
          name="email"
          v-model="email"
          required
        />
        <label class="text-white" for="name">{{$t("Password")}}:</label>
        <input autocomplete
          type="password"
          class="mb-7 p-3 rounded-lg"
          id="password"
          name="password"
          v-model="password"
          required
        />
        <button class="button" type="submit">{{$t("Login")}}</button>
      </form>
    </div>
  </div>
</template>
<script>
import { useAuth } from "../stores/auth";
import { useToast } from "vue-toastification";
export default {
  data() {
    return {
      email: "",
      password: "",
      toast: useToast()
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
        this.toast.success(this.$t("LoggedIn"));
        this.$router.push("/store");
      } else {
        this.toast.error(this.$t("WrongLogin"));
        
      }
    },
  },
};
</script>
