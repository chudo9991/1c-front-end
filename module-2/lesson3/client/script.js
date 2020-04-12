let button = document.getElementById("request");
button.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:591/", true);
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            if (this.status != 200) {
                console.log("Ошибка: "+this.status);
            } else {
                console.log(this.responseText);
            }

        }
    }
xhr.send();
});

// через JQuery
// $("#request").on("click", function() {
//     let request = $.get("http://localhost:591");
//     request.done(function(data) {
//         console.log(data);
//     });
//     request.fail(function(jqXHR, textStatus, errorThrown) {
//         console.log(textStatus, errorThrown);
//     });
// });

