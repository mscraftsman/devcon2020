<template>
  <div class="sponsor-level-wrapper" :class="tierClass">
    <div class="title__section">
      <div class="poof">
        <img src="@/assets/home-sponsors/poof.svg" alt="" />
      </div>
      <h4 :class="['tier-title', sanitizeClass(tier)]">{{ tier }}</h4>
    </div>

    <section class="sponsors-wrapper" :class="getWrapperSize">
      <SponsorItem
        v-for="(sponsor, index) of sponsors"
        :key="index"
        :sponsor="sponsor"
      />
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

.title__section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  text-align: center;
  align-items: center;
  justify-content: center;

  .tier-title {
    --diamond: #bf8bbc;
    --titanium: #4daee2;
    --platinium: #c74b47;
    --gold: #e88430;
    --silver: #4bb484;
    --bronze: #f6c376;
    --mediapartner: #cccccc;
    --happyhourpartner: #cccccc;
    --speaker: #cccccc;
    --daycare: #cccccc;

    grid-row: 1 / 1;
    grid-column: 1 / 3;
    text-align: center;

    @apply font-hulksmash;
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 48px;
    text-align: center;
    text-shadow: 0px 4px 0px #000000;

    &.diamond {
      color: var(--diamond);
    }
    &.titanium {
      color: var(--titanium);
    }
    &.platinium {
      color: var(--platinium);
    }
    &.gold {
      color: var(--gold);
    }
    &.silver {
      color: var(--silver);
    }
    &.bronze {
      color: var(--bronze);
    }
    &.mediapartner,
    &.happyhourpartner,
    &.speaker,
    &.daycare {
      color: #cccccc;
    }
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
  padding: 10px 0 30px;
  justify-content: center;
  align-items: center;
  &:last-child {
    // border-bottom: 1px solid rgba(#fff, 0.3);
  }
}

.medium-wrapper {
  .sponsor-logo {
    img {
      width: 190px;
    }
  }
  // @media screen and (max-width: $tablet) {
  @media screen and (max-width: 768px) {
    .sponsor-logo {
      &:nth-child(even) {
        padding: 5px;
      }
      img {
        width: 150px;
      }
    }
  }
}
.small-wrapper {
  .sponsor-logo {
    img {
      width: 150px;
    }
  }
  // @media screen and (max-width: $tablet) {
  @media screen and (max-width: 768px) {
    .sponsor-logo {
      &:nth-child(even) {
        padding: 5px;
      }
      img {
        width: 100px;
      }
    }
  }
}
</style>
