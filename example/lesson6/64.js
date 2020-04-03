let vm = new Vue ({
    el: "#app",
    data: {
        list : ["Мой руки!", "Делай уроки!", "Ложись спать!", "Автор: фреккен Бок из Карлссона"],
        thing : ""
        },
    methods : {
        addItem: function (event) {
            if (event.which==13) { // мы проверяем, сто нажата клавиша enter (код 13) и запускаем добавление в список
                this.list.push(this.thing); // this - указывет, что работаем с текущими данными
                this.thing="";
            }
        },
        removeItem : function (index) { // при клике на один из элементов списка попадем в эту функцию
            this.list.splice(index,1);  // вырежем тот элемент, по которому кликнули
        }

    }
});

