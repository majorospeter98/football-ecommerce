<template>
  <div>
    <section class="mt-5 container">
      <div class="flex justify-evenly text-white gap-3 max-md:flex-col">
        <div class="flex flex-col gap-5 text-center max-md:items-center">
          <img
            class="h-[330px] w-[380px] max-md:h-[250px] max-md:w-[270px]"
            :src="require(`../assets/Teams/${selectedId.img}`)"
            @click="openDetailsImg"
          />

          <h2 class="text-4xl">{{ selectedId.team }}</h2>
          <h4 class="text-slate-300">{{$t(selectedId.type) }}</h4>
        </div>
        <div class="max-md:m-4 flex flex-col justify-center text-center gap-4">
          <label class="text-2xl" for="quantity">
            {{$t("Quantity")}}:
            <select
              class="text-black m-1.5"
              id="quantity"
              name="quantity"
              v-model.number="quantity"
            >
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
            </select></label
          >
               {{$t("Details")}} : 
             <button @click="toggleDetail"
            class="toggle hover:border-none"
            :style="{ fontSize: '1.4rem', outline:'none', cursor:'pointer' }">  {{ toggleDetails ? "-" : "+" }} </button>
                   <p v-if="toggleDetails">ID: {{ selectedId.id }}</p>
          <p v-if="toggleDetails">{{$t("Brand")}}: {{ selectedId.brand }}</p>
          <button class="button-9" @click="sentToCart">{{$t("Cart")}}</button>
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
      toggleDetails: false,
    };
  },
  created() {
    const store = useStores();
    this.selectedId = store.stores.find(
      (storeId) => storeId.id === this.storeid
    );
  },
  methods: {
    toggleDetail() {
      this.toggleDetails = !this.toggleDetails;
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
button{
  border:none;
 
}
</style>