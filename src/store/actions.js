import $http from '../api/http-client.js';

const actions = {
  init({ dispatch }) {
    // TODO reset store, status = 0 ... 100, old cart in local-storage
    $http.initialize();
    dispatch('loadCatalog');
  },
  loadCatalog({ commit }) {
    $http.getCatalog().then(resp => {
      console.log(resp);
      commit('SET_CATALOG', resp);
    });
  },
};

export default actions;
