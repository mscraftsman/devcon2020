
<template>
	<div class="w-full" :class="isHome">
		<div
			class="main-menu container mx-auto font-bold md:flex justify-center md:justify-between items-center py-3 md:py-10"
		>
			<router-link
				class="hidden text-center md:inline text-4xl font-hulksmash font-hairline tracking-wide bg-white"
				:to="'/'"
			>Developers Conference 2020</router-link>

			<ul class="flex mr-3">
				<li>
					<router-link :to="{name: 'pagehome'}">Home</router-link>
					<router-link :to="{name: 'PageSessions'}">Sessions</router-link>
					<router-link :to="{name: 'PageSpeakers'}">Speakers</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		isHome() {
			if (this.$route.name === "pagehome") {
				return "hidden";
			} else {
				return "";
			}
		}
	}
};
</script>

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
				background: white;

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
