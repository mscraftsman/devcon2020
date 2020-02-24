<template>
  <div class="page-extras">
    <!-- <h1 class="page-title">Extra Activities</h1> -->

    <extra-community></extra-community>
    <extra-gdg></extra-gdg>
    <extra-lugm></extra-lugm>
    <extra-maker></extra-maker>
    <extra-pymug></extra-pymug>
  </div>
</template>

<script>
import extraGdg from "@/components/extras/extra-gdg.vue";
import extraLugm from "@/components/extras/extra-lugm.vue";
import extraMaker from "@/components/extras/extra-maker.vue";
import extraPymug from "@/components/extras/extra-pymug.vue";
import extraCommunity from "@/components/extras/extra-community.vue";

export default {
  layout: "contained",
  name: "pageextras",
  components: {
    extraGdg,
    extraLugm,
    extraMaker,
    extraPymug,
    extraCommunity
  }
};
</script>


<style lang="scss" scoped>
small {
  @apply text-2xl;
}
a img{
  display: inline-block;
}
</style>