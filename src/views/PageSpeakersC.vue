<template>
  <div class="page-speakers">
    <!-- <h1>Speakers</h1> -->
    <div class="page-all-speakers">
      <!--      <div class="speakers-wrapper" v-if="speakers">-->
      <!--        <router-link-->
      <!--          class="speaker-wrapper bg-black m-1"-->
      <!--          v-for="speaker in speakers"-->
      <!--          :key="speaker.id"-->
      <!--          :to="{ name: 'speaker', params: { id: speaker.id } }"-->
      <!--        >-->
      <!--          <SpeakerBox :speaker="speaker" />-->
      <!--        </router-link>-->
      <!--      </div>-->

      <article class="comic">
        <router-link
          class="panel"
          v-for="speaker in speakers"
          :key="speaker.id"
          :to="{ name: 'speaker', params: { id: speaker.id } }"
        >
          <p class="text top-left">{{ speaker.tagLine }}</p>
          <!--          <p class="text bottom-left">{{ speaker.sessions.length }}</p>-->

          <p class="text bottom-right">{{ speaker.fullName }}</p>
          <img
            class=" border-2 border-black"
            :src="speaker.profilePicture"
            alt
          />
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
import SpeakerBox from "@/components/speaker-box.vue";
import { mapActions, mapGetters } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  methods: {
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS"]),
    getSpeaker: function(id) {
      if (this.speakers.length === 0) {
        this.FETCH_SPEAKERS();
      }
      let theSpeaker = this.speakers.find(speaker => speaker.id === id);
      return theSpeaker.profilePicture;
    },
    time: timeHelper,
    getDay: getDayHelper
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers"
    })
  },
  mounted: function() {
    this.FETCH_SESSIONS();
  },
  components: {
    SpeakerBox
  }
};
</script>

<style lang="scss" scoped>
.speakers-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
    /*filter: saturate(0);*/
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
  flex-basis: 200px;
}

.text {
  background-color: #fff;
  border: solid 2px #000;
  margin: 0;
  padding: 10px 10px 0px;
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
  padding-right: 10px;
}

.bottom-right {
  bottom: -2px;
  position: absolute;
  right: -6px;
  transform: skew(-15deg);
  /*font: "Comic Sans MS";*/
  padding: 5px 10px 0 5px;
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

.panel:nth-child(1) {
  flex-basis: 180px;
}
.panel:nth-child(2n + 1) {
  flex-basis: 200px;
}
.panel:nth-child(4n + 1) {
  flex-basis: 300px;
}

.panel:nth-child(3n + 1) {
  flex-basis: 220px;
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
