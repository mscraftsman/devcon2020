<template>
  <div class="page-home">
    <h1 class="text-2xl">oh hi mark!</h1>

    <HomeSponsorsSection />
  </div>
</template>

<script>
import HomeSponsorsSection from "@/components/home-sponsors-section.vue";

export default {
  name: "pagehome",

  components: {
    HomeSponsorsSection
  }
};
</script>
