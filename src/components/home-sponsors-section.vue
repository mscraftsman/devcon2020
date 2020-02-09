<template>
	<section class="sponsor-section-wrapper">
		<div class="container mx-auto">
			<SponsorList
				v-for="(group, index) in sponsorsGroups"
				:key="index"
				:sponsors="group"
				:tier="index"
			/>
		</div>
	</section>
</template>

<script>
import { mapState } from "vuex";

import { groupBy, sortBy } from "@/helpers";

import SponsorList from "@/components/sponsor-list.vue";
export default {
	components: {
		SponsorList
	},

	computed: {
		...mapState(["sponsors"]),

		displayedSponsors() {
			return this.sponsors.filter(({ support }) => Boolean(support));
		},

		sponsorsGroups() {
			const unOrderedGroups = groupBy(this.displayedSponsors, "level");

			const keys = Object.keys(unOrderedGroups);
			const hasNoKeys = !keys.length;
			if (hasNoKeys) {
				return unOrderedGroups;
			}

			const ORDER_RULES = {
				Diamond: 1,
				Titanium: 2,
				Platinium: 3,
				Gold: 4,
				Silver: 5,
				Bronze: 6,
				"Media Partner": 7,
				"Happy Hour Partner": 8,
				Speaker: 8,
				"Day Care": 9
			};
			const orderedGroups = sortBy(unOrderedGroups, ORDER_RULES);
			return orderedGroups;
		}
	}
};
</script>

<style lang="scss">
.home-component {
	// padding: $section-spacer 0;
}
.mega-rainbow {
	padding-bottom: 30px;
}

.view-more {
	// padding: $gutter * 2 0;
	padding: 1rem * 2 0;
}
.button-center {
	// width: 300px;
	// margin: $gutter auto;
	margin: 1rem auto;
}
</style>