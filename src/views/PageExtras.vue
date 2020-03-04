<template>
  <div class="page-extras generic-page generic-page-container">
    <!-- <h1 class="page-title">Extra Activities</h1> -->

    <extra-caricatures></extra-caricatures>
    <extra-childcare></extra-childcare>
    <extra-cosplay></extra-cosplay>
    <extra-community></extra-community>
  </div>
</template>

<script>
import extraCommunity from "../components/extras/extra-community.vue";
import extraCosplay from "../components/extras/extra-cosplay.vue";
import extraChildcare from "../components/extras/extra-childcare.vue";
import extraCaricatures from "../components/extras/extra-caricatures.vue";

export default {
  layout: "contained",
  name: "pageextras",
  components: {
    extraCommunity,
    extraCosplay,
    extraChildcare,
    extraCaricatures
  }
};
</script>

<style>
.page-extras > div {
  padding-bottom: 2rem;
}
</style>
