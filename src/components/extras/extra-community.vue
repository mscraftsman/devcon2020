<template>
  <div class="page-extras text-flow" id="community">
    <span>
      <div class="tagline">Communication and Exchange with Others</div>
      <h2 class="group-title">Networking & Community</h2>
    </span>
    <p>
      Take the chance to exchange with other attendees, speakers and partners,
      have some interesting conversations about software development, latest
      information gained during one of the presentations and let others know
      about your ups &amp; downs in your projects.
    </p>
    <p>
      Our Partners are here for existing & new talents for either recruitment or
      internship or simply for a chit chat. Make the most out of it! Our Happy
      Hour is just the right moment to maybe make a new friend, seal some deals
      in a more relaxed atmosphere. Think about it.
    </p>
    <p>
      But above all, come and enjoy this vibrant atmosphere full of technology &
      activities!
    </p>

    <extra-gdg></extra-gdg>
    <extra-lugm></extra-lugm>
    <extra-maker></extra-maker>
    <extra-pymug></extra-pymug>
  </div>
</template>

<script>
import extraGdg from "../communities/extra-gdg.vue";
import extraLugm from "../communities/extra-lugm.vue";
import extraMaker from "../communities/extra-maker.vue";
import extraPymug from "../communities/extra-pymug.vue";

export default {
  layout: "contained",
  name: "pageextras",
  components: {
    extraGdg,
    extraLugm,
    extraMaker,
    extraPymug
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
