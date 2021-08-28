import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {
    username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
  }
}

export default new Vuex.Store({
  state,
  mutations: {
    login(state,user){
        state.user=user,
        window.localStorage.setItem("user",JSON.stringify(user));
    }
  }
})

