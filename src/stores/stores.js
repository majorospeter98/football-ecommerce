import { defineStore } from 'pinia'

export const useStores = defineStore({
  
  id: 'stores',

  // State: a function that returns the initial state
  state: () => ({
    stores:[{
        id:'1',
        team:'Real Madrid',
        department:'kit',
        type:'Home',
        brand:'Adidas',
         img: 'Real Madrid/home.avif',
      },
      {
        id:'2',
        team:'Real Madrid',
        department:'kit',
        type:'Away',
        brand:'Adidas',
        img: 'Real Madrid/away.avif',
      },
      {
        id:'3',
        team:'Real Madrid',
        department:'short',
        type:'Away',
        brand:'Adidas',
        img: 'Real Madrid/short.avif',
      },
      {
        id:'4',
        team:'Real Sociedad',
        department:'kit',
        type:'Home',
        brand:'Adidas',
        img: 'Real Sociedad/home.avif',
      },
       {
        id:'5',
        team:'Real Sociedad',
        department:'kit',
        type:'Away',
        brand:'Adidas',
        img: 'Real Sociedad/away.jpg',
      },
      {
        id:'6',
        team:'Real Sociedad',
        department:'short',
        type:'Away',
        brand:'Adidas',
        img: 'Real Sociedad/short.jpg',
      }
      ]
    
  
  }),

  // Getters: methods that compute derived state
  getters: {
    
    getStores(state){
return state.stores;
    }
  },

  // Actions: methods that can change the state
 
  
})