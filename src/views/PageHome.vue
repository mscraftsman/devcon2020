<template>
  <div class="page-home">
    <landing-section />
    <HomeSponsorsSection />
  </div>
</template>

<script>
import LandingSection from "../components/home/landing-section";
import HomeSponsorsSection from "@/components/home-sponsors-section.vue";

export default {
  name: "pagehome",
  components: {
    LandingSection,
    HomeSponsorsSection
  }
};
</script>
