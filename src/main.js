import Vue from 'vue'
import App from './App.vue'
import router from './router'
import creditcards from './assets/creditcards.json'

Vue.config.productionTip = false

new Vue({
    data() {
        return {
          allCards: creditcards.cards,
        };
      },
      methods: {
        },
  router,
  render: h => h(App)
}).$mount('#app')
