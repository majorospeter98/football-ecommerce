<template>
  <div>
     <section>
      <div id="detailsImg">
<img :src="require(`../assets/Teams/${selectedId.img}`)" @click="openDetailsImg" >
      </div>
  <div>
    <h2>{{selectedId.team}}</h2>
    <h3>{{selectedId.type}}</h3>
    <label for="quantity">Quantity: </label>
    <select id="quantity" name="quantity" v-model.number="quantity">
     <option value=1>1</option>
  <option value=2>2</option>
  <option value=3>3</option>
  <option value=4>4</option>
  <option value=5>5</option>
  <option value=6>6</option>
  <option value=7>7</option>
  <option value=8>8</option>
  <option value=9>9</option>
  <option value=10>10</option>
    </select>
    <button @click="sentToCart">Add To Cart</button>
  </div>
 </section>
  </div>
</template>

<script>
import {useStores} from "../stores/stores"
import {useCart} from "../stores/cart"

export default {
props: ['storeid'],
data(){
  return{
selectedId:null,
quantity:1,
  }
  },
  created(){
    const store=useStores();
   this.selectedId=store.stores.find(storeId=>storeId.id === this.storeid)
   
  },
  methods:{
    sentToCart(){
      const cart=useCart()
     
      const cartData={
        id:this.selectedId.id,
        quantity:this.quantity,
        team:this.selectedId.team,
        type:this.selectedId.type,
        img: this.selectedId.img
      }
   
     
      let teszt=cart.cart.filter(cartId => cartId.id === this.selectedId.id )
      console.log(teszt);
      
      
              if(teszt.length>0 ){
               teszt[0].quantity += parseInt(this.quantity);
              }
             
         
         
      else(
        cart.cart.push(cartData)
      )
      
        
      
   
    

   
    
      this.quantity=1;
      this.$router.push("/cart");

    }
  }
}
</script>

<style>

</style>