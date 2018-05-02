/*
使用vue-router控制路由
路由是有嵌套关系的
把路由理解成树枝，那么组件就是树枝上的树叶，
路由控制的项目的主体结构，通过变更路由来实现那一大块呈现
*/

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

import Login from '@/components/view/Login'
import ReadLike from '@/components/view/ReadLike'
import Fankui from '@/components/view/Fankui'
import Register from '@/components/view/Register'
import ChangeImg from '@/components/view/ChangeImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      //这里是重定向
      //https://router.vuejs.org/zh-cn/essentials/redirect-and-alias.html
      redirect: '/Index',
      //嵌套路由
      //https://router.vuejs.org/zh-cn/essentials/nested-routes.html
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
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/ReadLike',
      name: 'ReadLike',
      component: ReadLike,
    },
    {
      path: '/Fankui',
      name: 'Fankui',
      component: Fankui,
    }
    ,
    {
      path: '/Register',
      name: 'Register',
      component: Register,
    }
    ,
    {
      path: '/ChangeImg',
      name: 'ChangeImg',
      component: ChangeImg,
    }
  ]
})
