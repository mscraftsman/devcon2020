<template>
	<div class="flex min-h-screen flex-col">
		<menu-section></menu-section>
		<router-view class="container mx-auto flex-grow" />
		<footer-section />
	</div>
</template>

<script>
import MenuSection from "./components/menu-section.vue";
import FooterSection from "./components/footer-section.vue";

export default {
	components: {
		MenuSection,
		FooterSection
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
