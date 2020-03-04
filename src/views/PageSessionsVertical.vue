<template>
  <div class="page-sessions">
    <div class="schedule-container">
      <div class="date-track">
        <!-- <div class="date-item" v-for="date in dates">{{ date }}</div> -->
        <div
          class="day-item"
          :class="{ active: currentDay == 0 }"
          @click="currentDay = 0"
        >
          Day 1
        </div>
        <div
          class="day-item"
          :class="{ active: currentDay == 1 }"
          @click="currentDay = 1"
        >
          Day 2
        </div>
        <div
          class="day-item"
          :class="{ active: currentDay == 2 }"
          @click="currentDay = 2"
        >
          Day 3
        </div>
      </div>

      <div class="room-track">
        <css-grid
          :columns="currentGrid.columns"
          :rows="currentGrid.rows"
          :areas="currentGrid.areas"
        >
          <css-grid-item
            :area="room"
            class="room-item uppercase text-sm"
            v-for="room in rooms"
            :key="room"
          >
            <!--            {{ room }}-->
            {{ roomRepo[room] }}
          </css-grid-item>

          <!--          <css-grid-item-->
          <!--            area="Time"-->
          <!--            class="time-item"-->
          <!--            v-for="time in times.slice(timeStart, timeEnd)"-->
          <!--            :style="timeStartCoordinate(time)"-->
          <!--          >-->
          <!--            {{ time }}-->
          <!-- {{ programmeStartCoordinate(programme.date) }} -->
          <!--          </css-grid-item>-->
        </css-grid>
      </div>
      <div class="programme-track">
        <css-grid
          :columns="currentGrid.columns"
          :rows="currentGrid.rows"
          :areas="currentGrid.areas"
          class="programme-track-container"
          :gap="'40px'"
        >
          <!-- <div class="time-item" >{{ time }}</div> -->
          <!-- Time -->
          <css-grid-item
            area="Time"
            class="time-item"
            v-for="time in times.slice(timeStart, timeEnd)"
            :style="timeStartCoordinate(time)"
          >
            {{ time }}
          </css-grid-item>

          <!-- Programmes -->
          <css-grid-item
            :area="'r' + programme.roomId"
            class="programme-item box"
            v-for="(programme, index) in currentDaySessions"
            :style="programmeStartCoordinate(programme)"
          >
            <router-link
              :to="{ name: 'session', params: { id: programme.id } }"
              class="flex flex-col justify-center items-center w-full h-full"
            >
              <div class="text">
                {{ programme.title }}
              </div>
              <div
                v-if="programme.speakers.length > 0"
                class="text-xs font-bold uppercase tracking-wider"
              >
                <!--
                            																{{ programme.speakers }}-->
                by
                <span v-for="speaker in programme.speakers">
                  {{ speaker.name }}
                </span>
              </div>
            </router-link>
          </css-grid-item>
        </css-grid>
      </div>
    </div>

    <!-- <div class="container mx-auto">{{ schedule }}</div> -->
  </div>
</template>

<script>
import { CssGrid, CssGridItem, ViewportListener } from "vue-css-grid";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "pagesessions",
  data() {
    return {
      programmes: null,
      dates: "11 April 2020",
      times: [
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30"
      ],
      MINUTES_TO_EIGHT_OCLOCK: 8 * 60,
      timeStart: 0,
      timeSpan: 48,
      timeScale: 5,
      rooms: ["r12900", "r12901", "r12903", "r12902"],
      roomRepo: {
        r12900: "Batcave",
        r12901: "New Asgard",
        r12903: "Kryptone",
        r12902: "Avengers Tower"
      },
      currentDay: 0,
      currentGrid: {
        columns: ["100px", "1fr", "1fr", "1fr", "1fr"],
        rows: ["1fr"],
        areas: [["Time", "r12900", "r12901", "r12903", "r12902"]]
      }
    };
  },
  methods: {
    timeStartCoordinate(time) {
      let temp = time.split(":");
      let minutes = parseInt(temp[1]);
      let hours = parseInt(temp[0]) * 60;
      let result = hours + minutes;
      let duration = "30";
      const offsetResult = result - this.MINUTES_TO_EIGHT_OCLOCK;

      return {
        top: offsetResult * this.timeScale + "px",
        height: duration * this.timeScale + "px"
      };
    },
    // Takes a programme object
    programmeStartCoordinate(programme) {
      let startMinutes = new Date(programme.startsAt).getMinutes();
      let startHours = new Date(programme.startsAt).getHours() * 60;
      let startCoordinate =
        startHours + startMinutes - this.MINUTES_TO_EIGHT_OCLOCK;

      let endMinutes = new Date(programme.endsAt).getMinutes();
      let endHours = new Date(programme.endsAt).getHours() * 60;
      let endCoordinate = endHours + endMinutes - this.MINUTES_TO_EIGHT_OCLOCK;

      let duration = endCoordinate - startCoordinate;

      return {
        top: startCoordinate * this.timeScale + "px",
        height: duration * this.timeScale + "px"
      };
    }
  },
  computed: {
    timeEnd() {
      return this.timeStart + this.timeSpan;
    },
    ...mapGetters({
      sessions: "getSessions",
      speakers: "getSpeakers"
    }),
    currentDaySessions() {
      if (this.sessions.length > 0) {
        let result = this.sessions[this.currentDay].sessions;
        return result;
      }
    }
  },
  mounted() {
    // this.fetchSessions();
  },
  components: {
    CssGrid,
    CssGridItem,
    ViewportListener
  }
};
</script>

<style lang="scss" scoped>
.schedule-container {
  --sess-height: 100px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "date"
    "room"
    "programme";

  grid-template-columns: 1fr;

  .date-track {
    grid-area: date;
    background: rgb(0, 0, 0);
    color: white;

    .day-item {
      @apply text-2xl flex-1 text-center;
      cursor: pointer;

      &.active {
        background: red;
        /*background: theme(colors.blue.500);*/
      }
    }
  }

  .time-track {
    grid-area: time;
  }

  .room-track {
    grid-area: room;
    background: rgb(43, 43, 43);
    color: white;
    /*display: flex;*/
    /*justify-content: space-around;*/
  }
  .programme-track {
    grid-area: programme;
    // background: green;
    min-height: 50vh;
    /*overflow-y: scroll;*/

    .programme-track-container {
      /*scroll-snap-type: y proximity;*/
    }
  }
}

.date-track {
  display: flex;

  & > div {
    flex: 1;
  }
  // justify-content: space-between;
}

.programme-item {
  // width: 250px;
  /*border: 1px solid black;*/
}

.time-item {
  position: relative;
  background: rgb(43, 43, 43);
  color: white;
  font-weight: bold;
  align-items: start;
  justify-content: center;
  display: flex;
  height: var(--sess-height);
}

.room-item {
  height: 30px;
}
.room-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  /*scroll-snap-align: start;*/
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

.programme-item {
  height: var(--sess-height);
}

.programme-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;

  /*scroll-snap-align: start;*/
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
}

.programme-item:hover {
  background: #333333;
  color: white;
}

.box {
  border: solid black;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;

  &:nth-child(2n + 1) {
    border-radius: 255px 45px 25px 35px/15px 255px 15px 255px;
  }

  &:nth-child(3n + 1) {
    border-radius: 45px 55px 5px 5px/15px 15px 15px 155px;
  }
}
</style>
