import { defineStore } from "pinia";
export const useCart = defineStore({
  id: "cart", 
  state: () => ({
    cart: [],
  }),
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
  actions: {
    decrement() {
      this.count--;
    },
  },
});
