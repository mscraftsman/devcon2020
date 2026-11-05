<template>
  <div class="featured-speakers-section">
    <div
      class="container mx-auto min-h-screen flex flex-col align-center justify-center text-center"
    >
      <div class>
        <h2 class="section-title mb-8 pt-6">Featured Speakers</h2>
        <div class="featured-speakers-container w-full md:w-1/2 md:ml-auto px-4 md:px-0">
          <div
            class="bg-black border-4 border-black m-1"
            v-for="speaker in getFeaturedSpeakers.slice(0, 4)"
            :key="speaker.id"
          >
            <SpeakerBox :speaker="speaker" />
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
  background-position: left bottom;
  // background-size: 100% auto;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    background: none;
  }
}
</style>
