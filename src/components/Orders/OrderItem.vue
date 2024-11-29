<template>
  <div>
    <section class="flex flex-col gap-4 text-white">
      <img
        class="h-[250px] w-[280px]"
        :src="require(`../../assets/Teams/${img}`)"
      />
      <p class="font-bold text-2xl">Quantity: {{ quantity }}</p>
      <h1>{{ team }}</h1>
      <p>{{ type }}</p>

      <hr class="border-4 border-red-700 border-dashed" />
    </section>
  </div>
</template>
<script>
export default {
  props: ["id", "img", "team", "type", "quantity"],
};
</script>
