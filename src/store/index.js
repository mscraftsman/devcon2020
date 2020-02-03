import Vue from "vue";
import Vuex from "vuex";

import { extractData, fetchJson, groupById } from "@/helpers";

Vue.use(Vuex);

export const SET_SPEAKERS = "SET_SPEAKERS";
export const SET_SPEAKERS_READY = "SET_SPEAKERS_READY";
export const SET_SPEAKERS_BY_ID = "SET_SPEAKERS_BY_ID";
export const SET_SESSIONS = "SET_SESSIONS";
export const SET_SESSIONS_READY = "SET_SESSIONS_READY";
export const SET_SESSIONS_BY_ID = "SET_SESSIONS_BY_ID";
export const SET_SPONSORS = "SET_SPONSORS";
export const SET_STATS = "SET_STATS";

export const FETCH_SPEAKERS = "FETCH_SPEAKERS";
export const FETCH_SESSIONS = "FETCH_SESSIONS";
export const FETCH_SPONSORS = "FETCH_SPONSORS";
export const FETCH_STATS = "FETCH_STATS";

export default new Vuex.Store({
  state: {
    speakers: [],
    speakersReady: false,
    speakersById: [],
    sessions: [],
    sessionsReady: false,
    sessionsById: [],
    sponsors: [],
    stats: [],
  },

  getters: {
    getSpeakersReady(state) {
      return state.speakersReady;
    },

    getSpeakers(state) {
      return state.speakers;
    },

    getSpeakersById(state) {
      return state.speakersById;
    },

    // ! can it be a variation of `getSpeakers`?
    getFeaturedSpeakers(state) {
      return state.speakers.filter(speaker => speaker.isTopSpeaker);
    },

    getSessionsReady(state) {
      return state.sessionsReady;
    },

    getSessions(state) {
      return state.sessions;
    },

    getSessionsById(state) {
      return state.sessionsById;
    },

    // ! missing filtering/ordering logic (?)
    getSessionsByRoom(state) {
      return state.sessions;
    },

    getSponsors(state) {
      return state.sponsors;
    },

    getStats(state) {
      return state.stats;
    },
  },

  mutations: {
    [SET_SPEAKERS_READY](state, payload) {
      Vue.set(state, "speakersReady", payload);
    },

    [SET_SPEAKERS](state, speakers) {
      state.speakers = speakers;
    },

    [SET_SPEAKERS_BY_ID](state, speakers) {
      state.speakersById = speakers;
    },

    [SET_SESSIONS_READY](state, payload) {
      Vue.set(state, "sessionsReady", payload);
    },

    [SET_SESSIONS](state, sessions) {
      state.sessions = sessions;
    },

    [SET_SESSIONS_BY_ID](state, sessions) {
      state.sessionsById = sessions;
    },

    [SET_STATS](state, stats) {
      state.stats = stats;
    },

    [SET_SPONSORS](state, sponsors) {
      state.sponsors = sponsors;
    },
  },

  actions: {
    [SET_SPEAKERS_READY]({ commit }, payload) {
      commit(SET_SPEAKERS_READY, payload);
    },

    async [FETCH_SPEAKERS]({ commit }) {
      const URL = require("@/constants/urls.json")["sessionize-speakers"];

      let payload;

      try {
        payload = await fetchJson(URL)
      } catch (error) {
        throw new Error("Error should be caught by Vue global error handler." + error);
      }

      commit(SET_SPEAKERS, payload);

      let groupById = (payload || []).reduce(function (r, a) {
        r[a.id] = r[a.id] || [];
        r[a.id] = a;
        return r;
      }, Object.create(null));

      commit(SET_SPEAKERS_BY_ID, groupById);
      commit(SET_SPEAKERS_READY, true);

      return payload;
    },

    [SET_SESSIONS_READY]({ commit }, payload) {
      commit(SET_SESSIONS_READY, payload);
    },

    async [FETCH_SESSIONS]({ commit }) {
      const URL = require("@/constants/urls.json")["sessionize-sessions"];

      let payload;

      try {
        payload = await fetchJson(URL)
      } catch (error) {
        throw new Error("Error should be caught by Vue global error handler." + error);
      }

      commit(SET_SESSIONS, payload);

      const flatSessionList = (payload || []).flatMap(({ sessions }) => sessions)
      let groupedById = (flatSessionList || []).reduce(groupById, Object.create(null));
      commit(SET_SESSIONS_BY_ID, groupedById);

      return payload;
    },

    async [FETCH_SPONSORS]({ commit }) {
      const URL = require("@/constants/urls.json")["sponsor-content"];

      let entry;
      try {
        const { feed } = await fetchJson(URL)
        entry = feed.entry;
      } catch (error) {
        throw new Error("Error should be caught by Vue global error handler." + error);
      }

      const sponsors = extractData(entry)
      commit(SET_SPONSORS, sponsors);
      return sponsors;
    },

    async [FETCH_STATS]({ commit }) {
      const URL = require("@/constants/urls.json")["devcon-stats"];

      let entry;
      try {
        const { feed } = await fetchJson(URL)
        entry = feed.entry;
      } catch (error) {
        throw new Error("Error should be caught by Vue global error handler." + error);
      }

      const stats = extractData(entry)
      commit(SET_STATS, stats)
      return stats;
    },
  }
});