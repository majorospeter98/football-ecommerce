<template>
  <div>
    <section
      class="mt-4 container min-h-200 flex items-center justify-between text-white bg-gradient-to-l from-orangeGradient to-redGradient rounded-2xl max-md:flex-col max-md:text-center max-md:justify-center max-md:gap-4"
    >
      <div class="flex flex-col gap-4 items-center">
        <div>
          <h1 class="text-7xl text-center font-bold max-sm:text-6xl">
            You can buy now.
          </h1>
        </div>
        <h2 class="text-gray-200 text-center">
          Get ready for the next season!
        </h2>
      </div>
      <div id="introimage">
        <img
          class="h-[380px] w-[420px] max-md:h-[280px] max-md:w-[300px]" alt="Real Madrid Intro Image"
          :src="require(`../assets/Teams/Real Madrid/intro1.jpg`)"
        />
      </div>
    </section>

    <section class="container mb-5">
      <h2 class="text-5xl font-bold text-white text-center m-4 p-4">Store</h2>

      <div class="flex justify-center h-8 items-center text-center">
        <label class="text-white" for="site-search"
          >Search by team name:
          <input
            type="search"
            id="site-search"
            v-model="searchText"
            name="q"
            class="ml-3 pl-2 text-black border:none outline-none"
        /></label>
      </div>
      <ul
        class="list flex flex-wrap justify-evenly items-center gap-16 mt-5 text-white text-center"
      >
        <StoreItem
          v-for="store in filteredStore"
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
    return {
      searchText: "",
    };
  },
  computed: {
    filteredStore() {
      const store = useStores();
      const storedTeams = store.stores;

      const filteredArray = storedTeams.filter((storeItem) =>
        storeItem.team
          .toLocaleLowerCase()
          .includes(this.searchText.toLowerCase())
      );

      return filteredArray;
    },
  },
  methods: {
    addToCart(id) {
      return "/store" + id;
    },
  },
};
</script>
