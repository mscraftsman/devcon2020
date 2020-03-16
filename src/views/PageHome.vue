<template>
  <div class="page-home snap-parent">
    <div class="postponed bg-black text-white font-lg py-4">
      <div class="container flex justify-center font-bold mx-auto">
        <div>Developers Conference 2020 is being postponed.</div>
        <a
          href="https://www.mscc.mu/newsletter-20200316-devcon-postponed/"
          class="px-4  mx-4 bg-red-400 hover:bg-red-500 text-sm uppercase font-bold"
          >Read more</a
        >
      </div>
    </div>
    <landing-section />
    <!-- <WhyAttend class="snap-child" /> -->
    <!--    <FeaturedSpeakers class="snap-child" />-->
    <HomeSponsorsSection />
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

<style></style>
