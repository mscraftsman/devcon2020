<template>
	<div class="page-past-events">
		<h1 class="text-3xl">Past Events</h1>
		<past-events></past-events>

		<h1 class="text-3xl">Heroes</h1>

		<img class="hero" src="/images/heroes/batmanAndSuperman.svg" />
		<img class="hero" src="/images/heroes/captainAmerica.svg" />
		<img class="hero" src="/images/heroes/captainAmericaTwo.svg" />
		<img class="hero" src="/images/heroes/deadpool.svg" />
		<img class="hero" src="/images/heroes/deadpooltwo.svg" />
		<img class="hero" src="/images/heroes/fivesome.svg" />
		<img class="hero" src="/images/heroes/herofaces.svg" />
		<img class="hero" src="/images/heroes/hulk.svg" />
		<img class="hero" src="/images/heroes/ironman.svg" />
		<img class="hero" src="/images/heroes/ironmanFace.svg" />
		<img class="hero" src="/images/heroes/ironmanthree.svg" />
		<img class="hero" src="/images/heroes/ironmantwo.svg" />
		<img class="hero" src="/images/heroes/joker.svg" />
		<img class="hero" src="/images/heroes/sixsome.svg" />
		<img class="hero" src="/images/heroes/spiderman.svg" />
		<img class="hero" src="/images/heroes/spidermantwo.svg" />
		<img class="hero" src="/images/heroes/supergirl.svg" />
		<img class="hero" src="/images/heroes/superman.svg" />
		<img class="hero" src="/images/heroes/wonderwoman.svg" />
		<img class="hero" src="/images/heroes/wonderwomanSide.svg" />
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
.hero {
	width: 100%;
	height: 100vh;
	object-fit: contain;
	object-position: center center;
	text-align: center;
	display: block;
}
.page-past-events {
}
</style>
