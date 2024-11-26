<template>
  <div>
    <h1 v-if="getCart.length>0" class="mg-top text-5xl font-bold">{{getCart.length>1 ? 'Your Items:' : 'Your item:'}}</h1>
    <section class="container" v-if="getCart.length > 0" >
      <ul id="cart" class="m-5" >
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
       <button class="button-9 mt-4" @click="addtoOrders">Order</button>
            </section>
     <p v-else class="mt-6 text-4xl font-bold">Your cart is empty.</p>
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
  color:white;
}
#cart {

 display:flex;
 justify-content: center;
 flex-wrap: wrap;
 gap:2rem;
}

</style>
