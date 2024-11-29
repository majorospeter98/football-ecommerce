import { defineStore } from "pinia";
export const useOrder = defineStore({
  id: "order",
  state: () => ({
    orders: [],
  }),
  getters: {
    getCart(state) {
      return state.cart;
    },
  },
});
