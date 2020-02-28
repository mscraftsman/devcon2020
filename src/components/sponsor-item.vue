<template functional>
  <a
    class="atomic-logo"
    target="_blank"
    :href="props.sponsor.url"
    :title="props.sponsor.partner + props.sponsor.slogan"
  >
    <div class="logo">
      <img
        class="logo-col temp-bg p-4 m-4"
        :src="$options.methods.imageResolve(props.sponsor.image)"
        :title="props.sponsor.partner + props.sponsor.slogan"
        :data-name="$options.methods.getImageName(props.sponsor.image)"
        :alt="props.sponsor.partner"
      />
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
    },

    getImageName(filename) {
      const [words, _] = filename.split(".");
      const noDashes = words.split("-").join("");
      return noDashes;
    }
  }
};
</script>

<style lang="scss" scoped>
.atomic-logo {
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
    --liquid-w: 19rem;
    --providus-w: 22rem;
    --swan-w: 14rem;
    --sdworx-w: 14rem;
    --teamonite-w: 17rem;
    --ninthbit-w: 15rem;
    --eventstore-w: 18rem;
    --iqera-w: 12rem;
    --linkbynet-w: 16rem;
    --supinfo-w: 14rem;
    --astek-w: 7.5rem;
    --aerow-w: 11rem;
    --spoon-w: 14rem;
    --ceridian-w: 12rem;
    --lsldigital-w: 9.6rem;
    --expatcom-w: 14rem;
    --ictio-w: 8.6rem;
    --geniushive-w: 16rem;

    width: 20rem;
  }

  [data-name="mcb"] {
    width: var(--mcb-w);
  }

  [data-name="liquidtelecom"] {
    width: var(--liquid-w);
  }

  [data-name="providus"] {
    width: var(--providus-w);
  }

  [data-name="sdworx"] {
    width: var(--sdworx-w);
  }
  [data-name="teamonite"] {
    width: var(--teamonite-w);
  }

  [data-name="swan"] {
    width: var(--swan-w);
  }

  [data-name="eventstore"] {
    width: var(--eventstore-w);
  }

  [data-name="9thbit"] {
    width: var(--ninthbit-w);
  }

  [data-name="iqera"] {
    width: var(--iqera-w);
  }

  [data-name="linkbynet"] {
    width: var(--linkbynet-w);
  }

  [data-name="supinfo"] {
    width: var(--supinfo-w);
  }

  [data-name="astek"] {
    width: var(--astek-w);
  }

  [data-name="aerow"] {
    width: var(--aerow-w);
  }

  [data-name="spoon"] {
    width: var(--spoon-w);
  }

  [data-name="ceridian"] {
    width: var(--ceridian-w);
  }

  [data-name="ictio"] {
    width: var(--ictio-w);
  }

  [data-name="lsldigital"] {
    width: var(--lsldigital-w);
  }

  [data-name="expat"] {
    width: var(--expatcom-w);
  }

  [data-name="geniushive"] {
    width: var(--geniushive-w);
  }

  @media screen and (min-width: 768px) {
    img {
      --mcb-w: 20rem;
      --liquid-w: 15rem;
      --providus-w: 22rem;
      --swan-w: 14rem;
      --sdworx-w: 14rem;
      --teamonite-w: 14rem;
      --ninthbit-w: 18rem;
      --eventstore-w: 18rem;
      --iqera-w: 12rem;
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
  }
}
</style>
