import types from "./../types"

const state = {
  count: 10
}

const getters = {
  getCount (state) {
    return state.count
  }
}

const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}

const actions = {
  increment ({ commit, state }) {
    commit(types.INCREMENT)
  },
  decrement ({ commit, state }) {
    if (state.count > 10) {
      commit(types.DECREMENT)
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}