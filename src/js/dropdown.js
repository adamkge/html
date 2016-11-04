var select = document.getElementById('firstSelect');
var select2 = document.getElementById('secondSelect');
var myList = document.getElementById('list');
$(function () {
    $.ajax({
        url: 'json/color.json',
        success: function (result) {
            for(var i = 0; i < result.colors.length; i++) {
                var opt = result.colors[i].color;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }
        },
        async: true
    });
});

$('#firstSelect').on('change', function() {
    $('#secondSelect')
        .find('option')
        .remove()
        .end()
    ;
    var selected = $('option:selected', this);
    var value = this.value;
    switch(value) {
        case "Red":
            fillSecond("red");
            break;
        case "Blue":
            fillSecond("blue");
            break;
        case "Pink":
            fillSecond("pink");
            break;
        default:
            consol.log("fu");
    }

});

function fillSecond(color) {
    $.ajax({
        url: 'json/'+color+'.json',
        success: function (result) {
            for(var i = 0; i < result.animals.length; i++) {
                var opt = result.animals[i].animal;
                var el = document.createElement("option");
                el.textContent = opt;
                el.value = opt;
                select2.appendChild(el);
            }

        },
        async: true
    });
}
$('#secondSelect').on('change', function() {
    $('#list')
        .find('option')
        .remove()
        .end()
    ;
    var selected = $('option:selected', this);
    var value = this.value;
    switch(value) {
        case "RedCat":
            fillThird("redcat");
            break;
        case "RedDog":
            fillThird("reddog");
            break;
        case "RedHorse":
            fillThird("redhorse");
            break;
        case "BlueDog":
            fillThird("bluedog");
            break;
        case "BlueCat":
            fillThird("bluecat");
            break;
        case "BlueHorse":
            fillThird("bluehorse");
            break;
        case "PinkDog":
            fillThird("pinkdog");
            break;
        case "PinkCat":
            fillThird("pinkcat");
            break;
        case "PinkHorse":
            fillThird("pinkhorse");
            break;
        default:
            consol.log("fu");
    }

});

function fillThird(stuff) {
    $('#list')
        .find('li')
        .remove()
        .end()
    ;
    $.ajax({
        url: 'json/'+stuff+'.json',
        success: function (result) {
            for(var i = 0; i < result.animals.length; i++) {
                var opt = result.animals[i].animal;
                var el = document.createElement("li");
                el.textContent = opt;
                el.value = opt;
                myList.appendChild(el);
            }

        },
        async: true
    });
}
