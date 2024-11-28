import { defineStore } from 'pinia'
export const useAuth = defineStore({
    id: 'auth',
  state: () => ({
    isUserLoggedIn:false,
    registeredUsers: [],
    whoisLoggedIn:null
      }),
  getters: {
    getIsUser(state){
       return state.isUserLoggedIn;
    },
    getCart(state){
return state.cart;
    }
  },
  actions: {
    changeIsUser(state){
       this.isUserLoggedIn=state
       },
    
  },
})