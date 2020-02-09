import Vue from "vue";
import VueRouter from "vue-router";

import PageHome from "../views/PageHome.vue";
import PageCoc from "../views/PageCoc.vue";
import PageExtras from "../views/PageExtras.vue";
import PagePastEvents from "../views/PagePastEvents.vue";
import PagePress from "../views/PagePress.vue";
import PageSessions from "../views/PageSessions.vue";
import PageSessionSingle from "../views/PageSessionSingle.vue";
import PageSpeakers from "../views/PageSpeakers.vue";
import PageSpeakerSingle from "../views/PageSpeakerSingle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "pagehome",
    component: PageHome,
    meta: {
      layout: "full"
    }
  },
  {
    path: "/code-of-conduct",
    name: "PageCoc",
    component: PageCoc
  },
  {
    path: "/extras",
    name: "PageExtras",
    component: PageExtras
  },
  {
    path: "/past-events",
    name: "PagePastEvents",
    component: PagePastEvents
  },
  {
    path: "/press",
    name: "PagePress",
    component: PagePress
  },
  {
    path: "/sessions",
    name: "PageSessions",
    component: PageSessions
  },
  {
    path: "/session/:id",
    name: "session",
    component: PageSessionSingle
  },
  {
    path: "/speakers",
    name: "PageSpeakers",
    component: PageSpeakers,
    meta: {
      layout: "full"
    }
  },
  {
    path: "/speaker/:id",
    name: "speaker",
    component: PageSpeakerSingle
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 10 }
      };
    }
  }
});

export default router;
