// выводим в консоль браузера общее число нажатий на кнопку
var button = document.getElementById("convert");
var count = 0;

function print() {
    count = count + 1;
    console.log("Колличество нажатий кнопки: " + count);
}

button.addEventListener("click", print);