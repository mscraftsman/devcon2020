<template>
	<div class="flex items-center justify-center h-screen landing-section">
		<div class="text-box">
			<div class="flex flex-col items-end justify-between font-bold uppercase">
				<div class="text-xl">Caudan Arts Center</div>
				<div class="text-3xl font-black">2 - 4 April 2020</div>
			</div>
			<h1 class="font-hulksmash font-hairline text-5xl leading-none">Developers Conference 2020</h1>
			<div class="button-wrapper flex justify-around pt-5">
				<!--<router-link
					:to="'https://meetup.com'"
					class="button text-2xl font-black font-spiderman bg-black text-white py-3 px-5"
				>Register</router-link>-->
				<router-link
					href="https://www.meetup.com/MauritiusSoftwareCraftsmanshipCommunity/events/268265742/"
					class="button text-2xl font-black font-spiderman bg-black text-white py-3 px-5"
				>Register</router-link>
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