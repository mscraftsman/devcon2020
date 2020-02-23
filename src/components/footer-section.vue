<template>
  <div>
    <div class="block md:hidden">
      <div class="container mx-auto text-sm uppercase tracking-wide footer-wrapper">
        <div class="logo">
          <router-link :to="{ name: 'pagehome' }">
            <img src="/images/MSCC-logo-inverted.svg"
                 alt />
          </router-link>
        </div>
        <!-- <ul class="menu">
          <li>
            <router-link :to="{ name: 'PageCoc' }">Code of Conduct</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'PageExtras' }">Extras</router-link>
          </li>

          <li>
            <router-link :to="{ name: 'PagePastEvents' }"
              >Past Events</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'PagePress' }">Press</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'PageSessions' }">Sessions</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'PageSpeakers' }">Speakers</router-link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/mscraftsman/devcon2020/issues"
              >Contribute</a
            >
          </li>
          <li>
            <router-link :to="{ name: 'session', params: { id: '118176' } }"
              >Sample Session</router-link
            >
          </li>
          <li>
            <router-link
              :to="{
                name: 'speaker',
                params: { id: '146ba683-b905-46a9-bc61-108c46964ce8' }
              }"
              >Sample Speaker</router-link
            >
          </li>
        </ul> -->
      </div>
    </div>

    <div class="footer-image footer-image-md w-full hidden md:block">
      <div class="logo-md">
        <router-link :to="{ name: 'pagehome' }">
          <img src="/images/MSCC-logo-inverted.svg"
               alt />
        </router-link>
      </div>

      <BuildingsBottom class="buildings-md"
                       width="100%"
                       height="100%" />

      <!-- <div class="building-crop">
        <div class="building-menu">
          <div class="w-32 mx-auto">
            <router-link :to="{ name: 'pagehome' }">
              <img src="/images/MSCC-logo-inverted.svg"
                   alt />
            </router-link>
          </div>
          <ul class="earth-menu">
            <li>
              <router-link :to="{ name: 'PageSessions' }">Sessions</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PageSpeakers' }">Speakers</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PagePress' }">Press</router-link>
            </li>

            <li>
              <router-link :to="{ name: 'PageCoc' }">Code of Conduct</router-link>
            </li>

            <li>
              <router-link :to="{ name: 'PagePastEvents' }">Past Events</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'PageExtras' }">Extras</router-link>
            </li>
          </ul>
        </div>
        <div>

        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import BuildingsBottom from "../svg/buildings_bottom.svg";

export default {
  components: {
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
  animation: spin 280s ease-in-out infinite;
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

.menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  /*padding: 20px 0;*/
}

.earth-menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 30px 0 0 0;

  a {
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
}
.footer-image-md {
  position: relative;
}
.buildings-md {
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
