let vm = new Vue ({
    el: "#app",
    data: {
        numbers: ["1", "4"]
        },
    computed: {
        average : function() {
            let sum=0, n=this.numbers.length;
            for (let i=0; i < n; ++i) {
                sum += Number(this.numbers[i]);
            }
            return sum/n;
        }
    }
});

