<template>
	<div class="page-sessions">
		<h1 class="text-2xl">sessions</h1>
		<!-- <pre>
			{{ currentDaySessions }} 
		</pre>-->
		<div class="schedule-container">
			<div class="date-track">
				<!-- <div class="date-item" v-for="date in dates">{{ date }}</div> -->
				<div class="text-2xl">{{ dates}}</div>
			</div>
			<!-- <div class="time-track">
				<div class="time-item" v-for="time in times.slice(timeStart, timeEnd)">{{ time }}</div>
			</div>-->
			<div class="channel-track">
				<!-- <div class="channel-item" v-for="channel in channels">{{ channel }}</div> -->

				<css-grid :columns="currentGrid.columns" :rows="currentGrid.rows" :areas="currentGrid.areas">
					<css-grid-item
						:area="channel"
						class="channel-item uppercase text-sm"
						v-for="channel in channels"
					>{{ channel }}</css-grid-item>
				</css-grid>
			</div>
			<div class="programme-track">
				<css-grid :columns="currentGrid.columns" :rows="currentGrid.rows" :areas="currentGrid.areas">
					<!-- <div class="time-item" >{{ time }}</div> -->
					<!-- Time -->
					<css-grid-item
						area="Time"
						class="time-item"
						v-for="time in times"
						:style="timeStartCoordinate(time)"
					>
						{{ time }}
						<!-- {{ programmeStartCoordinate(programme.date) }} -->
					</css-grid-item>

					<!-- Programmes -->
					<css-grid-item
						:area="programme.roomId + ''"
						class="programme-item"
						v-for="programme in currentDaySessions"
						:style="programmeStartCoordinate(programme)"
					>
						{{ programme.title }}
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
				"00:00",
				"00:30",
				"01:00",
				"01:30",
				"02:00",
				"02:30",
				"03:00",
				"03:30",
				"04:00",
				"04:30",
				"05:00",
				"05:30",
				"06:00",
				"06:30",
				"07:00",
				"07:30",
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
				"22:30",
				"23:00",
				"23:30"
			],
			timeStart: 0,
			timeSpan: 24,
			timeScale: 4,
			channels: ["Time", "4090", "Earth", "Knowhere", "Titan"],
			currentDay: 0,
			currentGrid: {
				columns: ["1fr"],
				rows: ["30px", "1fr", "1fr", "1fr", "1fr"],
				areas: [["Time"], ["4090"], ["Earth"], ["Knowhere"], ["Titan"]]
			}
		};
	},
	methods: {
		// fetchSessions() {
		// 	fetch("/sampledata/session-small.json")
		// 		.then(response => response.json())
		// 		.then(res => {
		// 			this.programmes = res;
		// 		})
		// 		.catch(error => {
		// 			console.log(error);
		// 		});
		// },
		// Takes a time string "00:00"
		timeStartCoordinate(time) {
			let temp = time.split(":");
			// console.log(temp);
			let minutes = parseInt(temp[1]);
			let hours = parseInt(temp[0]) * 60;
			let result = hours + minutes;
			// console.log(result);
			let duration = "30";
			return {
				left: result * this.timeScale + "px",
				width: duration * this.timeScale + "px"
			};
		},
		// Takes a programme object
		programmeStartCoordinate(programme) {
			let startMinutes = new Date(programme.startsAt).getMinutes();
			let startHours = new Date(programme.startsAt).getHours() * 60;
			let startCoordinate = startHours + startMinutes;

			let endMinutes = new Date(programme.endsAt).getMinutes();
			let endHours = new Date(programme.endsAt).getHours() * 60;
			let endCoordinate = endHours + endMinutes;

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
		"channel programme";

	grid-template-columns: 150px 1fr;

	.date-track {
		grid-area: date;
		background: rgb(0, 0, 0);
		color: white;
	}
	.time-track {
		grid-area: time;
		background: rgb(43, 43, 43);
		color: white;
		font-weight: bold;
	}
	.channel-track {
		grid-area: channel;
		background: yellow;
	}
	.programme-track {
		grid-area: programme;
		background: green;
		min-height: 50vh;
		overflow: scroll;
	}
}

.date-track {
	display: flex;
	justify-content: space-evenly;
}

.time-track {
	display: flex;
	justify-content: space-between;
}
.channel-track {
	// display: flex;
	// flex-direction: column;
	// justify-content: space-around;

	// display: grid;
	// grid-template-areas: "main" "titan";

	.channel-item {
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
}

.time-item {
	position: relative;
	background: rgb(43, 43, 43);
	color: white;
	font-weight: bold;
	align-items: center;
	justify-content: center;
	display: flex;
}

.channel-item:first-child {
	height: 30px;
}
.channel-item,
.programme-item {
	align-items: center;
	justify-content: center;
	display: flex;
	height: 100px;
}
</style>
