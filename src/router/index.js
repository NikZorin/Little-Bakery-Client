import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/Main'
import MainHome from '@/components/main/MainHome'
import MainCatalog from '@/components/main/MainCatalog'
import MainConstructor from '@/components/main/MainConstructor'
import MainPrice from '@/components/main/MainPrice'
import MainFeedbacks from '@/components/main/MainFeedbacks'
import MainBlog from '@/components/main/MainBlog'
import MainContacts from '@/components/main/MainContacts'
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
      name: 'main',
      component: Main,
      children: [
        {
          path: '',
          component: MainHome
        },
        {
          path: 'catalog',
          component: MainCatalog
        },
        {
          path: 'constructor',
          component: MainConstructor
        },
        {
          path: 'price',
          component: MainPrice
        },
        {
          path: 'feedbacks',
          component: MainFeedbacks
        },
        {
          path: 'blog',
          component: MainBlog
        },
        {
          path: 'contacts',
          component: MainContacts
        }
      ]
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
      beforeEnter (to, from, next) {
        if (localStorage.token) {
          next();
        } else {
          next('/login');
        }
      },
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
