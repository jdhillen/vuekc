// ==|== Imports ===================================================================================
import Vue from "vue";
import App from "./App.vue";
import router from "./assets/js/router";
import store from "./assets/js/store";

// ==|== Create App ================================================================================
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
