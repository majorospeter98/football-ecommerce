<template>
  <div class=" flex justify-center">
    <div class="form-container text-black m-4 min-h-200 w-[90%] max-w-[600px] p-6 rounded-xl bg-gradient-to-r from-darkRedGradient to-lighRedGradient">
      <form @submit.prevent="submitForm" class="flex flex-col">
        <p class="login text-right "><router-link class="hover:border-none" :to="'/login'">Login</router-link></p>
        <h2 class="text-4xl text-center text-white mb-3">Register</h2>
        <div :class="{ invalid: !email.isEmailIsValid }">
          <label class="text-white mb-2" for="email">Email:</label>
          <input  class="input"
            type="email"
            id="email"
            name="email"
            v-model="email.val"
            required
          />
          <p class="text-white text-center" v-if="!email.isEmailIsValid"> Your email should be atleast 8 character</p>
        </div>
        <div :class="{ invalid: !userName.isUserNameIsValid }">
          <label class="text-white mb-2" for="userame">Username:</label>
          <input class="input"
            type="text"
            id="userName"
            name="userName"
            v-model="userName.val"
            required
          />
          <p class="text-white text-center" v-if="!userName.isUserNameIsValid">
             Your username should be atleast 8 character
          </p>
        </div>
        <div :class="{ invalid: !password.isPasswordIsValid }">
          <label class="text-white mb-2" for="name">Password:</label>
          <input class="input"
            type="password"
            id="name"
            name="name"
            v-model="password.val"
            required
          />
          <p class="text-white text-center" v-if="!password.isPasswordIsValid">
            Your password should be atleast 8 character
          </p>
        </div>
        <div :class="{ invalid: !confirm.isPasswordIsConfirm }">
          <label class="text-white mb-2" for="passwordconf">Password Confirm:</label>
          <input class="input"
            type="type"
            id="passworconf"
            name="passwordconf"
            v-model="confirm.val"
            required
          />
          <p class="text-white text-center" v-if="!confirm.isPasswordIsConfirm">
            Your passwords doesn't match
          </p>
        </div>
        <button class="button" type="submit">Register</button>
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
        alert("Already Registered with this email address ");
      } else {
        auth.registeredUsers.push(registeredUser);
        alert("Successful registration!")
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
.invalid input {

  outline: 7px #053896
solid;
}
</style>
