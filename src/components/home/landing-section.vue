<template>
	<div class="flex items-center justify-center h-screen landing-section">
		<div class="text-box font-hulksmash font-hairline text-5xl">
			<h1>Developers Conference 2020</h1>
			<div class="button-wrapper flex justify-around">
				<router-link :to="'https://meetup.com'" class="button">Register</router-link>
				<!-- <router-link :to="{name:'PageSessions'}" class="button">Schedule</router-link> -->
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.landing-section {
	background-image: url("/images/zoom-bg.svg");
	// background-image: url("/images/zoom-bg-optimized.svg");
	background-size: 160% auto;
	background-position: center center;
	background-repeat: no-repeat;
}
</style>