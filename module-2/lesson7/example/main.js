        let Vue=require("vue");
        let VueRouter=require("vue-router");
        let App=require("./app.vue");
        let Enlarger=require("./enlarger.vue");
        let Reducer=require("./reducer.vue");

        Vue.use(VueRouter);

        let router = new VueRouter({
        routes: [
            {path: "/add", component: Enlarger},
            {path: "/deduct", component: Reducer}
            ]
        });

        let vm = new Vue({
        el: "#root",
        router: router,
        render: function(createElement) {
            return createElement(App);
            }
        });