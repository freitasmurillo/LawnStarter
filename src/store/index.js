import Vue from 'vue';
import Vuex from 'vuex';
import SWAPI from '../services'

Vue.use(Vuex);

const state = {
  items: [],
  isLoading: false,
  searchType: 'people',
  searchKey: '',
}

const getters = {
  stateType: ({ searchType }) => searchType,
  stateKey: ({ searchKey }) => searchKey
}

const mutations = {
  CHANGE_ITEMS: (s, items) => {
    s.items = items;
  },
  TOGGLE_LOADING: (s, loading = false) => {
    s.isLoading = !!loading;
  },
  CHANGE_SEARCH_TYPE: (s, type) => {
    s.searchType = type;
  },
  CHANGE_SEARCH_KEY: (s, key) => {
    s.searchKey = key;
  },
}

const actions = {
  async search({ commit, state }) {
    commit('TOGGLE_LOADING', true);
    const result = await SWAPI.search(state.searchType, state.searchKey)
    commit('CHANGE_ITEMS', result.results)
    commit('TOGGLE_LOADING', false);
  }
 }

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});
