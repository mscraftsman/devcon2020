<template>
  <div class="speaker-box bg-white" :id="speaker.fullName">
    <div class="speaker-image">
      <img class=" border-2 border-black" :src="speaker.profilePicture" alt />
    </div>
    <div class="speaker-meta text-center bg-black text-white p-3 h-full">
      <div class="name text-xl text-black bg-white font-hulksmash my-2">
        {{ speaker.fullName }}
      </div>
      <div class="occupation text-xs uppercase font-spiderman">
        {{ speaker.tagLine }}
      </div>
      <div class="alias"></div>
      <div class="talk-count" v-if="speaker.sessions.length > 1">
        {{ speaker.sessions.length }} talks
      </div>
      <div class="talk-count" v-else>{{ speaker.sessions.length }} talk</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["speaker"]
};
</script>

<style scoped>
.speaker-image {
  filter: grayscale(100%);
  transition: all 0.4s ease-in-out;
}

.speaker-image:hover {
  filter: none;
}

.name {
  background: url('data:image/svg+xml;utf8,<svg width="100" height="100" transform="rotate(25)" opacity="0.3" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g  fill="%23250E17"><circle cx="25" cy="25" r="12.5"/><circle cx="75" cy="75" r="12.5"/><circle cx="75" cy="25" r="12.5"/><circle cx="25" cy="75" r="12.5"/></g></svg>'),
    rgb(255, 236, 126);
  background-size: 16px, 100%;
}
</style>
