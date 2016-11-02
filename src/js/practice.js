var changeNumbers = document.getElementById("numberSelect");

var t1 = [{
    "id": 2,
    "name": "fesfff"
},
    {
        "id": 10,
        "name": "fefsdfsxf"
    },
    {
        "id": 22,
        "name": "fegwsdgf"
    },
    {
        "id": 33,
        "name": "fsdgsef"
    },
    {
        "id": 101,
        "name": "fefwf"
    }];
var t2 = [1,2,3,4,5,6,7,8,9,10];
var at = {};
var obj2 = {};
var obj3 = {};
var crazy = {};
t1.forEach(function (e) {
    at[e.id] = e;
});
var at2 = t1.map(function(e){
    obj2[e.id] = e;
    return obj2;
});
var rdm = t1.map(function(e){
    return obj3[e.id] = {id: e.id, name: Math.random()};;
});
t1.forEach(function (e) {
    at[e.id] = e;
});
function writeNumbers(n)
{
    for (var i = 0; i < n; i++) {
        document.write((i + 1) + "<br/>");
    }
}
writeNumbers(20);

function isEqual() {
    if(0 === new String("0")) {
        document.write("0 === new String(0):   true<br/>");
    }
    else {
        document.write("0 === new String(0):   false<br/>");
    }
    if(null == undefined) {
        document.write("null == undefined:   true<br/>");
    }
    else {
        document.write("null == undefined:   false<br/>");
    }
    if(null == false) {
        document.write("null == false:   true<br/>");
    }
    else {
        document.write("null == false:   false<br/>");
    }

    document.write("at[101]: " + JSON.stringify(at[101]));
    document.write("obj2[101]: " + JSON.stringify(obj2[101]));
    document.write("obj3[101]: " + JSON.stringify(obj3[101]));
}
isEqual();


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


