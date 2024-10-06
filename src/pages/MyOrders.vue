<template>
  <div class="container">
    <ul class="mg-top" id="orders" v-if="getOrders.length > 0">
      <orderitem
        v-for="orders in getOrders"
        :key="orders.id"
        :id="orders.id"
        :img="orders.img"
        :team="orders.team"
        :type="orders.type"
        :quantity="orders.quantity"
      ></orderitem>
    </ul>
    <p v-else class="mg-top">You don't have orders currently.</p>
  </div>
</template>
<script>
import Orderitem from "../components/Orders/OrderItem.vue";
import { useOrder } from "../stores/order";
import { useAuth } from "../stores/auth";
export default {
  components: {
    Orderitem
  },
  computed: {
    getOrders() {
      const order = useOrder();
           const auth = useAuth();
      const whoOrdered = order.orders.filter(
        (order) => order.auth === auth.whoisLoggedIn
      );
      return whoOrdered;
    },
  },
};
</script>
<style scoped>
#orders {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  gap: 3rem;
  }
p{
  color:white;
}
</style>
