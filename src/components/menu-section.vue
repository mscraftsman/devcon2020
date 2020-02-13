<template>
  <div class="w-full">
    <div
      class="main-menu container mx-auto md:flex justify-center md:justify-between items-center py-3 md:py-10"
    >
      <router-link
        class="hidden text-left md:inline text-5xl bg-white"
        :to="'/'"
      >
        <h2
          class="text-sm font-spiderman font-regular uppercase tracking-tighter"
        >
          Developers Conference 2020
        </h2>
        <h1 class="leading-none font-hulksmash font-hairline tracking-wider">
          {{ title }}
        </h1>
      </router-link>

      <ul class="flex mr-3">
        <li>
          <router-link :to="{ name: 'pagehome' }">Home</router-link>
          <router-link :to="{ name: 'PageSessions' }">Sessions</router-link>
          <router-link :to="{ name: 'PageSpeakers' }">Speakers</router-link>
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
    },

    title() {
      const routeMeta = this.$route.meta;
      if (!routeMeta) {
        return "";
      }

      return this.$route.meta.title;
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
