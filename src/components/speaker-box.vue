<template>
	<div class="speaker-box" :id="speaker.fullName">
		<div class="speaker-image">
			<img :src="speaker.profilePicture" alt />
		</div>
		<div class="speaker-meta">
			<div class="name">{{ speaker.fullName }}</div>
			<div class="occupation">{{ speaker.tagLine }}</div>
			<div class="alias"></div>
			<div class="talk-count" v-if="speaker.sessions.length > 1">
				{{
				speaker.sessions.length }} talks
			</div>
			<div class="talk-count" v-else>{{ speaker.sessions.length }} talk</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["speaker"]
};
</script>
