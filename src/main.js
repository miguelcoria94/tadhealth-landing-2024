import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import Toaster from "@meforma/vue-toaster";
import router from './router'
import App from './App.vue'
import Vuex from 'vuex'

import './css/style.scss'

const app = createApp(App)
const head = createHead();
app.use(head)
app.use(Vuex)
app.use(Toaster)
app.use(router)
app.mount('#app')

const store = new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
});

export default store
