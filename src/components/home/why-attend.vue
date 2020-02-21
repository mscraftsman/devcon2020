<template>
  <div class="why-attend-section">
    <div class="container mx-auto w-1/2 h-screen flex flex-col align-center justify-center text-center">
      <h2 class="section-title">Here's why you should attend</h2>
      <p class="text-xl">
        Pritvi will be here Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Culpa ratione, ea reprehenderit porro doloribus facere assumenda
        tempore amet similique optio animi! Non, incidunt? Atque rem praesentium
        fugit. Sequi, facere quaerat!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.why-attend-section {
  --buildings-size: 200px;

  background: url("/images/why-attend/buildingleft.png"),
    url("/images/home-sponsors/radial.svg"),
    url("/images/why-attend/buildingright.png");

  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, no-repeat;

  background-size: var(--buildings-size), cover, var(--buildings-size);

  @media screen and (min-width: 425px) {
    background-position: center left, center center, center right;
  }

  @media screen and (min-width: 768px) {
    --buildings-size: 350px;
    background-position: center left, center center, center right;
  }

  @media screen and (min-width: 1024px) {
    --buildings-size: 400px;
    background-position: center left, center center, center right;
  }

  @media screen and (min-width: 1400px) {
    --buildings-size: 600px;
    background-position: center left, center center, center right;
  }
}
</style>
