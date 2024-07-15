<template>
  <div class="mg-top">
    <section id="footballstore" class="container">
      <ul class="flexstore">
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
      console.log(id);
      return "/store" + id;
    },
  },
};
</script>
<style scoped>
.flexstore {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  gap: 3rem;
}
</style>
