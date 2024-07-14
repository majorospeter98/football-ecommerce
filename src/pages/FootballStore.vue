<template>
<div class="mgtop">
 
    
<ul class="flexstore">
  <StoreItem v-for="store in getStores" :key="store.id" :id="store.id" :team="store.team" :department="store.type" :type="store.type" :brand="store.band" :img="store.img"></StoreItem>
  
</ul>
</div>
</template>

<script>
import StoreItem from '../components/FootballStore/StoreItem.vue';
import {useStores} from "../stores/stores"
export default {
  name: 'bagApp',
  components:{
StoreItem
  },
data(){
    return{
     
    }
  },
  computed:{
getStores(){
  const store=useStores();
  return store.getStores;
}
  },
  methods:{
    
addToCart(id){
     console.log(id);
return '/store' + id ;
      }

    }
}

</script>

<style>

</style>