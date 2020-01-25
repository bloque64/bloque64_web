// routes.js

import Home from './components/Home.vue';
import PostList from './components/PostList.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';

const routes = [
    //{ path: '/', component: Home },
    { path: '/', component: PostList, props: {"category": "", "sort_by": "trending"}},
    { path: '/politica', component: PostList, props: {"category": "politica", "sort_by": "trending"}},
    { path: '/economia', component: PostList, props: {"category": "economia", "sort_by": "trending"}},
    { path: '/register', component: Register },
    { path: '/login', component: Login },
]; 

export default routes;