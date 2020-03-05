<template>
  <div class="page-venue">
    <venue></venue>
  </div>
</template>

<script>
import venue from "@/components/venue.vue";

export default {
  name: "pagevenue",
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
    margin-left: -150px;
    margin-top: 50px;
}

.map {
    position:relative;
    border-radius:50%;
    width: 280px;
    height: 280px;
    top: 62px;
    left: 50%;
    margin-left: -139px;
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