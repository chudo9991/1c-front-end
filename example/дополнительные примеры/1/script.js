new Vue ({
    el: '#app',
    data: {
        title: "Hello, World!",
        colorFromVue: ''
    },
    methods: {
        changeText() {
            this.title = "Это новый текст!"
        }
    }
});