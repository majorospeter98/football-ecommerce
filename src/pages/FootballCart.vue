<template>
  <div>
    <h1 class="mg-top">Your Items:</h1>
    <section class="container" v-if="getCart.length > 0">
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
  data() {
    return {
      id: null,
      img: null,
      team: null,
      type: null,
      quantity: null,
    };
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
               this.id = cart.cart[item].id;
        this.img = cart.cart[item].img;
        this.team = cart.cart[item].team;
        this.type = cart.cart[item].type;
        this.quantity = cart.cart[item].quantity;
      }
      const orderData = {
        id: this.id,
        img: this.img,
        team: this.team,
        type: this.type,
        quantity: this.quantity,
        auth: checker || [],
      };
      order.orders.push(orderData);
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
 gap:1rem;

}
button {
  text-align: center;
  width: 200px;
  margin:0 auto;
}
</style>
