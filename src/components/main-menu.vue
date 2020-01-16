
<template>
	<div
		class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
	>
		<nuxt-link class="hidden text-center md:inline text-3xl" :to="'/'"
			>Developers Conference 2020</nuxt-link
		>

		<ul class="flex mr-3">
			<li>
				<a href="#" target="_blank">Home</a>
				<a href="#" target="_blank">Schedule</a>
				<a href="#" target="_blank">Speakers</a>
				<a href="#" target="_blank">Extras</a>
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