var input = document.getElementById("input");
input.addEventListener("click", load);
/*var input2 = document.getElementById("input2");
 input.addEventListener("loadend", load2);
 var input3 = document.getElementById("input3");
 input.addEventListener("loadend", load3);*/

function load() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        document.getElementById("input").innerHTML = this.responseText;
    };
    request.addEventListener("loadend", load2);
    request.addEventListener("loadend", load3);
    request.open("GET", "fragment.html", true);
    request.send();
}

function load2() {
    var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
        var akarmi = JSON.parse(this.responseText);
        document.getElementById("input2").innerHTML = akarmi.name;

    };
    request.open("GET", "data.json", true);
    request.send();

}

function load3(input, callback) {
    var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
        var akarmi = JSON.parse(this.responseText);
        document.getElementById("input3").innerHTML = akarmi.name;
    };
    request.open("GET", "data.json", true);
    request.send();

}
