<template>
  <div>
    <div class="mg-top">
    <section  class=" container min-h-200 flex items-center justify-between text-white bg-gradient-to-l from-orangeGradient to-redGradient  rounded-2xl max-md:flex-col  max-md:text-center max-md:justify-center max-md:gap-4 ">
      <div class=" flex flex-col gap-4">
      <h1 class="text-7xl text-center font-bold max-sm:text-6xl "> You can buy now.</h1>
      

      <h2 class="text-gray-200 text-center"> Get ready for the next season!</h2>
        </div>
        <div id="introimage">
          <img class="h-[420px] w-[470px] max-md:h-[280px] max-md:w-[300px] " :src="require(`../assets/Teams/Real Madrid/intro1.png`)">
        </div>
    </section>
    </div>
    <div class="mg-top">
    <section id="footballstore" class="container mb-5">
        <div class="mg-top">
      <h2 class="text-5xl font-bold text-white text-center m-4 p-4">Store</h2>
        </div>
            <ul class="flex flex-wrap justify-evenly items-center gap-16 text-white text-center ">
        <StoreItem
          v-for="store in getStores"
          :key="store.id"
          :id="store.id"
          :team="store.team"
          :department="store.type"
          :type="store.type"
          :brand="store.band"
          :img="store.img"
        ></StoreItem>
      </ul>
    </section>
  </div>
  </div>
 
</template>
<script>
import StoreItem from "../components/FootballStore/StoreItem.vue";
import { useStores } from "../stores/stores";
export default {
  name: "bagApp",
  components: {
    StoreItem,
  },
  data() {
    return {};
  },
  computed: {
    getStores() {
      const store = useStores();
      return store.getStores;
    },
  },
  methods: {
    addToCart(id) {
            return "/store" + id;
    },
  },
};
</script>
<style scoped>





</style>
