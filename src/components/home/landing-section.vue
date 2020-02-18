<template>
  <div class="flex items-center justify-center h-screen landing-section">
    <div class="text-box">
      <div
        class="flex flex-col items-center justify-between font-bold uppercase"
      >
        <div class="text-xl">Caudan Arts Center</div>
        <div class="text-3xl font-black">2 - 4 April 2020</div>
      </div>
      <h1 class="font-hulksmash font-hairline text-5xl leading-none">
        Developers <span class="text-block">Conference 2020</span>
      </h1>
      <div class="button-wrapper flex justify-around pt-5">
        <h3 class="text-2xl font-black font-spiderman text-gray-800">
          Registration Opening Soon
        </h3>
        <!-- <router-link
					:to="'https://meetup.com'"
					class="button text-2xl font-black font-spiderman bg-black text-white py-3 px-5"
				>Register</router-link> -->
        <!-- <router-link :to="{name:'PageSessions'}" class="button">Schedule</router-link> -->
      </div>
    </div>
    <div class="building-rotation building-landing">
      <BuildingsBottom width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import BuildingsBottom from "../../svg/earth-city.svg";

export default {
  components: {
    BuildingsBottom
  }
};
</script>

<style lang="scss" scoped>
.building-landing {
  // position: fixed;
  position: absolute;
  z-index: -1;
  width: calc(100vw + 5%);
  height: calc(100vh + 5%);
}

.landing-section {
  overflow: hidden;

  position: relative;
  z-index: 1;
  // background-image: url("/images/zoom-bg.svg");
  // background-image: url("/images/zoom-bg-optimized.svg");
  background-size: 160% auto;
  background-position: center center;
  background-repeat: no-repeat;

  h1 {
    -webkit-text-stroke-width: 0px;
    font-weight: bolder;
  }
}
.text-block {
  display: block;
}
</style>
