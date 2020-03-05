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
  async created() {
    const stats = this.$store.dispatch("FETCH_STATS");
    const sponsors = this.$store.dispatch("FETCH_SPONSORS");
    const speakers = this.$store.dispatch("FETCH_SPEAKERS");
    const sessions = this.$store.dispatch("FETCH_SESSIONS");
    const credits = this.$store.dispatch("FETCH_CREDITS");

    const promises = [stats, sponsors, speakers, sessions, credits];

    if (!Promise.allSettled) {
      try {
        await Promise.all(promises);
      } catch (error) {
        // * Something did not load. Let's try again.
        await Promise.all(promises);
      }
      return;
    }

    await Promise.allSettled(promises);

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
    @apply text-black text-2xl;
  }
  h3 {
    @apply text-black font-black text-xl;
  }
  p {
    @apply text-lg text-black;
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

.text-flow {
  --flow: 1rem;
}

.text-flow > * + * {
  padding-bottom: var(--flow);
}
</style>
