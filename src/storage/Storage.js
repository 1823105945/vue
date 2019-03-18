import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = new Vuex.Store({
  modules: {
    isLogin:{
      type: Boolean,
      default: false,
    },
  },
})

export default state
