require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App'
import Welcome from './components/Welcome'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Board from './components/Board.vue'
import Game from './components/Game.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Welcome
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/board',
            name: 'board',
            component: Board,
        },
        {
            path: './game',
            name: 'game',
            component: Game
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
