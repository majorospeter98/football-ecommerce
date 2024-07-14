<template>
<div class="site">
  <div class="form-container">
        <form @submit.prevent="submitForm">
            <p><router-link :to="'/login'">Login</router-link></p>
             <h2>Register</h2>
              <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email" required>
            <label for="userName">userName:</label>
            <input type="text" id="userName" name="userName" v-model="userName" required>
            <p>Invalid</p>
            <label for="name">Password:</label>
            <input type="password" id="name" name="name" v-model="password" required>
           
            <label for="passwordconf">Password: Confirm</label>
            <input type="passwordconf" id="passworconf" name="passwordconf" v-model="confirm" required>
        

            <button type="submit">Login</button>
           
        </form>
    </div>
</div>
</template>

<script>

import {useAuth} from "../stores/auth"
export default {
data(){
  return{
email: '',
userName: '',
password: '',
confirm: '',

  }

},
methods:{
  submitForm(){
const auth=useAuth();
const registeredUser={
  email:this.email,
  userName:this.userName,
  password:this.password,
  
}
auth.registeredUsers.push(registeredUser);
console.log(auth.registeredUsers)
  }
}

}
</script>

<style scoped>
.site{
  
  
  display:flex;
  justify-content: center;
  background-color:#1434A4;
  height:90vh;
}
.form-container {
  margin-top:5rem;
  margin-bottom:5rem;
  min-height:620px;
    width: 90%;
    max-width: 600px;
    padding: 22px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
   
}
p{
    text-align:end
    
    }
form {
    display: flex;
    flex-direction: column;
}

h2 {
    margin-bottom: 15px;
    text-align: center;
}

label {
    margin-bottom: 5px;
}

input, textarea {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
   
}

button {
    padding: 15px;
    border: none;
    border-radius: 4px;
    background-color: #5cb85c;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    width:50%;
    margin: 0 auto;
}

button:hover {
    background-color: #4cae4c;
}
</style>