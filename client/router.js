import Vue from 'vue'

import VueRouter from 'vue-router'

import { Meteor } from "meteor/meteor";

import Home from '../imports/ui/components/Home'
import Login from '../imports/ui/components/Login.vue'
import Signup from '../imports/ui/components/Signup'
import PrivateRoute from '../imports/ui/components/PrivateRoute'


Vue.use(VueRouter); const routes = [

    { path: '/', name: 'home', component: Home, meta: { auth: false } },

    { path: '/privateroute', name: 'PrivateRoute', component: PrivateRoute, meta: { auth: true } },

    { path: '/login', name: 'login', component: Login, meta: { auth: false } },

    { path: '/register', name: 'register', component: Signup, meta: { auth: false } },

]

const router = new VueRouter({
    mode: 'history',

    routes,

})

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !Meteor.user()) {
        next('/login')
    } else {
        next();
    }
});

export default router