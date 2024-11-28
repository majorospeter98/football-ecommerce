<template>
  <div class="container">
    <ul class="mt-5 mb-5 flex flex-wrap items-center justify-evenly text-center gap-6" v-if="getOrders.length > 0">
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
    <p v-else class="text-center text-white mt-5 text-4xl">You don't have orders currently.</p>
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
