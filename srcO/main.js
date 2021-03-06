// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
/* eslint-disable no-new */
//import the hello component
import Hello from './components/Hello'
//import the about component
import About from './components/About'

import Child from './components/Child'
import vito from './views/vito'
//define your routes
const routes = [
  //route for the home route of the webpage
  { path: '/', component: Hello },
  { path: '/child', component: Child },
  { path: '/vito', component: vito },
  //route for the about route of the webpage
  { path: '/about', component: About }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({//创建路由
  routes, // short for routes: routes
  mode: 'history'//以防止我们的 URL 中包含 # 标记
})
//instatinat the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the vue instance
  router
}).$mount('#app')//mount the router on the app
