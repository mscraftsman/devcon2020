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
    path: "/PageCoc",
    name: "PageCoc",
    component: PageCoc
  },
  {
    path: "/PageExtras",
    name: "PageExtras",
    component: PageExtras
  },
  {
    path: "/PagePastEvents",
    name: "PagePastEvents",
    component: PagePastEvents
  },
  {
    path: "/PagePress",
    name: "PagePress",
    component: PagePress
  },
  {
    path: "/PageSessions",
    name: "PageSessions",
    component: PageSessions
  },
  {
    path: "/PageSessionSingle",
    name: "PageSessionSingle",
    component: PageSessionSingle
  },
  {
    path: "/PageSpeakers",
    name: "PageSpeakers",
    component: PageSpeakers
  },
  {
    path: "/PageSpeakerSingle",
    name: "PageSpeakerSingle",
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
