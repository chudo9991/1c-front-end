let vm = new Vue ({
    el: "#app",
    data: {
        number : 1
        },
    methods : {
        double: function(event) {
            console.log(event);
            this.number *=2;
        }
    }
});

