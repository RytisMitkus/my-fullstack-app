import { createStore } from 'vuex'
import fetchData from './modules/fetchData.js'
import axios from 'axios'
const store = createStore({
  state() {
    return { messages: null, user: 'Rytis' }
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload
    }

  },
  actions: {
    async fetchData(context) {
      const { data } = await axios.get("/api");
      context.commit('setMessages', data.greetings)
      console.log(data.greetings);
    }
  },
  modules: {
    fetchData,
  }
})
export default store;