<template>
	<div class="container page-speakers">
		<h1 class="text-2xl">Speakers</h1>
		<div class="page-all-speakers page-session">
			<div class="page-content">
				<div class="speakers-wrapper" v-if="speakers">
					<router-link
						class="speaker-wrapper"
						v-for="speaker in speakers"
						:key="speaker.id"
						:to="{ name: 'speaker', params: { id: speaker.id } }"
					>
						<SpeakerBox :speaker="speaker" />
					</router-link>
				</div>
			</div>
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
</style>
