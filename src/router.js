import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/login',
      name: 'login',
      component: function () {
        return import('./views/Login.vue');
      }
    }, {
      path: '/register',
      name: 'register',
      component: function () {
        return import('./views/Register.vue');
      }
    }, {
      path: '/cproject',
      name: 'cproject',
      component: function () {
        return import('./views/CreateProject.vue');
      }
    }, {
      path: '/profile',
      name: 'profile',
      component: function () {
        return import('./views/Profile.vue');
      }
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: function () { 
    //     return import(/* webpackChunkName: "about" */ './views/About.vue')
    //   }
    // }
  ]
})