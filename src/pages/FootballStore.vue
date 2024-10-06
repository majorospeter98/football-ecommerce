<template>
  <div>
    <div class="mg-top">
    <section id="intro" class="container">
      <div id="introtext">
      <h1> You can buy now.</h1>
      <h2> Get ready for the next season!</h2>
        </div>
        <div id="introimage">

          <img class="intro" :src="require(`../assets/Teams/Real Madrid/intro1.png`)">
        </div>
    </section>
    </div>
    <div class="mg-top">
    <section id="footballstore" class="container">
        <div class="mg-top">
      <h2>Store</h2>
        </div>
       
      <ul class="flexstore mg-top">
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
#footballstore h2{
  color:white;
  letter-spacing: 0.3rem;
  font-size: 3rem;
  text-align: center;
}

.flexstore {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  gap: 3rem;
  color:white;

  
}
#intro{
  min-height:580px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  color:white;
background: linear-gradient(to left, #ff6a4d, #b8241a);
border-radius:10px;
}

.intro{
  height:420px;
  width:470px;
}
#introtext{
  display:flex;
  flex-direction: column;
  gap:2rem;
  }
  #introtext h1{
    font-size: 50px;
  }
  @media  (max-width:700px) {
  #intro{
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  #intro img{
height:280px;
  width:280px;
  }
  
}
</style>
