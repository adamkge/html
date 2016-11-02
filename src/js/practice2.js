var x = document.getElementById("blueDiv");
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
}
