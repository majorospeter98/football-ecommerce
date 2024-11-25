<template>
  <div class="site">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <p class="login"><router-link :to="'/login'">Login</router-link></p>
        <h2 class="text-4xl">Register</h2>
        <div :class="{ invalid: !email.isEmailIsValid }">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email.val"
            required
          />
          <p v-if="!email.isEmailIsValid"> Your email should be atleast 8 character</p>
        </div>
        <div :class="{ invalid: !userName.isUserNameIsValid }">
          <label for="userame">Username:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            v-model="userName.val"
            required
          />
          <p v-if="!userName.isUserNameIsValid">
             Your username should be atleast 8 character
          </p>
        </div>
        <div :class="{ invalid: !password.isPasswordIsValid }">
          <label for="name">Password:</label>
          <input
            type="password"
            id="name"
            name="name"
            v-model="password.val"
            required
          />
          <p v-if="!password.isPasswordIsValid">
            Your password should be atleast 8 character
          </p>
        </div>
        <div :class="{ invalid: !confirm.isPasswordIsConfirm }">
          <label for="passwordconf">Password Confirm:</label>
          <input
            type="type"
            id="passworconf"
            name="passwordconf"
            v-model="confirm.val"
            required
          />
          <p v-if="!confirm.isPasswordIsConfirm">
            Your passwords doesn't match
          </p>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>
<script>
import { useAuth } from "../stores/auth";
export default {
  data() {
    return {
      email: {
        val: "",
        isEmailIsValid: true,
        formIsValid: true,
      },
      userName: {
        val: "",
        isUserNameIsValid: true,
        formIsValid: true,
      },
      password: {
        val: "",
        isPasswordIsValid: true,
        formIsValid: true,
      },
      confirm: {
        val: "",
        isPasswordIsConfirm: true,
        formIsValid: true,
      },
      formIsValid: false,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.email.val === "" || this.email.val.length < 8) {
        this.email.isEmailIsValid = false;
        this.formIsValid = false;
      }
      if (this.userName.val === "" || this.userName.val.length < 8) {
        this.userName.isUserNameIsValid = false;
        this.formIsValid = false;
      }
      if (this.password.val === "" || this.password.val.length < 8) {
        this.password.isPasswordIsValid = false;
        this.formIsValid = false;
      }
      if (this.password.val !== this.confirm.val) {
        this.confirm.isPasswordIsConfirm = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const auth = useAuth();
      let emailIsExist = auth.registeredUsers.filter(
        (registeredEmail) => registeredEmail.email === this.email.val
      );
            const registeredUser = {
        email: this.email.val,
        userName: this.userName.val,
        password: this.password.val,
      };
      if (emailIsExist.length > 0) {
        alert("Már regisztráltak ezzel az email címmel");
      } else {
        auth.registeredUsers.push(registeredUser);
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
.site {
  display: flex;
  justify-content: center;
  background-color: #1c1717;;
  min-height: 900px;
}
.form-container {
  margin-top: 2rem;
  margin-top: 2rem;
  height: 100%;
  min-height: 700px;
  width: 90%;
  max-width: 600px;
  padding: 22px;
   background-image: linear-gradient(#990000,#FF0000 );
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color:white;
}
.login {
  text-align: end;
}
form {
  display: flex;
  flex-direction: column;
  
}
h2 {
  margin-bottom: 10px;
  text-align: center;
}
p,a {
  text-align: center;
  color:white;
  text-decoration: none;
}
label {
  margin-bottom: 5px;
}
input,
textarea {
  margin-bottom: 10px;
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
button {
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: #f5f1f1;
  color: #111111;
  cursor: pointer;
  width: 50%;
  margin: 2rem auto;
}
.invalid label {
  color: red;
}
.invalid input {
  border: 2px red double;
}
</style>
