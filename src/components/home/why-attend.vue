<template>
  <div class="why-attend-section">
    <div class="container mx-auto w-1/2 h-screen flex flex-col align-center justify-center text-center">
      <h2 class="section-title">Here's why you should attend</h2>
      <p class="text-xl">
        Developers Conference is a free event for software developers, sysadmins,
        engineers, managers, students and other like minded folks to meet, share 
        ideas and collaborate. The event comprises of presentations and workshops 
        on various technologies, some of which are emerging tech, and presenters
        share a first hand experience. 
        
        Topics rangefrom web development, general programming, software project 
        management, systems administration, open source, IoT, 3D printing, blockchain, 
        AI/ML and a lot more.
        
        Dubbed as DevCon and hashtagged on social media as #DevConMu, the conference
        spans over three days of activity, presentations, workshops and networking.
        The first two days culminate with a Happy Hour networking session where everyone
        can chill & share a fun moment. Nonetheless, it is also the time when business 
        opportunities may arise.
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
