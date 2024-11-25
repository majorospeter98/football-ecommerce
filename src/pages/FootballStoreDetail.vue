<template>
  <div>
    <section id="detail" class="mg-top container">
      <div id="details">
      <div id="detailsinfo">
        <img
          :src="require(`../assets/Teams/${selectedId.img}`)"
          @click="openDetailsImg"
        />
          
        <h2>{{ selectedId.team }}</h2>
        <h3>{{ selectedId.type }}</h3>
        </div>
        <div id="detailstore">
        <label for="quantity"> Quantity:  
        <select class="text-black" id="quantity" name="quantity" v-model.number="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select></label>
        <button class="button-9" @click="sentToCart">Add To Cart</button>
        <p @click="toggleDetail" class="toggle" :style="{fontSize:'2rem'}">Details: {{toggleDetails ? '-' : '+'}}</p>
        <p v-if="toggleDetails">ID: {{selectedId.id}}</p>
           <p v-if="toggleDetails">Brand: {{selectedId.brand}}</p>
      </div>
      </div>
    </section>
  </div>
</template>
<script>
import { useStores } from "../stores/stores";
import { useCart } from "../stores/cart";
export default {
  props: ["storeid"],
  data() {
    return {
      selectedId: null,
      quantity: 1,
      toggleDetails:false
    };
  },
  created() {
    const store = useStores();
    this.selectedId = store.stores.find(
      (storeId) => storeId.id === this.storeid
    );
  },
  methods: {
    toggleDetail(){
      this.toggleDetails=!this.toggleDetails;
          },
    sentToCart() {
      const cart = useCart();
      const cartData = {
        id: this.selectedId.id,
        quantity: this.quantity,
        team: this.selectedId.team,
        type: this.selectedId.type,
        img: this.selectedId.img,
      };
      let idSearch = cart.cart.filter(
        (cartId) => cartId.id === this.selectedId.id
      );
      if (idSearch.length > 0) {
        idSearch[0].quantity += parseInt(this.quantity);
      } else cart.cart.push(cartData);
      this.quantity = 1;
      this.$router.push("/cart");
    },
  },
};
</script>
<style scoped>
#details {
  display: flex;
   justify-content: space-evenly;
  color:white;
}
#detailsinfo{
  display:flex;
  flex-direction: column;
  gap:1rem;
}
#detailstore{
  display:flex;
  flex-direction: column;
  gap:1rem;
  justify-content: center;
  
}
.toggle{
  cursor: pointer;
}
@media  (max-width:700px) {
  #details{
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap:2rem;
     }
  #intro img{
height:280px;
  width:280px;
  }
  }
</style>
