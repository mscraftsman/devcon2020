<template>
  <div class="flex items-center justify-center h-screen landing-section">
    <div class="text-box">
      <div class="meta-title flex flex-col items-center justify-between font-bold uppercase">
        <div class="meta-title__location">Caudan Arts Centre</div>
        <div class="meta-title__period font-black">2 - 4 April 2020</div>
      </div>
      <h1 class="title font-hulksmash font-hairline leading-none">
        Developers <span class="text-block">Conference 2020</span>
      </h1>
      <div class="button-wrapper flex justify-around pt-5">
        <h3 class="meta-title__sub font-black font-spiderman text-gray-800">
          Registration Opening Soon
        </h3>
      </div>

    </div>

    <div class="building-rotation building-landing">
      <BuildingsBottom width="100%"
                       height="100%" />
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
  position: absolute;

  z-index: -1;
  width: calc(100vw + 5%);
  height: calc(100vh + 5%);
}

.landing-section {
  overflow: hidden;

  --startColor: white;

  position: relative;
  z-index: 1;

  background-size: 200% auto, contain;
  background-position: center center;
  background-repeat: no-repeat, no-repeat;

  h1 {
    color: black;
    -webkit-text-stroke-width: 0px;
    -webkit-text-fill-color: currentColor;
    font-weight: bolder;
  }
}

.title {
  --landing-title-fs: calc(8vw);
  font-size: var(--landing-title-fs);
}

.meta-title__location {
  --landing-title-location-fs: 2vw;
  font-size: var(--landing-title-location-fs);
}
.meta-title__period {
  --landing-title-period-fs: 2vw;
  font-size: var(--landing-title-period-fs);
}
.meta-title__sub {
  --landing-title-sub-fs: 2vw;
  font-size: var(--landing-title-sub-fs);
}

@media (min-width: 425px) {
  .title {
    --landing-title-location-fs: 2vw;
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}

@media (min-width: 640px) {
  .title {
    --landing-title-fs: calc(10vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}

@media (min-width: 768px) {
  .title {
    --landing-title-fs: calc(10vw - 100%);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}

@media (min-width: 830px) {
  .title {
    --landing-title-fs: calc(9vw - 100%);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}

@media (min-width: 930px) {
  .title {
    --landing-title-fs: calc(8vw - 100%);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}

@media (min-width: 1024px) {
  .title {
    --landing-title-fs: calc(7vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 2.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 3.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.7vw;
  }
}

@media (min-width: 1000px) {
  .title {
    --landing-title-fs: calc(7vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.6vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 2.8vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.5vw;
  }
}

@media (min-width: 1170px) {
  .title {
    --landing-title-fs: calc(6vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.3vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 2.4vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 2.1vw;
  }
}

@media (min-width: 1280px) {
  .title {
    --landing-title-fs: calc(5.7vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.1vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.9vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.9vw;
  }
}

@media (min-width: 1400px) {
  .title {
    --landing-title-fs: calc(5.5vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 1.05vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.8vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.8vw;
  }
}

@media (min-width: 1500px) {
  .title {
    --landing-title-fs: calc(5.3vw - 1em);
  }
  .meta-title__location {
    --landing-title-location-fs: 0.89vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.7vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.7vw;
  }
}

@media (min-width: 1600px) {
  .title {
    --landing-title-fs: 64px;
  }
  .meta-title__location {
    --landing-title-location-fs: 0.89vw;
  }
  .meta-title__period {
    --landing-title-period-fs: 1.7vw;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 1.7vw;
  }
}

@media (min-width: 1700px) {
  .title {
    --landing-title-fs: 70px;
  }
  .meta-title__location {
    --landing-title-location-fs: 18px;
  }
  .meta-title__period {
    --landing-title-period-fs: 28px;
  }
  .meta-title__sub {
    --landing-title-sub-fs: 24px;
  }
}
.text-block {
  display: block;
}
</style>
