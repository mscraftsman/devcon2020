<template functional>
  <a class="atomic-logo"
     target="_blank"
     :href="props.sponsor.url"
     :title="props.sponsor.partner + props.sponsor.slogan">
    <div class="logo">
      <img class="logo-col temp-bg p-4 m-4"
           :src="$options.methods.imageResolve(props.sponsor.image)"
           :title="props.sponsor.partner + props.sponsor.slogan"
           :data-partner="props.sponsor.partner"
           :alt="props.sponsor.partner" />
    </div>
  </a>
</template>

<script>
export default {
  name: "SponsorItem",

  props: {
    sponsor: {
      type: Object,

      required: true,

      validator(value) {
        const keys = Object.keys(value);
        const MANDATORY_FIELDS = ["level", "partner", "url", "support"];

        for (let key in value) {
          const isMandatory = MANDATORY_FIELDS.includes(key);

          const isMissingValue = isMandatory && !value[key];
          if (isMissingValue) {
            console.error(`Missing mandatory value for "${key}"`);
            break;
          }
        }

        return true;
      }
    }
  },

  methods: {
    imageResolve(filename) {
      const isFilenameEmpty = !filename;
      if (isFilenameEmpty) {
        return "/images/sponsors/placeholder.png";
      }

      const containsExtension = filename.includes(".");
      const name = containsExtension ? filename : `${filename}.png`;

      return `/images/sponsors/${name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.atomic-logo {
  &:last-child {
    .logo {
      margin-right: 0;
    }
  }

  .logo {
    img {
      display: block;
      // max-height: 10rem;
      // max-width: 20rem;

      // height: auto;
      // filter: grayscale(100%);
      // opacity: 0.6;
      transition: all 0.3s ease-in-out;
      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }
  }

  &:hover {
    .logo {
      img {
        opacity: 1;
        filter: grayscale(0);
      }
    }
  }

  img {
    --mcb-w: 20rem;
    --liquid-w: 15rem;
    --providus-w: 22rem;
    --swan-w: 14rem;
    --ninthbit-w: 18rem;
    --iqera-w: 14rem;
    --linkbynet-w: 15rem;
    --supinfo-w: 15rem;
    --astek-w: 11rem;
    --aerow-w: 15rem;
    --spoon-w: 15rem;
    --ceridian-w: 15rem;
    --ictio-w: 10rem;
    --lsldigital-w: 11rem;
    --expatcom-w: 17rem;
    --geniushive-w: 18rem;

    width: 20rem;
  }

  [data-partner="MCB"] {
    width: var(--mcb-w);
  }

  [data-partner="Liquid Telecom"] {
    width: var(--liquid-w);
  }

  [data-partner="Providus"] {
    width: var(--providus-w);
  }

  [data-partner="Swan Insurance"] {
    width: var(--swan-w);
  }

  [data-partner="9th Bit Consulting"] {
    width: var(--ninthbit-w);
  }

  [data-partner="iQera"] {
    width: var(--iqera-w);
  }

  [data-partner="Linkbynet"] {
    width: var(--linkbynet-w);
  }

  [data-partner="Supinfo International Campus"] {
    width: var(--supinfo-w);
  }

  [data-partner="Astek"] {
    width: var(--astek-w);
  }

  [data-partner="Aerow"] {
    width: var(--aerow-w);
  }

  [data-partner="Spoon Consulting"] {
    width: var(--spoon-w);
  }

  [data-partner="Ceridian"] {
    width: var(--ceridian-w);
  }

  [data-partner="ITC.io"] {
    width: var(--ictio-w);
  }

  [data-partner="LSL Digital"] {
    width: var(--lsldigital-w);
  }

  [data-partner="Expat"] {
    width: var(--expatcom-w);
  }

  [data-partner="Genius Hive"] {
    width: var(--geniushive-w);
  }
}
</style>