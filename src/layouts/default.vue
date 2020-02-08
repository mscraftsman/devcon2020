<template>
	<div class="flex min-h-screen flex-col">
		<menu-section></menu-section>
		<router-view class="flex-grow container mx-auto" />
		<footer-section />
	</div>
</template>

<script>
import MenuSection from "../components/menu-section.vue";
import FooterSection from "../components/footer-section.vue";

export default {
	name: "defaultLayout", // you can enter any name (optional)
	components: {
		MenuSection,
		FooterSection
	}
};
</script>