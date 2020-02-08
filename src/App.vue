<template>
	<div class="flex min-h-screen flex-col">
		<vue-extend-layouts />
	</div>
</template>

<script>
import VueExtendLayouts from "vue-extend-layout";

export default {
	name: "App",

	components: { VueExtendLayouts },

	// ! For Dev purpose only.
	// ! REMOVE before merge.
	async mounted() {
		const stats = await this.$store.dispatch("FETCH_STATS");
		const sponsors = await this.$store.dispatch("FETCH_SPONSORS");
		const speakers = await this.$store.dispatch("FETCH_SPEAKERS");
		const sessions = await this.$store.dispatch("FETCH_SESSIONS");

		console.table(removeVueSparkles(stats));
		console.table(removeVueSparkles(sponsors));
		console.table(removeVueSparkles(speakers));
		console.table(removeVueSparkles(sessions));

		function removeVueSparkles(list) {
			return (list || []).map(element => {
				const string = JSON.stringify(element);
				const cleaned = JSON.parse(string);
				return cleaned;
			});
		}
	}
};
</script>

<style lang="scss">
* {
	padding: 0;
	border: 0;
	margin: 0;
}
</style>
