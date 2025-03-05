<template>
  <div class="flex justify-center">
    <div
      class="form-container text-black m-4 min-h-200 w-[90%] max-w-[600px] p-6 rounded-xl bg-gradient-to-r from-darkRedGradient to-lighRedGradient"
    >
      <form @submit.prevent="submitForm" class="flex flex-col">
        <p class="login text-right">
          <router-link class="hover:border-none" :to="'/login'"
            >{{$t("Login")}}</router-link
          >
        </p>
        <h2 class="text-4xl text-center text-white mb-3">{{$t("Register")}}</h2>
        <div>
          <label class="text-white mb-2" for="email">Email:</label>
          <input
            class="input"
            type="email"
            id="email"
            name="email"
            v-model="email.val"
            required
          />
                </div>
        <div>
          <label class="text-white mb-2" for="userame">{{$t("Username")}}:</label>
          <input
            class="input"
            type="text"
            id="userName"
            name="userName"
            v-model="userName.val"
            required
          />
        
        </div>
        <div>
          <label class="text-white mb-2" for="name">{{$t("Password")}}:</label>
          <input autocomplete
            class="input"
            type="password"
            id="name"
            name="name"
            v-model="password.val"
            required
          />
          
        </div>
        <div>
          <label class="text-white mb-2" for="passwordconf"
            >{{$t("PasswordConfirm")}}:</label
          >
          <input autocomplete
            class="input"
            type="password"
            id="passworconf"
            name="passwordconf"
            v-model="confirm.val"
            required
          />
         
        </div>
        <button class="button" type="submit">{{$t("Register")}}</button>
      </form>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { useAuth } from "../stores/auth";
export default {
  data() {
    return {
      toast: useToast(), 
      email: {
        val: "",
       
        formIsValid: true,
      },
      userName: {
        val: "",
               formIsValid: true,
      },
      password: {
        val: "",
        
      },
      confirm: {
        val: "",
        
      },
      formIsValid: false,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.email.val === "" || this.email.val.length < 8) {
       this.toast.error(this.$t("EmailCheck"), {timeout: 7500})
        this.formIsValid = false;
      }
      if (this.userName.val === "" || this.userName.val.length < 8) {
       this.toast.error(this.$t("UsernameCheck"), {timeout:7500})
        this.formIsValid = false;
      }
      if (this.password.val === "" || this.password.val.length < 8) {
        this.toast.error(this.$t("PasswordCheck"), {timeout:7500})
             this.formIsValid = false;
      }
      if (this.password.val !== this.confirm.val) {
          this.toast.error(this.$t("PasswordConfirmCheck"), {timeout: 7500})
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
        this.toast.error(this.$t("DuplicateEmail"));
        
      } else {
        auth.registeredUsers.push(registeredUser);
       
        this.toast.success(this.$t('RegisteredUser'))
        this.$router.push("/login");
      }
    },
  },
};
</script>
<style scoped>
.invalid input {
  outline: 7px #053896 solid;
}
</style>
