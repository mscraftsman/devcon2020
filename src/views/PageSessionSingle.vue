<template>
  <div class="page-single-session h-screen flex items-center">
    <div class=" box box1 container mx-auto">
      <div class="page-content" v-if="session">
        <div class="flex ">
          <div class="w-2/3">
            <div class="session-title">{{ session.title }}</div>
            <div class="descriptions-row">
              <div class="des-wrap" v-if="session.format">
                <label>
                  <img src="/images/icons/language.svg" alt />
                </label>
                <p>{{ session.format }}</p>
              </div>

              <div class="des-wrap" v-if="session.language">
                <label>
                  <img src="/images/icons/language.svg" alt />
                </label>
                <p>{{ session.language }}</p>
              </div>

              <div class="des-wrap">
                <label>
                  <img src="/images/icons/location.svg" alt />
                </label>
                <p>{{ session.room }}</p>
              </div>

              <div class="des-wrap">
                <label>
                  <img src="/images/icons/time.svg" alt />
                </label>
                <p>
                  {{ getDay(session.startsAt) }} {{ time(session.startsAt) }} -
                  {{ time(session.endsAt) }}
                </p>
              </div>

              <div class="des-wrap" v-if="session.level">
                <label>
                  <img src="/images/icons/level.svg" alt />
                </label>
                <p>{{ session.level }}</p>
              </div>
            </div>

            <div class="description-text">
              <p v-html="session.description">{{ session.description }}</p>
            </div>
          </div>

          <div class="flex w-1/3 pr-3 pb-3 pt-3" v-if="session.speakers">
            <router-link
              class="h-full pl-3"
              v-for="speaker in session.speakers"
              :key="speaker.id"
              :to="{ name: 'speaker', params: { id: speaker.id } }"
            >
              <img
                class="h-full object-cover"
                :src="getSpeakerPhoto(speaker.id)"
                alt
              />
              <div class=""></div>
              <!--              <p class="name">{{ speaker.name }}</p>-->
            </router-link>
          </div>
        </div>
      </div>
      <div class="page-content" v-else>
        <p>loading session...</p>
        <a
          href="javascript:location.reload()"
          title="i'm not proud of this code. please send PR"
        >
          is this taking too long? click here
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  props: ["id"],
  mounted() {},
  methods: {
    ...mapActions(["FETCH_SESSIONS", "FETCH_SPEAKERS", "fetchVotes"]),
    getSpeakerPhoto: function(id) {
      if (this.speakers.length === 0) {
        this.FETCH_SPEAKERS();
      }
      let theSpeaker = this.speakers.find(speaker => speaker.id === id);

      console.log(theSpeaker);
      return theSpeaker.profilePicture;
      // if (typeof this.theSpeaker !== 'undefined') {
      // } else {
      //   return '/img/sponsors/placeholder.png'
      // }
    },
    time: timeHelper,
    getDay: getDayHelper
  },
  computed: {
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers"
    }),
    sessionId: function() {
      return this.id || this.$route.params.id;
    },
    session: function() {
      if (typeof this.sessions == "undefined") {
        this.FETCH_SESSIONS();
      }
      let sessions = this.sessions
        .map(groups => groups.sessions)
        .reduce(function(acc, curr) {
          return [...acc, ...curr];
        }, []);

      console.log(sessions);
      let session = sessions.find(sess => sess.id === this.sessionId);
      return session;
    },
    checkSessionStatus() {
      /**
       * @TODO
       * Alternative to moment
       */

      // let timeNow = moment()
      //   .format()
      //   .substr(0, 19);
      // let timeStart = this.session.startsAt;
      // let difference = moment(timeNow).diff(moment(timeStart), "minutes");
      // console.log(timeNow);
      // console.log(timeStart);
      // console.log(difference);
      // if (difference && difference > 0) {
      //   return true;
      // } else {
      //   return false;
      // }
      return false;
    }
  },
  watch: {},
  beforeMount() {
    if (this.$store.state.sessions.length === 0) {
      console.error("no sessions found");
      this.FETCH_SESSIONS();
      this.FETCH_SPEAKERS();
    } else {
      console.info("sessions found !");
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1000px) {
}
.page-content {
  grid-area: session;
  /*background: rgba(255, 255, 255, 0.9);*/
  /*box-shadow: 0 0 20px rgba(0, 0, 0, 1);*/
  /*border-radius: 15px;*/
}

.page-single-session {
  background: no-repeat url("/images/buildings/buildings_right.svg") right top /
      auto 120%,
    no-repeat url("/images/buildings/buildings_left.svg") left top / auto 120%;
  /*background-position: right bottom;*/
  /*background-repeat: no-repeat;*/
  /*background-size: contain;*/
  /*margin-bottom: 50px;*/
  height: 80vh;
}

.box {
  /*margin: 0px auto 50px;*/
  width: 60vw;
  /*padding-right: 10vw;*/
  /*height: 250px;*/
  /*background: #fff;*/
  border: solid black;
  border-color: black;
  /*float: left;*/
}

.box1 {
  /*<!--box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, 0.2);-->*/
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  /*transform: rotate(2deg);*/
}

.session-title {
  color: #333333;
  text-transform: uppercase;
  font-family: var(--font);
  font-size: 40px;
  /*font-weight: 700;*/
  margin: 0 auto;
  padding: 20px 30px;
  /*text-align: center;*/
  @apply font-hulksmash tracking-wide;
  // background: var(--color-blue);
}
.speakers-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  .speaker-wrapper {
    --width: 100px;
    display: grid;
    width: 200px;
    grid-template-areas: "avatar name";
    grid-template-columns: var(--width) 1fr;
    align-items: center;
    grid-gap: 10px;
    margin-bottom: 10px;
    margin-right: 20px;
    font-family: var(--font);
    font-weight: 500;
    text-transform: uppercase;
    &:last-child {
      margin-right: 0;
    }
    .avatar {
      grid-area: avatar;
      width: var(--width);
      height: var(--width);
      border-radius: var(--width);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      img {
        width: var(--width);
        height: var(--width);
        border-radius: var(--width);
        display: block;
        object-position: 50% 50%;
        object-fit: cover;
      }
    }
    p {
      grid-area: name;
      text-align: left;
      font-size: 15px;
      color: var(--color-blue);
      font-weight: 700;
    }
  }
}
.descriptions-row {
  /*background: red;*/
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  .des-wrap {
    width: 50%;
    margin-right: 10px;
    font-family: var(--font);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding: 10px;
    height: 50px;
    &:last-child {
      margin-right: 0;
    }

    label {
      margin-right: 10px;
      img {
        width: 20px;
      }
    }
    p {
      margin: 0;
    }
  }
}
.description-text {
  padding: 20px 30px;

  p {
    font-family: var(--font);
    font-size: 18px;
    line-height: 25px;
    font-weight: 300;
    white-space: pre-wrap;
    text-align: left;
  }
}

@media (max-width: 1000px) {
  .session-title {
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  .descriptions-row {
    flex-wrap: wrap;
    .des-wrap {
      width: 100%;
    }
  }
  .speakers-wrapper {
    flex-wrap: wrap;
    .speaker-wrapper {
      --width: 40px;
      width: 100%;
      margin-right: 0;
      padding: 0 10px;
      .name {
        font-size: 13px;
      }
    }
  }
}
@media (max-width: 480px) {
  .session-title {
    font-size: 25px;
  }
}
</style>
