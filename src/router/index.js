import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/view/Index'

//import Topbar from '@/components/index/Topbar_1'
import NewList1 from '@/components/index/NewList1'
import Index1 from '@/components/index/Index'
import My from '@/components/index/My'

import Search from '@/components/search/Search'

import Details from '@/components/details/index'

import About from '@/components/view/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/Index',
      children: [{
        path: 'Index',
        name: 'Index',
        component: Index1,
      }, {
        path: 'My',
        name: 'My',
        component: My,
      }]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    }
  ]
})
