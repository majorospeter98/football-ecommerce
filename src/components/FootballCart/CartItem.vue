<template>
  <div>
    <section id="cartitem">
      <img :src="require(`../../assets/Teams/${img}`)" />
      <p>Quantity: {{ quantity }}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-1"
        @click="deleteFromCart(id)"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </section>
  </div>
</template>

<script>
import { useCart } from "../../stores/cart";
export default {
  props: ["id", "img", "team", "type", "quantity"],
  methods: {
    deleteFromCart(id) {
      let cart = useCart();
      cart.cart = cart.cart.filter((carts) => carts.id !== id);
    },
  },
};
</script>

<style scoped>
#cartitem {
  
}
.size-1 {
  height: 2rem;
  color: red;
}
</style>
