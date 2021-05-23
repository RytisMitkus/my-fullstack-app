import { createStore } from 'vuex'
import fetchData from './modules/fetchData.js'
import axios from 'axios'
const store = createStore({
  state() {
    return { messages: null, user: null }
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload
    },
    setUser(state, payload) {
      state.user = payload
    }

  },
  actions: {
    async fetchData(context) {
      const { data } = await axios.get("/api");
      context.commit('setMessages', data.greetings)
      console.log(data.greetings);
    },
    async fetchUser(context) {
      const { data } = await axios.get("/api/user");
      console.log(data)
      context.commit('setUser', data)
    },
  },

  modules: {
    fetchData,
  }
})
export default store;