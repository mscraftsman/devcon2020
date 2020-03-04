<template>
  <div class="flex min-h-screen flex-col">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from "vue-extend-layout";

export default {
  name: "App",

  components: { VueExtendLayouts },

  // ! For Dev purpose only.
  // ! REMOVE before merge.
  async mounted() {
    const stats = await this.$store.dispatch("FETCH_STATS");
    const sponsors = await this.$store.dispatch("FETCH_SPONSORS");
    const speakers = await this.$store.dispatch("FETCH_SPEAKERS");
    const sessions = await this.$store.dispatch("FETCH_SESSIONS");

    // console.table(removeVueSparkles(stats));
    // console.table(removeVueSparkles(sponsors));
    // console.table(removeVueSparkles(speakers));
    // console.table(removeVueSparkles(sessions));

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

/* Generic Page Style */

.generic-page-container {
  max-width: 740px;
  margin: 0 auto 50px;
  padding: 0 20px;
}

.tagline {
  @apply uppercase font-bold;
}

.generic-page {
  h1 {
    @apply text-black;
  }
  h2 {
    @apply text-black text-2xl pb-2;
  }
  h3 {
    @apply text-black font-black text-xl  pb-2;
  }
  p {
    @apply text-lg text-black  pb-4;
  }
  a {
    @apply text-blue-500;

    &:hover {
      @apply text-blue-400 underline;
    }
  }
  small {
    @apply text-black text-sm;
  }

  li {
    list-style: circle inside;
    padding-bottom: 0.6em;
  }
}
</style>
