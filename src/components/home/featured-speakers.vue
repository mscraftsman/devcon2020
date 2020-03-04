<template>
  <div class="featured-speakers-section">
    <div
      class="container mx-auto min-h-screen flex flex-col align-center justify-center text-center"
    >
      <div class>
        <h2 class="section-title">Featured Speakers</h2>
        <div class="featured-speakers-container  w-1/2">
          <div
            class="bg-black border-4 border-black m-1"
            v-for="speaker in getFeaturedSpeakers.slice(0, 4)"
          >
            <SpeakerBox :key="speaker.id" :speaker="speaker" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpeakerBox from "@/components/speaker-box.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getFeaturedSpeakers"])
  },
  components: {
    SpeakerBox
  }
};
</script>

<style lang="scss" scoped>
.featured-speakers-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // justify-content: center;
}

.featured-speakers-section {
  background: url("/images/heroes/heroface.svg");
  background-position: right bottom;
  // background-size: 100% auto;
  background-repeat: no-repeat;
}
</style>
