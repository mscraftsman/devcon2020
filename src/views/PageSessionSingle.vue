<template>
  <div class="page-single-session mb-20">
    <div class=" box box1 container mx-auto">
      <div class="page-content" v-if="session">
        <div class="single-session-layout flex flex-col ">
          <div class="">
            <div class="session-title">{{ session.title }}</div>

            <div class="flex justify-center bg-gray-900 text-xl text-white">
              <div class="">
                <div v-if="session.speakers" class="flex flex-wrap">
                  <router-link
                    class="flex items-center mx-4 py-2 "
                    v-for="speaker in session.speakers"
                    :key="speaker.id"
                    :to="{ name: 'speaker', params: { id: speaker.id } }"
                  >
                    <img
                      class="w-10 h-10 rounded-full block mr-4"
                      :src="getSpeakerPhoto(speaker.id)"
                      alt
                    />
                    <p class="font-medium">{{ speaker.name }}</p>
                  </router-link>
                </div>
              </div>
            </div>

            <div class="flex justify-center py-2 bg-gray-800 text-white">
              <div class="flex items-center text-lg mr-4" v-if="session.format">
                <label>
                  <img src="/images/icons/language.svg" alt />
                </label>
                <p>{{ session.format }}</p>
              </div>

              <div
                class="flex items-center text-lg mr-4"
                v-if="session.language"
              >
                <label>
                  <img src="/images/icons/language.svg" alt />
                </label>
                <p>{{ session.language }}</p>
              </div>

              <div class="flex items-center text-lg mr-4">
                <label>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </label>
                <p>{{ session.room }}</p>
              </div>

              <div class="flex items-center text-lg mr-4">
                <label>
                  <svg viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </label>
                <p>
                  {{ getDay(session.startsAt) }} {{ time(session.startsAt) }} -
                  {{ time(session.endsAt) }}
                </p>
              </div>

              <div class="flex items-center text-lg mr-4" v-if="session.level">
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
import { mapGetters, mapActions, mapState } from "vuex";
import { time as timeHelper, getDay as getDayHelper } from "@/helpers";

export default {
  props: ["id"],

  async created() {
    if (this.$store.state.sessionsById.length === 0) {
      const promises = [this.FETCH_SESSIONS(), this.FETCH_SPEAKERS()];
      await Promise.all(promises);
    }

    this.session = this.$store.state.sessionsById[this.sessionId];
  },

  data() {
    return {
      session: null
    };
  },

  computed: {
    ...mapState(["sessionsById"]),

    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers"
    }),
    sessionId: function() {
      return this.id || this.$route.params.id;
    }
  },

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

  watch: {}
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
  /*padding: 5px;*/
  /*background: rgba(255, 255, 255, 0.9);*/
}

.page-single-session {
  /*background: no-repeat url("/images/buildings/buildings_right.svg") right*/
  /*  bottom / auto 60%;*/
  /*min-height: 80vh;*/
}

@screen lg {
  .single-session-layout {
    /*display: grid;*/
    /*grid-template-columns: 1fr 300px;*/
  }

  .page-single-session {
    /*background: no-repeat url("/images/buildings/buildings_right.svg") right top /*/
    /*    auto 120%,
      no-repeat url("/images/buildings/buildings_left.svg") left top / auto 120%;
    /*min-height: 80vh;*/
  }

  .box {
    width: 60vw;
  }
}

.box {
  /*margin: 0px auto 50px;*/
  /*padding-right: 10vw;*/
  /*height: 250px;*/
  /*background: #fff;*/
  width: 95vw;

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
  text-align: center;
  @apply font-hulksmash tracking-wide;
  // background: var(--color-blue);
}
.speakers-wrapper {
  display: flex;
  align-items: start;
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
    justify-content: center;
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
    /*flex-wrap: wrap;*/
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
