import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import store from './store.js'

//Step 1 -- Import and use VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

//Step 3 - Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  store,
  router:myRouter
}).$mount('#app')
