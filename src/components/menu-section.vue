
<template>
	<div
		class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
	>
		<router-link class="hidden text-center md:inline text-3xl" :to="'/'">Developers Conference 2020</router-link>

		<ul class="flex mr-3">
			<li>
				<router-link :to="{name: 'pagehome'}">Home</router-link>
				<router-link :to="{name: 'PageSessions'}">Sessions</router-link>
				<router-link :to="{name: 'PageSpeakers'}">Speakers</router-link>
				<a href="#" target="_blank">Sponsors</a>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
// .main-menu {
// 	/* @apply bg-black; */

// 	ul {
// 		list-style: none;
// 		display: flex;
// 		justify-content: center;

// 		li {
// 			position: relative;
// 			button {
// 				margin: 10px;
// 			}

// 			a {
// 				padding: 10px;
// 				display: block;
// 				@apply border-2 pr-2;
// 				text-decoration: none;
// 				border-color: transparent;
// 				cursor: pointer;
// 			}
// 		}
// 	}
// }

@screen sm {
	.main-menu {
		ul {
			li {
				padding: 10px;

				button {
					margin: 10px;
				}
				a {
					padding: 10px;
				}
			}
		}
	}
}
</style>
*