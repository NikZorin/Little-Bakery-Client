import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Admin from '@/components/admin/Admin'
import AdminWelcome from '@/components/admin/AdminWelcome'
import AdminPosts from '@/components/admin/AdminPosts'
import AdminCakes from '@/components/admin/AdminCakes'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '',
          component: AdminWelcome
        },
        {
          path: 'posts',
          component: AdminPosts
        },
        {
          path: 'cakes',
          component: AdminCakes
        }
      ]
    }
  ]
})

export default router
