<template>
  <div>
    <h1
      v-if="getCart.length > 0"
      class="mt-5 text-5xl font-bold text-white text-center"
    >
      {{ getCart.length > 1 ? "Your Items:" : "Your item:" }}
    </h1>
    <section class="container" v-if="getCart.length > 0">
      <ul class="flex justify-center flex-wrap gap-6 mt-3">
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
      <button class="button-9 mb-3 mt-3" @click="addtoOrders">Order</button>
    </section>
    <p v-else class="mt-6 text-4xl font-bold text-white text-center">
      Your cart is empty.
    </p>
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
        order.orders.push({
          id: id,
          img: img,
          team: team,
          type: type,
          quantity: quantity,
          auth: checker,
        });
      }
      if (auth.whoisLoggedIn === null) {
        alert("Successful order");
      } else {
        this.$router.push("/MyOrders");
      }
      cart.cart = [];
    },
  },
};
</script>
