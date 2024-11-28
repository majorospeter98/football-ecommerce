<template>
  <div>
    <section id="cartitem" class="mt-3 flex flex-col justify-center items-center gap-4  " >
      <img class="h-[240px] w-[280px] border-teal-950" :src="require(`../../assets/Teams/${img}`)" />
      <p class=" font-semibold text-3xl text-white text-center">Quantity: {{ quantity }}</p>
   <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="red" 
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="red" 
  class="size-1 h-8 w-8"
  @click="deleteFromCart(id)"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18L18 6M6 6l12 12" 
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

