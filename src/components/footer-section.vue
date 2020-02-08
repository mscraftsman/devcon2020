<template>
	<div class="container mx-auto text-sm uppercase tracking-wide footer-wrapper">
		<div class="logo">
			<router-link :to="{name: 'pagehome'}">
				<img src="/images/MSCC-logo-inverted.svg" alt />
			</router-link>
		</div>
		<ul class="menu">
			<li>
				<router-link :to="{name: 'PageCoc'}">Code of Conduct</router-link>
			</li>
			<li>
				<router-link :to="{name: 'PageExtras'}">Extras</router-link>
			</li>
			<li>
				<router-link :to="{name: 'PagePastEvents'}">Past Events</router-link>
			</li>
			<li>
				<router-link :to="{name: 'PagePress'}">Press</router-link>
			</li>
			<li>
				<router-link :to="{name: 'PageSessions'}">Sessions</router-link>
			</li>
			<li>
				<router-link :to="{name: 'PageSpeakers'}">Speakers</router-link>
			</li>
			<li>
				<a target="_blank" href="https://github.com/mscraftsman/devcon2020/issues">Contribute</a>
			</li>
			<li>
				<router-link :to="{name: 'PageSessionSingle'}">Sample Session</router-link>
			</li>
			<li>
				<router-link :to="{name: 'PageSpeakerSingle'}">Sample Speaker</router-link>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.footer-wrapper {
	display: grid;
	grid-template-columns: 100px 1fr;
	grid-gap: 100px;
	padding: 20px 0;
}

.logo {
}
.menu {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 20px;
	// padding: 20px 0;

	// a {
	// 	@apply pl-2;

	// 	&:hover {
	// 		text-decoration: underline;
	// 	}
	// }
}
</style>
