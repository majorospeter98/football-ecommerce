<template>
  <div>
    <section>
    <img :src="require(`../../assets/Teams/${img}`)" >
    {{quantity}}
    <button @click="deleteFromCart(id)">Delete</button>
    </section>
     
  </div>
</template>
 
<script>

import {useCart} from "../../stores/cart"
export default {
props: ['id', 'img', 'team', 'type','quantity'], 
methods:{
deleteFromCart(id){
    let cart=useCart();
    cart.cart=cart.cart.filter(carts => carts.id !==id)
    
},

}

}
</script>

<style>

</style>