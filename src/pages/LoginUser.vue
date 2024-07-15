<template>
  <div class="site">
    <div class="form-container">
      <form @submit.prevent="loginUser">
        <p><router-link :to="'/register'">Register</router-link></p>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required />
        <label for="name">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          required
        />
        <button class="button-9" type="submit">Login</button>
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
      const emailCheck = auth.registeredUsers.filter(
        (user) => user.email === this.email && user.password === this.password
      );
      if (emailCheck.length > 0) {
        const auth = useAuth();
        auth.isUserLoggedIn = true;
        auth.whoisLoggedIn = this.email;
        auth.changeIsUser(true);
        alert("Succesfully loged in");
        this.$router.push("/store");
      } else {
        alert("Wrong email/password");
      }
    },
  },
};
</script>
<style scoped>
.site {
  display: flex;
  justify-content: center;
  background-color: #1434a4;
  height: 90vh;
}
.form-container {
  margin-top: 5rem;
  height: 520px;
  width: 90%;
  max-width: 600px;
  padding: 22px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
p {
  text-align: end;
}
form {
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 20px;
  text-align: center;
}
label {
  margin-bottom: 5px;
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
  border-radius: 4px;
  background-color: #d4110a;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
}
</style>
