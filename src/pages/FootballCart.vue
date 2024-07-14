<template>
  <div>
    <h1>Your Items:</h1>
    <ul v-if="getCart.length>0">
      <cartItem v-for="cart in getCart" :key="cart.id" :id="cart.id" :img="cart.img" :team="cart.team" :type="cart.type" :quantity="cart.quantity"></cartItem>
      <button @click="addtoOrders">Order</button>
    </ul>
   <p v-else> Your cart is empty.</p>
   
  </div>
</template>

<script>
import {useAuth} from "../stores/auth"
import {useCart} from "../stores/cart"
import {useOrder} from "../stores/order"
import cartItem from "../components/FootballCart/CartItem.vue"
export default {
  
  components:{
cartItem
  },
  data(){
return {
  id:null,
  img:null,
  team:null,
  type:null,
  quantity:null
}
  },
computed:{
    getCart(){
        const cart=useCart()
        
        return cart.getCart
    }
    
},
methods:{
  addtoOrders(){
  const order=useOrder();
  console.log(order)
  const auth=useAuth()

 let checker=auth.whoisLoggedIn
 console.log(checker)
  const cart=useCart()
  for(let item in cart.cart){
    console.log(cart.cart);
    this.id=cart.cart[item].id
    this.img=cart.cart[item].img
    this.team=cart.cart[item].team
    this.type=cart.cart[item].type
    this.quantity=cart.cart[item].quantity
   console.log(this.id);
  }
  const orderData={
    id:this.id,
    img:this.img,
    team:this.team,
    type:this.type,
    quantity:this.quantity,
    auth:checker || []
  }
  order.orders.push(orderData)
  cart.cart=[]
 console.log(orderData);
}
}
}
</script>

<style>

</style>