import Vue from 'vue';
import Vuex from 'vuex';
import { SWAPI, SQSClient } from '../services'

Vue.use(Vuex);

const state = {
  items: [],
  isLoading: false,
  searchType: 'people',
  searchKey: '',
  stats: {
    requests: 0,
    total: {
      count: 0,
    },
    last: {
      count: 0,
      type: '',
      search: ''
    }
  }
}

const getters = {
  stateType: ({ searchType }) => searchType,
  stateKey: ({ searchKey }) => searchKey,
  stateStats: ({ stats }) => stats
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
  }
}

const actions = {
  async search({ commit, state }) {
    commit('TOGGLE_LOADING', true);
    const result = await SWAPI.search(state.searchType, state.searchKey)
    commit('CHANGE_ITEMS', result.results)
    commit('TOGGLE_LOADING', false);
    SQSClient.publishMessage({ searchType: state.searchType, searchKey: state.searchKey, result })
  }
 }

export const computeStat = (message) => {
  const body = JSON.parse(message.Body)
  state.stats.requests++
  state.stats.total = {
    count: state.stats.total.count + body.result.count
  },
  state.stats.last = {
    count: body.result.count,
    type: body.searchType,
    search: body.searchKey
  }
  
}

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
});
