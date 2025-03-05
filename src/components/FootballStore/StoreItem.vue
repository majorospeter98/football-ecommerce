<template>
  <div>
    <section class="flex flex-col justify-evenly gap-4 m-2">
      <img
        :src="require(`../../assets/Teams/${img}`)"
        class="h-[240px] w-[260px] cursor-pointer hover:rounded-full"
        :alt="team + ' ' + 'Image'"
        @click="openDetailsImg"
      />
      <p>{{ team }}</p>
      <router-link class="button-9" :to="openDetails">{{
        $t("Details")
      }}</router-link>
    </section>
  </div>
</template>
<script>
export default {
  props: ["id", "team", "department", "type", "brand", "img"],
  computed: {
    openDetails() {
      return "store/" + this.id;
    },
  },
  methods: {
    openDetailsImg() {
      this.$router.push("store/" + this.id);
    },
  },
};
</script>
