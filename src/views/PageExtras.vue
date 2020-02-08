<template>
	<div class="page-extras">
		<h1 class="text-3xl">Extra Activities</h1>

		<extra-community></extra-community>
		<extra-gdg></extra-gdg>
		<extra-lugm></extra-lugm>
		<extra-maker></extra-maker>
	</div>
</template>

<script>
import extraGdg from "@/components/extras/extra-gdg.vue";
import extraLugm from "@/components/extras/extra-lugm.vue";
import extraMaker from "@/components/extras/extra-maker.vue";
import extraCommunity from "@/components/extras/extra-community.vue";

export default {
	layout: "contained",
	name: "pageextras",
	components: {
		extraGdg,
		extraLugm,
		extraMaker,
		extraCommunity
	}
};
</script>


<style lang="scss">
.page-extras {
}
</style>