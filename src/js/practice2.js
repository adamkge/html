/*var x = document.getElementById("blueDiv");
//x.addEventListener("onmouseover",changeColor);

x.onmouseover= function() {
    //var x = document.getElementById("blueDiv");
    x.style.background = 'red';
}

x.onmouseleave= function() {
    //var x = document.getElementById("blueDiv");
    x.style.background = 'blue';
}

x.onclick= function() {
    //var x = document.getElementById("blueDiv");
    x.style.background = 'yellow';
}*/

/*var y = document.getElementById("greenDiv");
var z = document.getElementById("yellowDiv");
var k = document.getElementById("redDiv");*/

/*
var l = document.body.childNodes;

*/
var l = document.querySelectorAll('div');
/*document.body.onclick= function() {
    console.log(l);
    l[1].style.background = 'red';
    l[3].style.background = 'yellow';
    l[5].style.background = 'white';
    l[7].style.background = 'green';
}*/

document.body.onclick= function() {
    l.forEach(function(e) {
        e.style.background = "green";
    });
}



