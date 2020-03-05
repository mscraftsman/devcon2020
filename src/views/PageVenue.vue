<template>
  <div class="page-venue">
    <venue></venue>
  </div>
</template>

<script>
import venue from "@/components/about.vue";

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
    height: 600px;
    margin-right: auto;
    margin-left: auto;
    z-index: -1;
}

.container {
    position:relative;
    margin:auto;
}

.map {
    position:absolute;
    border-radius: 50%;
    width: 350px;
    height: 350px;
}
</style>