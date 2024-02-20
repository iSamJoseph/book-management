import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import RoutTemplate from '../views/RoutTemplate.vue'
import TablePage from '../views/TablePage.vue'
import Error from '../views/Error.vue'
import LogOut from '../views/LogOut.vue'
import store from '@/Store/store'
import DeleteData from '../views/DeleteData.vue'
import AddBook from '../views/AddBook.vue'

import  Edit from '../views/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RoutTemplate',
      component: RoutTemplate
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter(to, from) {
        if (from.path === '/table') {
          return false
        }
      }
    },
    ,
    {
      path: '/table',
      name: 'table',
       component: TablePage,
      beforeEnter(to, from) {
        if (from.path === '/logout' || store.state.login === false) {
          return router.push('/login')
        }
      }
    },
    {
      path: '/Addbook',
      name: 'add',
       component: AddBook,
      beforeEnter(to, from) {
        if (store.state.login === false) {
          return router.push('/login')
        }
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogOut,
      beforeEnter(to, from) {
        if (from.path === '/login') {
          return false
        }
      }
    },
    
    {
      path: '/edit/:id/:title/:description/:author/:publishyear',
      name: 'edit',
      component: Edit,
   
      beforeEnter(to, from) {
        if (store.state.login === false) {
          return router.push('/login')
        }
      }
    },
    {
      path: '/delete/:id',
      name: 'modals',
      component: DeleteData,
      beforeEnter(to, from) {
        if (store.state.login === false) {
          return router.push('/login')
        }
      }
    },
    {
      path: '/:catchAll(.*)',
      name: '404Name',
      component: Error
    }
  ]
})

export default router
