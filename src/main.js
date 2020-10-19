// main.js

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    
    routes: Routes,
    mode: "history"

});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
