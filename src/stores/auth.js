import { defineStore } from 'pinia'

export const useAuth = defineStore({
  
  id: 'auth',

  // State: a function that returns the initial state
  state: () => ({
    isUserLoggedIn:false,
    registeredUsers: [],
    whoisLoggedIn:null
    
  
  }),

  // Getters: methods that compute derived state
  getters: {
    getIsUser(state){
       
return state.isUserLoggedIn;
    },
    getCart(state){
return state.cart;
    }
  },

  // Actions: methods that can change the state
  actions: {
    changeIsUser(state){
        console.log(state)
    this.isUserLoggedIn=state
    console.log(this.isUserLoggedIn);
    },
    decrement() {
      this.count--
    },
  },
})