var Vue = require("vue");
var VueRouter = require("vue-router");
var App = require("./app.vue");
var Gallery = require("./pages/gallery.vue");
var Item = require("./pages/item.vue");


Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        { path: "/", component: Gallery },
        { path: "/items/:index", component: Item }
    ]
});

var vm = new Vue({
    el: "#root",
    router: router,
    render: function(createElement) {
        return createElement(App);
    }
});