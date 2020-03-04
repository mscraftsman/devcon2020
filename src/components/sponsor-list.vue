<template>
  <div class="sponsor-level-wrapper"
       :class="tierClass">
    <div class="title__section text-3xl mb-0 mt-16">
      <!-- <div class="poof">
        <img src="/images/home-sponsors/poof.svg"
             alt />
      </div> -->
      <h4 :class="['tier-title', sanitizeClass(tier)]">{{ tier | stone }}</h4>
    </div>

    <section class="sponsors-wrapper"
             :class="getWrapperSize">
      <SponsorItem v-for="(sponsor, index) of sponsors"
                   :key="index"
                   :sponsor="sponsor" />
    </section>
  </div>
</template>

<script>
import SponsorItem from "@/components/sponsor-item.vue";

export default {
  name: "SponsorList",

  props: {
    sponsors: {
      type: Array,

      required: true,

      validator(value) {
        const isValidArray = value.length;
        return isValidArray;
      }
    },

    tier: {
      type: String,

      required: true,

      validator(value) {
        return !!value;
      }
    }
  },

  components: {
    SponsorItem
  },

  computed: {
    tierClass() {
      const formatted = this.tier.split(" ").join("-");
      return formatted.toLowerCase();
    },

    getWrapperSize() {
      const MEDIUM_TIERS = ["Speaker Sponsor", "Speaker", "Silver"];
      const SMALL_TIERS = [
        "Happy Hour Partner",
        "Silver",
        "Bronze",
        "Internet",
        "Media Partner",
        "Day Care"
      ];

      const medium = MEDIUM_TIERS.find(item => item === this.tier);
      const small = SMALL_TIERS.find(item => item === this.tier);

      let className = "";

      if (medium) {
        className = "medium";
      }

      if (small) {
        className = "small";
      }

      className = className ? `${className}-wrapper` : "";

      return className;
    }
  },
  methods: {
    sanitizeClass(value) {
      return value
        .split(" ")
        .join("")
        .toLowerCase();
    }
  }
};
</script>

<style lang="scss">
.sponsor-level-wrapper {
  // *styling to be defined
}

.diamond .sponsors-wrapper {
  zoom: 1.2;
}

.titanium .sponsors-wrapper {
  zoom: 1.3;
}

.title__section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  text-align: center;
  align-items: center;
  justify-content: center;

  .tier-title {
    --base-color: #333;
    --side-element-proximity: 2.9rem;
    --side-element-width: 20vw;
    --side-element-height: 0.25rem;
    --side-element-opacity: 0.05;
    --side-element-rotation: 2deg;

    grid-row: 1 / 1;
    grid-column: 1 / 3;

    display: flex;
    justify-content: center;

    text-align: center;

    @apply font-hulksmash;

    font-style: normal;
    font-weight: 100;
    text-align: center;
    letter-spacing: 1.5px;

    color: var(--base-color);

    // --diamond: #bf8bbc;
    // --titanium: #4daee2;
    // --platinium: #c74b47;
    // --gold: #e88430;
    // --silver: #4bb484;
    // --bronze: #f6c376;
    // --mediapartner: #cccccc;
    // --happyhourpartner: #cccccc;
    // --speaker: #cccccc;
    // --daycare: #cccccc;

    // font-weight: normal;
    // font-size: 55px;
    // line-height: 48px;
    // text-shadow: 0px 4px 0px #000000;

    // &.diamond {
    //   color: var(--diamond, var(--base-color));
    // }
    // &.titanium {
    //   color: var(--titanium, var(--base-color));
    // }
    // &.platinium {
    //   color: var(--platinium, var(--base-color));
    // }
    // &.gold {
    //   color: var(--gold, var(--base-color));
    // }
    // &.silver {
    //   color: var(--silver, var(--base-color));
    // }
    // &.bronze {
    //   color: var(--bronze, var(--base-color));
    // }
    // &.mediapartner,
    // &.happyhourpartner,
    // &.speaker,
    // &.daycare {
    //   color: #333;
    // }
  }

  .tier-title::before,
  .tier-title::after {
    content: "";
    display: block;
    position: relative;
    top: 60%;
    transform: translateY(calc(-50% + 5px));

    opacity: var(--side-element-opacity);
    width: 0;
    height: 0;
    border-top: var(--side-element-height) solid transparent;
    border-bottom: var(--side-element-height) solid transparent;
  }
  .tier-title::before {
    transform: rotate(calc(-1 * var(--side-element-rotation)));
    margin-right: var(--side-element-proximity);
    border-right: var(--side-element-width) solid var(--base-color);
  }
  .tier-title::after {
    transform: rotate(var(--side-element-rotation));
    margin-left: var(--side-element-proximity);
    border-left: var(--side-element-width) solid var(--base-color);
  }

  .poof {
    grid-row: 1 / 1;
    grid-column: 1 / 3;
    text-align: center;
    display: flex;
    justify-content: center;

    img {
      height: 80px;
      margin-left: 130px;
    }
  }
}

.sponsors-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .title__section {
    .tier-title {
      --side-element-width: 1vw;

      font-size: 22px;
    }
    
    .poof {
      img {
        margin-left: 70px;
      }
    }
  }

  .diamond .sponsors-wrapper {
    zoom: 1.1;
  }

  .titanium .sponsors-wrapper {
    zoom: 1;
  }
}
</style>
