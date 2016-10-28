var changeNumbers = document.getElementById("numberSelect");

function writeNumbers(n)
{
    for (var i = 0; i < n; i++) {
        document.write((i + 1) + "<br/>");
    }
}
writeNumbers(20);

changeNumbers.addEventListener("click", function() {
    var options = changeNumbers.querySelectorAll("option");
    var count = options.length;
    if(typeof(count) === "undefined" || count < 2)
    {
        alert("yo");
    }
});

changeNumbers.addEventListener("change", function() {
    writeNumbers(changeNumbers.value);
    alert(changeNumbers.value);
});


