<template>
  <div>
    <div>
      <div>
        <div>
          <small>Free to use! Create Awareness.</small>
          <h1>Press Material</h1>
          <p>
            In order to create more awareness for the Developers Conference we
            prepared a variety of media files at your disposal. Please feel
            free
            to use the material to your liking and help us to make this an
            outstanding and remarkable developers conference.
          </p>
        </div>
      </div>
    </div>

    <div data-bg="grey">
      <div>
        <div>
          <small>MSCC</small>
          <h3>Logos</h3>
        </div>
        <div>
          <div>
            <div class="logoContainer m-5" v-for="(logo, index) in logos" :key="index">
              <div>
                <img :src="logo.path" :alt="logo.name">
              </div>
              <div class="pl-5">
                <div>
                  <label>Format: </label>
                  <span>{{ logo.format }}</span>
                </div>
                <div>
                  <label>Style: </label>
                  <span>{{ logo.style }}</span>
                </div>
                <div>
                  <a
                    :href="logo.path"
                    target="_blank"
                    rel="noopener noreferrer"
                  >Download</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "press",
  created() {
		this.logos = [
			{
				name: "MSCC-logo-coloured",
				path: "/images/MSCC-logo-coloured.svg",
				format: "SVG",
				style: "Coloured"
			},
			{
				name: "MSCC-logo-inverted",
				path: "/images/MSCC-logo-inverted.svg",
				format: "SVG",
				style: "Inverted"
			},
			{
				name: "MSCC-logo-coloured",
				path: "/images/MSCC-logo-coloured.png",
				format: "PNG",
				style: "Inverted"
			}
		];
	}
}
</script>

<style>
.logoContainer {
  display: inline-grid;
  grid-template-columns: repeat(2, 130px);
}


</style>
