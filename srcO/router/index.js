import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Child from '@/components/Child'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/child',
      name: 'Child',
      component: Child
    },
    {
      path: '*',
      redirect:'/child'
    }
  ]
})
