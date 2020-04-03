let vm = new Vue ({
    el: "#app",
    data: {
        list : ["Изучить HTML", "Изучить CSS", "Изучить JavaScript", "Познакомиться с mongoDB", "Изучить vue.js"],
        thing : ""
        },
    methods : {
        addItem: function (event) {
                this.list.push(this.thing); // this - указывет, что работаем с текущими данными
                this.thing="";
        },
        removeItem : function (index) { // при клике на один из элементов списка попадем в эту функцию
            this.list.splice(index,1);  // вырежем тот элемент, по которому кликнули
        }

    }
});

