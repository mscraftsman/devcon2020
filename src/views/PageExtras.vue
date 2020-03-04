<template>
  <div class="page-extras">
    <!-- <h1 class="page-title">Extra Activities</h1> -->

    <extra-community class="pb-20"></extra-community>
    <extra-gdg class="pb-20"></extra-gdg>
    <extra-lugm class="pb-20"></extra-lugm>
    <extra-maker class="pb-20"></extra-maker>
    <extra-pymug class="pb-20"></extra-pymug>
    <extra-caricatures class="pb-20"></extra-caricatures>
  </div>
</template>

<script>
import extraGdg from "@/components/extras/extra-gdg.vue";
import extraLugm from "@/components/extras/extra-lugm.vue";
import extraMaker from "@/components/extras/extra-maker.vue";
import extraPymug from "@/components/extras/extra-pymug.vue";
import extraCommunity from "@/components/extras/extra-community.vue";
import extraCaricatures from "@/components/extras/extra-caricatures.vue";

export default {
  layout: "contained",
  name: "pageextras",
  components: {
    extraGdg,
    extraLugm,
    extraMaker,
    extraPymug,
    extraCommunity,
    extraCaricatures
  }
};
</script>


<style lang="scss" scoped>
small {
  @apply text-2xl;
}
.social {
  display: inline-block;
}
</style>