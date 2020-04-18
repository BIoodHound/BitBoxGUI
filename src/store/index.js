import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module.js';
import { item } from './item.module.js';
import { account } from './account.module.js';
import { vueState } from './vueState.module.js';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    item,
    account,
    vueState
  }
  
})
