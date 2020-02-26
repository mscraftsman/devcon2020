<template>
  <ul :class="className">
    <li>
      <router-link :to="{ name: 'PageCoc' }">Code of Conduct</router-link>
    </li>
    <!-- <li>
      <router-link :to="{ name: 'PageExtras' }">Extras</router-link>
    </li>

    <li>
      <router-link :to="{ name: 'PagePastEvents' }">Past Events</router-link>
    </li> -->
    <li>
      <router-link :to="{ name: 'PagePress' }">Press</router-link>
    </li>
    <!-- <li>
      <router-link :to="{ name: 'PageSessions' }">Sessions</router-link>
    </li>
    <li>
    <router-link :to="{ name: 'PageSpeakers' }">Speakers</router-link>
    </li> -->
    <li>
      <a target="_blank"
         href="https://github.com/mscraftsman/devcon2020/issues">Contribute</a>
    </li>
    <!--<li>
      <router-link :to="{ name: 'session', params: { id: '118176' } }">Sample Session</router-link>
    </li>
    <li>
      <router-link :to="{
                name: 'speaker',
                params: { id: '146ba683-b905-46a9-bc61-108c46964ce8' }
              }">Sample Speaker</router-link>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: "FooterMenu",

  props: {
    className: String,
    required: true,
    default: "menu"
  }
};
</script>

<style  lang="scss" scoped>
.menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  /*padding: 20px 0;*/
}

.earth-menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 30px 0 0 0;

  a {
    text-transform: uppercase;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>