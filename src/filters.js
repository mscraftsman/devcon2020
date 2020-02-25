import Vue from "vue";
const tierStoneMapping = require("@/constants/tier-stone-mapping.json")

Vue.filter("stone", tier => {
  const stone = tierStoneMapping[tier];
  return stone || tier;
});
