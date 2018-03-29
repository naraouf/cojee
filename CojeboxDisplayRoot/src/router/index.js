import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bloc_entete01 from '@/components/Bloc_entete01'
import Menu from '@/components/Menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Bloc_entete01
    },
    {
      path: '/menu/:nin',
      name: 'Menu',
      component: Menu
    },
    
  ]
})
