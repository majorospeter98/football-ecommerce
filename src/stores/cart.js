import { defineStore } from 'pinia'

export const useCart = defineStore({
  
  id: 'cart',

  // State: a function that returns the initial state
  state: () => ({
    cart: [],
    
  
  }),

  // Getters: methods that compute derived state
  getters: {
    
    getCart(state){
return state.cart;
    }
  },

  // Actions: methods that can change the state
  actions: {
    
    decrement() {
      this.count--
    },
  },
})