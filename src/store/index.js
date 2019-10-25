import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: 'Relax! This is just a drill error message',
    user: {
      username: 'Jack',
      name: 'Jack Sparrow'
    },
    reconnect: false,
    activeRoom: 124,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  mutations,
  actions,
  getters: {
    hasError: state => state.error ? state.error : false
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})
