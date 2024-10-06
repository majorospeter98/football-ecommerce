import { defineStore } from "pinia";
export const useStores = defineStore({
  id: "stores",
  state: () => ({
    stores: [
      {
        id: "1",
        team: "Real Madrid",
        department: "Kit",
        type: "Home",
        brand: "Adidas",
        img: "Real Madrid/home.avif",
      },
      {
        id: "2",
        team: "Real Madrid",
        department: "Kit",
        type: "Away",
        brand: "Adidas",
        img: "Real Madrid/away.avif",
      },
      {
        id: "3",
        team: "Real Madrid",
        department: "Short",
        type: "Away",
        brand: "Adidas",
        img: "Real Madrid/short.avif",
      },
      {
        id: "4",
        team: "Real Sociedad",
        department: "Kit",
        type: "Home",
        brand: "Adidas",
        img: "Real Sociedad/home.avif",
      },
      {
        id: "5",
        team: "Real Sociedad",
        department: "Kit",
        type: "Away",
        brand: "Adidas",
        img: "Real Sociedad/away.jpg",
      },
      {
        id: "6",
        team: "Real Sociedad",
        department: "Short",
        type: "Away",
        brand: "Adidas",
        img: "Real Sociedad/short.jpg",
      },
      {
        id: "7",
        team: "Barcelona",
        department: "Kit",
        type: "Home",
        brand: "Nike",
        img: "Barcelona/home.webp",
      },
      {
        id: "8",
        team: "Barcelona",
        department: "Kit",
        type: "Away",
        brand: "Nike",
        img: "Barcelona/away.webp",
      },
      {
        id: "9",
        team: "Barcelona",
        department: "Short",
        type: "Home",
        brand: "Nike",
        img: "Barcelona/short.avif",
      },
      
    ],
  }),
  getters: {
    getStores(state) {
      return state.stores;
    },
  },
});
