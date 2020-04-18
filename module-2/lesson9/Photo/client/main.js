var Vue = require("vue"),
    VueResource = require("vue-resource"),
    VueRouter = require("vue-router"),
    VueJwtMongo = require("vue-jwt-mongo");

var App = require("./app.vue");

var Index = require("./components/index.vue"),
    Register = require("./components/register.vue"),
    Login = require("./components/login.vue"),
    Feed = require("./components/feed.vue"),
    Upload = require("./components/upload.vue");

Vue.use(VueResource);
Vue.use(VueJwtMongo.Client);
Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: "/", component: Index },
        { path: "/register", component: Register },
        { path: "/login", component: Login },
        { path: "/feed", component: Feed },
        { path: "/upload", component: Upload }
    ]
});

var vm = new Vue({
    el: "#root",
    router: router,
    render: function(createElement) {
        return createElement(App);
    }
});