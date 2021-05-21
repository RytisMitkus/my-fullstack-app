// import axios from "axios";

// export default {
//     namespaced: true,
//     state: () => ({
//         messages: null,
//         test: 'test'
//     }),
//     mutations: {
//         set(state, data) {
//             state.messages = data
//         }
//     },
//     actions: {
//         async get({ commit }) {
//             const { data } = await axios.get("/api");
//             commit('set', data);
//             // console.log(state.messages);
//         }
//     },
//     getters: {
//         get: (state, getters) => {
//             getters.pull;
//             return state.messages
//         }
//     }
// }
