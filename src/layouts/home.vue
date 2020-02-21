<template>
	<div class="flex min-h-screen flex-col">
		<!-- <menu-section class="fixed bottom-0"></menu-section> -->
		<router-view class="flex-grow" />
		<footer-section class="snap-child-end" />
		<!-- <div class="spacer h-32 w-full"></div> -->
	</div>
</template>

<script>
import MenuSection from "../components/menu-section.vue";
import FooterSection from "../components/footer-section.vue";

export default {
	name: "fullLayout", // you can enter any name (optional)
	components: {
		MenuSection,
		FooterSection
	}
};
</script>