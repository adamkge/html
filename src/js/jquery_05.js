/**
 * Created by 212585846 on 2016-11-04.
 */

// var div1 = document.getElementById("div1");
// var div2 = document.getElementById("div2");
// var div3 = document.getElementById("div3");


$('body').click(function () {
    $.ajax({
        url: '../../data.json',
        success: function (result) {
            $('#div1').text(JSON.stringify(result));
        },
        async: true
    });

    $.ajax({
        url: '../../data2.json',
        success: function (result) {
            $('#div2').text(JSON.stringify(result));
        },
        async: true
    });

    $.ajax({
        url: '../../data3.json',
        success: function (result) {
            $('#div3').text(JSON.stringify(result));
        },
        async: true
    });
    alert("Done");
});

$('#div4').click(function () {
    $.ajax({
        url: '../../data.json',
        success: function (result) {
            $('#div4').text(JSON.stringify(result));
            $.ajax({
                url: '../../data2.json',
                success: function (result) {
                    $('#div5').text(JSON.stringify(result));
                    $.ajax({
                        url: '../../data3.json',
                        success: function (result) {
                            $('#div6').text(JSON.stringify(result));
                        },
                        async: true
                    });
                },
                async: true
            });
        },
        async: true
    });
    alert("Done with waiting");
});

// $.get("../../data.json", function (data) {
//     $('#div1').text(JSON.stringify(data));
