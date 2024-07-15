<template>
  <div>
    <section id="footballstore">
      <img
        :src="require(`../../assets/Teams/${img}`)"
        @click="openDetailsImg"
      />
      <p>{{ team }}</p>
      <router-link class="button-9" :to="openDetails">Details</router-link>
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

<style scoped>
img {
  cursor: pointer;
}
#footballstore {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
