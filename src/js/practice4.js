var input = document.getElementById("input");
input.addEventListener("click", load);
var input2 = document.getElementById("input2");
input2.addEventListener("click", load2);

function load() {
    var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
        document.getElementById("input").innerHTML = this.responseText;
    };
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
