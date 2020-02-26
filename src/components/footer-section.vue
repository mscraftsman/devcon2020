<template>
  <div>
    <div class="block md:hidden">
      <div class="container mx-auto text-sm uppercase tracking-wide footer-wrapper">
        <div class="logo logo-sm">
          <router-link :to="{ name: 'pagehome' }">
            <img src="/images/MSCC-logo-inverted.svg"
                 alt />
          </router-link>
        </div>

        <FooterMenu class="menu" />
      </div>
    </div>

    <div class="footer-image footer-image-md w-full hidden md:block">
      <!-- <div class="logo-md">
        <router-link :to="{ name: 'pagehome' }">
          <img src="/images/MSCC-logo-inverted.svg"
               alt />
        </router-link>
      </div> -->

      <BuildingsBottom class="buildings-md"
                       width="100%"
                       height="100%" />

      <div class="building-menu">
        <div class="w-32 mx-auto">
          <router-link :to="{ name: 'pagehome' }">
            <img src="/images/MSCC-logo-inverted.svg"
                 alt />
          </router-link>
        </div>

        <FooterMenu class="earth-menu" />
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import FooterMenu from "@/components/footer-menu.vue";

import BuildingsBottom from "../svg/buildings_bottom.svg";

export default {
  components: {
    FooterMenu,
    BuildingsBottom
  }
};
</script>

<style>
.building-menu {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 65%);
  width: 700px;
  height: 300px;
  text-align: center;
  z-index: 1;
}

.building-crop {
  position: relative;
  overflow: hidden;
  height: 50vw;
}

.building-rotation {
  /*stroke-dasharray: 500;*/
  animation: spin 111s linear infinite;
  transform-origin: center center;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: 1000;
    stroke-width: 1px;
  }
}
</style>

<style lang="scss" scoped>
.footer-wrapper {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 100px;
  padding: 20px 0;
}

.logo-sm {
  margin-left: 1rem;
}
.footer-image-md {
  position: relative;
}
.buildings-md {
}
.building-crop {
  position: absolute;
  z-index: -1;
  width: 100%;
}
.logo-md {
  position: absolute;
  z-index: 10;
  width: 7rem;

  top: 85%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
}
</style>
