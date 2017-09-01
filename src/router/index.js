import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Dialog from '@/components/Dialog'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Dialog',
      name: 'Dialog',
      component: Dialog
    }
  ]
})
