let sample = [
    { text: "Foo"},
    { text: "Bar"},
    { text: "sAmPle"}
];

let vm = new Vue ({
    el: "#app",
    data: {
        items: sample
        }
});

let vm2 = new Vue ({
    el: "#app2",
    data: {
        items: sample
        }
});

let vm3 = new Vue ({
    el: "#app3",
    data: {
        n: 5
        }
});