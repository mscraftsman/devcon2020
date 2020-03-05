<template>
  <div>
    <div class="page-credits generic-page ">
      <h2 class="group-title">Core Team</h2>
      <div class="container mx-auto">
        <article class="comic">
          <div class="panel">
            <p class="text top-left">Organizers...</p>
            <p class="text bottom-right">...Jochen & Mary-Jane</p>
            <img src="/images/carricatures/organizers.jpg" alt="" />
          </div>
          <div class="panel"></div>
          <div class="panel">
            <img src="/images/carricatures/joki-emmy-ish.jpg" alt="" />
          </div>
          <div class="panel"></div>
          <div class="panel"></div>
          <div class="panel">
            <img src="/images/carricatures/cedric.jpg" alt="" />
          </div>
          <div class="panel">
            <p class="text top-left">La faya...!</p>
            <p class="text bottom-right">...Mary, Sun, & Shelly</p>
            <img src="/images/carricatures/mary-sun-shelly.jpg" alt="" />
            <p class="speech">A speech bubble</p>
          </div>
          <div class="panel">
            <img src="/images/carricatures/pritvi.jpg" alt="" />
            <p class="text bottom-right">METEO MAN</p>
          </div>
          <div class="panel">
            <img src="/images/carricatures/neil-marine-vanessa.jpg" alt="" />
          </div>
          <div class="panel">
            <img src="/images/carricatures/vidush.jpg" alt="" />
          </div>
          <div class="panel"></div>
          <div class="panel">
            <img src="/images/carricatures/neil.jpg" alt="" />
            <p class="text bottom-right">THE END</p>
          </div>
        </article>
      </div>
      <div
        class="pt-20 pb-20 bg-black text-white tv-screen snap-child-end"
        :class="play ? 'play' : 'pause'"
        v-if="getCredits"
      >
        <div class="credits-wrapper">
          <h2 class="group-title pb-5">Contributors</h2>
          <div v-for="(value, index) in getCredits" :key="index" class="py-5">
            <div class="text-sm uppercase" v-if="value && value.group">
              {{ value.group }}
            </div>
            <div class="text-2xl" v-if="value && value.name">
              {{ value.name }}
            </div>
          </div>
        </div>
        <button class="show-all" @click="play = !play">
          {{ play ? "Show All" : "Play Movie Credits" }}
        </button>
      </div>
      <div v-else>
        loading credits...
      </div>

      <div class="generic-page py-20">
        <h2 class="group-title pb-5">Resources</h2>
        <ul>
          <li>Gael Latouche - <a href="#">Link</a></li>
          <li>Aditya Bholae - <a href="#">Link</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-credits {
  @apply text-center;

  /*img {*/
  /*  width: 70%;*/
  /*  max-width: 800px;*/
  /*  margin: 0 auto;*/
  /*}*/
  h1 {
    -webkit-text-stroke-width: 0 !important;
  }
}

.show-all {
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 10px;
  background: white;
  color: black;
  @apply font-hulksmash tracking-wider;
}

.tv-screen {
  position: relative;

  &.play {
    background: radial-gradient(ellipse at top left, #555 0%, #111 100%);
    height: 100vh;
    overflow: hidden;

    .credits-wrapper {
      animation: 60s credits linear infinite;
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -200px;
      width: 400px;
    }
  }

  &.pause {
    background: radial-gradient(ellipse at top left, #003300 0%, #111 100%);
  }
}

.credits-wrapper {
  font: 300 30px/1 "Open Sans Condensed", sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: #fff;

  padding: 10vh 0;
}

@keyframes credits {
  0% {
    top: 100%;
  }
  100% {
    top: -500%;
  }
}

.nametag {
  @apply font-bold uppercase;
}

h2 {
  /*@apply text-center;*/
}

ul {
  /*display: flex;*/

  li {
    /*@apply w-1/2;*/
    /*min-width: 50%;*/
  }
}

/*  COMIC BOOK LAYOUT*/
/* CREDITS TO chris22smith : https://codepen.io/chris22smith/pen/MyBBOe*/
.comic {
  display: flex;
  flex-wrap: wrap;
  /*font-family: "Comic Sans", cursive;*/
  padding: 1vmin;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.panel {
  background-color: #fff;
  border: solid 2px #000;
  box-shadow: 0 6px 6px -6px #000;
  display: inline-block;
  flex: 1 1;
  height: 300px;
  margin: 1vmin;
  overflow: hidden;
  position: relative;
}
.text {
  background-color: #fff;
  border: solid 2px #000;
  margin: 0;
  /*padding: 10px 10px 0px;*/
}

.top-left {
  left: -7px;
  position: absolute;
  top: -10px;
  transform: skew(-15deg);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 40px;
  max-width: 90%;
  padding-top: 7px;
  padding-right: 10px;
  padding-left: 15px;
}

.bottom-right {
  bottom: -2px;
  position: absolute;
  right: -6px;
  transform: skew(-15deg);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
}

.speech {
  background-color: #fff;
  border: solid 2px #000;
  border-radius: 12px;
  display: inline-block;
  margin: 0.1em;
  padding: 0.5em 1em;
  width: 50%;
  position: absolute;
}

.speech:before {
  border: solid 12px transparent;
  border-left: solid 12px #000;
  border-top: solid 12px #000;
  bottom: -24px;
  content: "";
  height: 0;
  left: 24px;
  position: absolute;
  transform: skew(-15deg);
  width: 0;
}

.speech:after {
  border: solid 10px transparent;
  border-left: solid 10px #fff;
  border-top: solid 10px #fff;
  bottom: -19px;
  content: "";
  height: 0;
  left: 27px;
  position: absolute;
  transform: skew(-15deg);
  width: 0;
}

.panel:nth-child(odd) {
  flex-basis: 400px;
}
.panel:nth-child(even) {
  flex-basis: 200px;
}

/* background colours */

.panel:nth-child(4n + 1) {
  background-image: radial-gradient(circle, yellow, orange);
}

.panel:nth-child(4n + 2) {
  background-image: radial-gradient(circle, lightblue, deepskyblue);
}

.panel:nth-child(4n + 3) {
  background-image: radial-gradient(circle, palegreen, yellowgreen);
}

.panel:nth-child(4n + 4) {
  background-image: radial-gradient(circle, lightcoral, tomato);
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "pagecredits",
  data() {
    return {
      play: true
    };
  },
  components: {},
  computed: {
    ...mapGetters(["getCredits"])
  }
};
</script>
