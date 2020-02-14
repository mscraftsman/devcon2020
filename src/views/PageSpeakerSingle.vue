<template>
	<div class="page-single-speaker">
		<div class="page-content grid grid-cols-3" v-if="speaker">
			<div class="speakers-wrapper" v-if="speakers">
				<div class="speaker-wrapper">
					<div class="avatar">
						<img :src="speaker.profilePicture" alt />
					</div>
				</div>
			</div>

			<div class="col-span-2">
				<div class="session-title font-hulksmash text-5xl">{{ speaker.fullName }}</div>

				<div class="descriptions-row text-xs uppercase" v-if="speaker.tagLine">{{ speaker.tagLine }}</div>

				<div class="description-text py-5">
					<p class="text-xl">{{ speaker.bio }}</p>
				</div>

				<h2 class="text-2xl">Speaking about :</h2>
				<div class="descriptions-row"></div>
				<!-- <div class="session-title">
					<a href="#">To be revealed soon... !</a>
				</div>-->

				<div class="session-title text-xl" v-for="session in speaker.sessions" :key="session.name">
					<router-link :to="{ name: 'session', params: { id: session.id } }">
						{{
						session.name }}
					</router-link>
				</div>
			</div>
		</div>
		<div class="page-content" v-else>finding speaker details..</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import moment from "moment";
import { FETCH_SESSIONS, FETCH_SPEAKERS } from "@/store";

export default {
	methods: {
		...mapActions([FETCH_SESSIONS, FETCH_SPEAKERS])
	},
	computed: {
		...mapGetters({
			sessions: "getSessions",
			speakers: "getSpeakers"
		}),
		id: function() {
			return this.$route.params.id;
		},
		speaker: function() {
			if (this.speakers.length === 0) {
				this.FETCH_SPEAKERS();
			}
			let theSpeaker = this.speakers.find(speaker => speaker.id === this.id);
			return theSpeaker;
		},
		session: function() {
			let sessions = this.sessions
				.map(groups => groups.sessions)
				.reduce(function(acc, curr) {
					return [...acc, ...curr];
				}, []);
			let session = sessions.find(sess => (sess.id = this.id));
			return session;
		}
	},
	beforeMount() {
		if (this.$store.state.sessions.length === 0) {
			// console.error("no sessions found");
			this.FETCH_SPEAKERS();
			this.FETCH_SESSIONS();
		} else {
			// console.info("sessions found !");
		}
	}
};
</script>
