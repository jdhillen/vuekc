// ==|== Imports ===================================================================================
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

// ==|== VueRouter =================================================================================
Vue.use(VueRouter);

// ==|== Routes ====================================================================================
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
    }
];

// ==|== Router ====================================================================================
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

// ==|== Export ====================================================================================
export default router;
