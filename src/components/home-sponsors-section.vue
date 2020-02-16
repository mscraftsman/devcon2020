<template>
  <section class="sponsor-section-wrapper">
    <!-- title -->
    <div class="title__container">
      <div class="bg__asset">
        <img src="/images/home-sponsors/red-bg.svg"
             alt />
      </div>
      <div class="title__wrapper">
        <h2 class="title">Sponsors</h2>
        <div class="title__sub font-hulksmash">Backed by some big players of the industry</div>
      </div>
    </div>

    <div class="container mx-auto">
      <SponsorList v-for="(group, index) in sponsorsGroups"
                   :key="index"
                   :sponsors="group"
                   :tier="index" />
    </div>

    <div class="become__sponsor__container">
      <a href="#"
         class="become__sponsor__button">
        <div class="bg__asset">
          <img src="/images/home-sponsors/become-sponsor-bg.svg"
               alt />
        </div>
        <div class="text">Become a sponsor</div>
      </a>
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
      return this.sponsors.filter(({ support }) => !!Number(support) || false);
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

<style lang="scss" scoped>
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

.sponsor-section-wrapper {
  background: /*url("/images/home-sponsors/left-retro.svg"),*/ url("/images/home-sponsors/radial.svg"),
    /*url("/images/home-sponsors/right-retro.svg"),*/
      url("/images/home-sponsors/cloud-left.svg"),
    url("/images/home-sponsors/cloud-right.svg");
  background-position: /*top left,*/ top center, /*top right,*/ bottom left,
    bottom right;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;
  background-size: /*400px,*/ cover, /*400px,*/ 600px, 600px;
}

.title__container {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  .bg__asset {
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    text-align: center;
    z-index: 1;

    img {
      margin: 0 auto;
      width: 500px;
      transform: rotate(-10deg);
    }
  }

  .title__wrapper {
    text-align: center;
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -50px;
    z-index: 2;

    .title {
      font-size: 60px;
      line-height: 60px;
      margin: 0;
      color: white;
      text-shadow: 3px 3px 0 rgba(0, 0, 0, 1);
      margin-bottom: 5px;
      letter-spacing: -0.2px;
    }

    .title__sub {
      color: rgb(255, 236, 126);
      @apply font-robotocondensed;
      font-style: italic;
      font-weight: bold;
      font-size: 25px;
      line-height: 26px;
      text-align: center;
      text-transform: uppercase;
      text-shadow: 2px 2px 0px #000000;
    }
  }
}

.become__sponsor__container {
  .become__sponsor__button {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    width: 300px;
    margin: 0 auto;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);

      .text {
        transform: scale(1.2) rotate(-10deg);
      }
    }
  }

  .bg__asset {
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    text-align: center;

    img {
      margin: 0 auto;
      width: 300px;
    }
  }

  .text {
    @apply font-hulksmash;
    text-align: center;
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;

    font-size: 40px;
    margin-top: 10px;
    transform: rotate(-10deg);
    margin: 0;
    color: black;
    text-shadow: 3px 3px 0 rgba(255, 255, 255, 1);
  }
}

@media (max-width: 768px) {
  .sponsor-section-wrapper {
    background-size: 200px, cover, 200px, 200px, 200px;
  }
}

@media (max-width: 480px) {
  .title__container {
    .bg__asset {
      img {
        width: 300px;
      }
    }

    .title__wrapper {
      .title {
        font-size: 30px;
        line-height: 30px;
      }

      .title__sub {
        font-size: 18px;
        line-height: 15px;
      }
    }
  }
}
</style>
