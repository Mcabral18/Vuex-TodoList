import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "My custom Title",
    links: ["http://google.com", "http://youtube.com", "http://reddit.com"],
  },
  mutations: {
    ADD_LINK(state, link) {
      state.links.push(link);
    },
    REMOVE_LINK(state, link) {
      //remove a link
      state.links.splice(link, 1);
    },
    REMOVE_ALL(state) {
      state.links = [];
    },
  },
  actions: {
    removeLink(context, link) {
      context.commit("REMOVE_LINK", link);
    },
    removeAll({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit("REMOVE_ALL");
          resolve();
        }, 1500);
      });
    },
  },
  getters: {
    // criar uma function dou lhe access ao state
    countLinks(state) {
      return state.links.length;
    },
  },
});
