<template>
  <div>
    <section id="orderitem">
            <img :src="require(`../../assets/Teams/${img}`)" />
      <p>{{ team }}</p>
      <p>{{ type }}</p>
      <p>Quantity: {{ quantity }}</p>
         <hr class="hr">
    </section>
   </div>
</template>
<script>
export default {
  props: ["id", "img", "team", "type", "quantity"],
};
</script>
<style scoped>
#orderitem {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color:white;
}
.hr{
 border: 3px dashed var(--red);
}
</style>
