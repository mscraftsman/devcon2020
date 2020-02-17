<template>
  <div class="page-home snap-parent">
    <landing-section class="snap-child" />
    <WhyAttend class="snap-child" />
    <!-- <FeaturedSpeakers class="snap-child" /> -->
    <HomeSponsorsSection class="snap-child" />
  </div>
</template>

<script>
import LandingSection from "../components/home/landing-section";
import WhyAttend from "@/components/home/why-attend.vue";
import FeaturedSpeakers from "@/components/home/featured-speakers.vue";
import HomeSponsorsSection from "@/components/home-sponsors-section.vue";

export default {
  name: "pagehome",
  components: {
    LandingSection,
    WhyAttend,
    HomeSponsorsSection,
    FeaturedSpeakers
  }
};
</script>


<style>
</style>