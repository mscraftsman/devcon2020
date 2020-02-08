<template>
  <div class="flex min-h-screen flex-col">
    <menu-section></menu-section>
    <router-view class="container mx-auto flex-grow" />
    <footer-section />
  </div>
</template>

<script>
import MenuSection from "./components/menu-section.vue";
import FooterSection from "./components/footer-section.vue";

export default {
  components: {
    MenuSection,
    FooterSection
  },

  // ! For Dev purpose only.
  // ! REMOVE before merge.
  async mounted() {
    const stats = await this.$store.dispatch("FETCH_STATS");
    const sponsors = await this.$store.dispatch("FETCH_SPONSORS");
    const speakers = await this.$store.dispatch("FETCH_SPEAKERS");
    const sessions = await this.$store.dispatch("FETCH_SESSIONS");

    console.table(removeVueSparkles(stats));
    console.table(removeVueSparkles(sponsors));
    console.table(removeVueSparkles(speakers));
    console.table(removeVueSparkles(sessions));

    function removeVueSparkles(list) {
      return (list || []).map(element => {
        const string = JSON.stringify(element);
        const cleaned = JSON.parse(string);
        return cleaned;
      });
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0;
  border: 0;
  margin: 0;
}

</style>
