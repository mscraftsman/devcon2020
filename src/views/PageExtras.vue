<template>
  <div class="page-extras generic-page">
    <extra-caricatures></extra-caricatures>
    <!--    <extra-childcare></extra-childcare>-->
    <!--    <extra-cosplay></extra-cosplay>-->
  </div>
</template>

<script>
import extraCosplay from "../components/extras/extra-cosplay.vue";
import extraChildcare from "../components/extras/extra-childcare.vue";
import extraCaricatures from "../components/extras/extra-caricatures.vue";

export default {
  layout: "contained",
  name: "pageextras",
  components: {
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
