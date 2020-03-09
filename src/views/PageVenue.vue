<template>
  <div class="page-venue">
    <venue></venue>
  </div>
</template>

<script>
import venue from "@/components/venue.vue";

export default {
  name: "PageVenue",
  components: {
    venue
  }
};
</script>

<style lang="scss">

.page-venue {

}

.loupe {
    height: auto;
    width: auto;
    max-width: 500px;
    max-height: 500px;
    position: absolute;
    left: 50%;
    margin-left: -110px;
    top: 465px;
}

.map {
    position:relative;
    width: 100%;
    height: 800px;
    top: 20px;
   }

.mapIcon {
  width: 40px;
  height: 40px;
  margin-top: 30px;
  margin-right: 160px;
  right: 50%;
  position: absolute;
}

</style>