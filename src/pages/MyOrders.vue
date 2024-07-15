<template>
  <div>
    <ul v-if="getOrders.length>0">
    {{getOrders}}

   
    </ul>
     <p v-else>You don't have orders currently.</p>
  </div>
</template>

<script>
import {useOrder} from "../stores/order"
import {useAuth} from "../stores/auth"
export default {
computed:{
    getOrders(){
        const order=useOrder();
        const auth=useAuth();
         console.log(order)
    console.log(auth);
      const teszt=order.orders.filter(order => order.auth === auth.whoisLoggedIn)
   console.log(teszt)
    return teszt
    }
}
}
</script>

<style>

</style>