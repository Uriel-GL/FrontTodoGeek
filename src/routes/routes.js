import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPass.vue'
import Pelis from '../views/VistaPelis.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/forgot-password',
        component: ForgotPassword
    },
    {
        path: '/PelisView',
        component: Pelis
    },

    //Cuando se ingrese una ruta que no este registrada lo llevara a la siguiente pagina
    {
        path: '/:catchAll(.*)',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router