<template>
	<div class="page-past-events">
		<h1 class="text-3xl">Past Events</h1>
		<past-events></past-events>
	</div>
</template>

<script>

import pastEvents from "@/components/past-events.vue";

export default {
	name: "pagepastevents",
	components: {
		pastEvents
	}
};
</script>

<style lang="scss">
	.page-past-events {
}
</style>
