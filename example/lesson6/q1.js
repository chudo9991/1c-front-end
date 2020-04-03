let vm = new Vue ({
    el: "#app",
    data: {
        b:0,
        c:0,
        x1:0,
        x2:0,
        f:""        
    },
    methods:{
        calc: function() {
            D= Math.pow(this.b,2)-4*this.c;
            if (this.D<0) {this.x1="нет корня";this.x2="нет корня";};
            if (this.D==0) {this.x1 = (-0.5)*this.b;};
            if (this.D>0) {this.x1 = 0.5*(-this.b-Math.sqrt(this.D)); this.x2 = 0.5*(-this.b+Math.sqrt(this.D)); };
            this.f="X^2+"+String(this.b)+"*X+"+String(this.c)
            return this.x1,this.x2;
        },
        draw5: function() {

        }
    },
    computed: {
        D: function() {
              return Math.pow(this.b,2)-4*this.c;
            }
        
    }
});


