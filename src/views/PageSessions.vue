<template>
  <div class="page-sessions">
    <!-- <h1 class="text-2xl">sessions</h1> -->
    <!-- <pre>
			{{ currentDaySessions }} 
		</pre>-->
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
      <!-- <div class="time-track">
				<div class="time-item" v-for="time in times.slice(timeStart, timeEnd)">{{ time }}</div>
			</div>-->
      <div class="room-track">
        <!-- <div class="room-item" v-for="room in rooms">{{ room }}</div> -->

        <css-grid
          :columns="currentGrid.columns"
          :rows="currentGrid.rows"
          :areas="currentGrid.areas"
        >
          <css-grid-item
            :area="room"
            class="room-item uppercase text-sm"
            v-for="room in rooms"
            >{{ room }}</css-grid-item
          >
        </css-grid>
      </div>
      <div class="programme-track">
        <css-grid
          :columns="currentGrid.columns"
          :rows="currentGrid.rows"
          :areas="currentGrid.areas"
          class="programme-track-container"
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
            <!-- {{ programmeStartCoordinate(programme.date) }} -->
          </css-grid-item>

          <!-- Programmes -->
          <css-grid-item
            :area="'r' + programme.roomId"
            class="programme-item"
            v-for="programme in currentDaySessions"
            :style="programmeStartCoordinate(programme)"
          >
            <router-link
              :to="{ name: 'session', params: { id: programme.id } }"
            >
              {{ programme.title }}
            </router-link>
            <!-- {{ programmeStartCoordinate(programme.date) }} -->
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
      timeScale: 8,
      rooms: ["Time", "r4090", "r4091", "r4092", "r4093"],
      currentDay: 0,
      currentGrid: {
        columns: ["1fr"],
        rows: ["30px", "1fr", "1fr", "1fr", "1fr"],
        areas: [["Time"], ["r4090"], ["r4091"], ["r4092"], ["r4093"]]
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
        left: offsetResult * this.timeScale + "px",
        width: duration * this.timeScale + "px"
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
        left: startCoordinate * this.timeScale + "px",
        width: duration * this.timeScale + "px"
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
        return this.sessions[this.currentDay].sessions;
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    ". date"
    ". time"
    "room programme";

  grid-template-columns: 150px 1fr;

  .date-track {
    grid-area: date;
    background: rgb(0, 0, 0);
    color: white;

    .day-item {
      @apply text-2xl flex-1 text-center;
      cursor: pointer;
    }
  }

  .room-track {
    grid-area: room;
    background: rgb(43, 43, 43);
    color: white;
  }
  .programme-track {
    grid-area: programme;
    // background: green;
    min-height: 50vh;
    overflow: scroll;
    .programme-track-container {
      scroll-snap-type: y mandatory;
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

.room-track {
  // display: flex;
  // flex-direction: column;
  // justify-content: space-around;

  // display: grid;
  // grid-template-areas: "main" "titan";

  .room-item {
    text-align: center;
  }
}

.programme-item {
  // width: 250px;
  border: 1px solid black;
  position: relative;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;

  scroll-snap-align: start;
}

.time-item {
  position: relative;
  background: rgb(43, 43, 43);
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: start;
  display: flex;
}

.room-item:first-child {
  height: 30px;
}
.room-item,
.programme-item {
  align-items: center;
  justify-content: center;
  display: flex;
  height: 120px;
}
</style>
