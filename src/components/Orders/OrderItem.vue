<template>
  <div>
    <section class="flex flex-col gap-4 text-white">
            <img class="h-[250px] w-[280px]" :src="require(`../../assets/Teams/${img}`)" />
      <h1>{{ team }}</h1>
      <p>{{ type }}</p>
      <p class="font-bold">Quantity: {{ quantity }}</p>
         <hr class="border-4 border-red-700 border-dashed">
    </section>
   </div>
</template>
<script>
export default {
  props: ["id", "img", "team", "type", "quantity"],
};
</script>

