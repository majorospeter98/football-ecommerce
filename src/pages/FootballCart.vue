<template>
  <div>
    <h1 class="mg-top">Your Items:</h1>
    <section class="container" v-if="getCart.length > 0" >
      <ul id="cart" >
        <cartItem
          v-for="cart in getCart"
          :key="cart.id"
          :id="cart.id"
          :img="cart.img"
          :team="cart.team"
          :type="cart.type"
          :quantity="cart.quantity"
        ></cartItem>
           </ul>
       <button class="button-9 mg-top" @click="addtoOrders">Order</button>
         
    </section>
     <p v-else>Your cart is empty.</p>
  </div>
</template>
<script>
import { useAuth } from "../stores/auth";
import { useCart } from "../stores/cart";
import { useOrder } from "../stores/order";
import cartItem from "../components/FootballCart/CartItem.vue";
export default {
  components: {
    cartItem,
  },
   computed: {
    getCart() {
      const cart = useCart();
      return cart.getCart;
    },
  },
  methods: {
    addtoOrders() {
      const order = useOrder();
      const auth = useAuth();
      let checker = auth.whoisLoggedIn;
      const cart = useCart();
      
      for (let item in cart.cart) {
         let id = cart.cart[item].id;
        let img = cart.cart[item].img;
        let team = cart.cart[item].team;
        let type = cart.cart[item].type;
        let quantity = cart.cart[item].quantity;
         order.orders.push({id:id,img:img,team:team,type:type,quantity:quantity,auth: checker});
       
          }
              if(auth.whoisLoggedIn === null){
                alert("Sikeres rendelés");
              }
              else{
                this.$router.push("/MyOrders");
              }
                
      cart.cart = [];
    },
  },
};
</script>
<style scoped>
div h1,
p {
  text-align: center;
}
#cart {
 display:flex;
 justify-content: center;
 flex-wrap: wrap;
 gap:1.2rem;
text-align: center;
}
button {
  text-align: center;
  width: 200px;
  margin:0 auto;
}
</style>
