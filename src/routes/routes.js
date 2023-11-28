import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/ForgotPass.vue'
import Main from '../views/VistaPrincipal.vue'
import Detalle from '../views/VistaDetalle.vue'
import DetalleMultimedia from '../views/VistaDetalleMultimedia.vue'
import Pelis from '../views/VistaPelis.vue'
import Animes from '../views/Animes.vue'
import Series from '../views/Series.vue'
import Games from '../views/JuegosView.vue'

import NotFound from '../views/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Login
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
        path: '/AnimesView',
        component: Animes
    },
    {
        path: '/SeriesView',
        component: Series
    },
    {
        path: '/GamesView',
        component: Games
    },
    {
        path: '/PelisView',
        component: Pelis
    },

    {
        path: '/principal',
        component: Main
    },
    {
        path: '/detalle/:id?',
        component: Detalle,
        props: true, 
      },
      {
        path: '/detalleMultimedia/:id?',
        component: DetalleMultimedia,
        props: true, 
      },

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