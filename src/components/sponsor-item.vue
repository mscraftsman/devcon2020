<template functional>
  <a class="atomic-logo"
     target="_blank"
     :href="props.sponsor.url"
     :title="props.sponsor.partner + props.sponsor.slogan">
    <div class="logo">
      <img class="logo-col temp-bg"
           :src="$options.methods.imageResolve(props.sponsor.image)"
           :title="props.sponsor.partner + props.sponsor.slogan"
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
  width: 20%;

  &:last-child {
    .logo {
      margin-right: 0;
    }
  }

  .logo {
    margin-right: 20px;

    img {
      display: block;
      // max-width: 250px;
      width: 100%;
      height: auto;
      filter: grayscale(100%);
      opacity: 0.6;
      transition: all 0.3s ease-in-out;
      font-size: 1.5rem;
      font-weight: 700;
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
}

@media (max-width: 768px) {
  .atomic-logo {
    width: 33.3%;
  }
}
@media (max-width: 480px) {
  .atomic-logo {
    width: 50%;
  }
}
</style>