<template>
	<div class="page-health generic-page">
		<health></health>
	</div>
</template>

<script>
import health from "@/components/health.vue";

export default {
	name: "PageHealth",
	components: {
		health
	}
};
</script>

<style lang="scss">
.page-health {

}
.info {
  margin-right: auto;
  margin-left: auto;
}
</style>
