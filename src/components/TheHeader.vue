<template>
  <div>
    <header id="header">
    <router-link to="/store">Store</router-link>
    <router-link to="/MyOrders" v-if="isLoggedin">Rendeléseim</router-link>
     <section id="svg">
<router-link to="/cart">
<svg width=100px height=30px  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-1">

  <path fill-rule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clip-rule="evenodd" />
 <text y="43" x="61" fill="red"> Hello! </text> 
            
       
        </svg>
</router-link>
  </section>
       <a v-if="isLoggedin">User: {{getEmail}}</a>
  <router-link :to="'/'" @click="logOut" v-if="isLoggedin">Logout</router-link>

    <router-link to="/login" v-if="!isLoggedin" >Login</router-link>
    <router-link to="/register" v-if="!isLoggedin">Register</router-link>

   
</header>

  </div>
</template>

<script>
import {useAuth} from "../stores/auth"
export default {
  data(){
    return{
      results: "ss",
      teszt:false,
    }
    
  },
  computed:{
isLoggedin() {
      const auth=useAuth()
      const isUserLogged=auth.getIsUser;
      console.log(isUserLogged);
      return isUserLogged
    },
   getEmail(){
     const auth=useAuth()
      
      const whoisLoggedIn= auth.whoisLoggedIn;
      console.whoisLoggedIn;
      return whoisLoggedIn;
   }
   
  },
  methods:{
     logOut(){
      const auth12=useAuth()
auth12.isUserLoggedIn=false;

console.log(auth12.isUserLoggedIn)
console.log("xd")
    }
  },
  created(){
    console.log(this.isLoggedin);
    const auth= useAuth()
    console.log(auth.getIsUser);
    console.log(auth.isUserLoggedIn)
    this.teszt=auth.getIsUser
  }

}
</script>

<style>
.size-1{
  height:30px;
  width:30px;
  color:yellow;


  
}
#header{
  height:100px;

  display:flex;
  justify-content: space-evenly;
  align-items: center;
 background-color: #1434A4;
 padding:0.5rem;
}
#header a{
   color:#FAFA33;
  
}
#Geek{
  display:flex;
}
#svg{
  display: flex;
  margin:3rem;
}
h2{
  
}
</style>