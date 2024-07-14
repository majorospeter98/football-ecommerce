import { defineStore } from 'pinia'

export const useOrder = defineStore({
  
  id: 'order',

  // State: a function that returns the initial state
  state: () => ({
    orders: [],
    
  
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