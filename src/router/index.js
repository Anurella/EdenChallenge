import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
// Rewrite the push method on the prototype and handle the error message uniformly
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/dogdetails:url',
        name: 'DogDetails',
        component: () => import('../views/DogDetails.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../views/Search.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
