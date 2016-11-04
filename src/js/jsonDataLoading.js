/**
 * Created by 212585846 on 2016-11-04.
 */

$(function () {
        loadJson("json10000");
        // loadJson("json100");
        // loadJson("json1000");
        // loadJson("json10000");
    }
);


function loadJson(filename) {
    $.ajax({
        url: '../../json/' + filename + '.json',
        success: function (result) {
            $('#example').dataTable({
                data : result,
                columns: [
                    { data: "index"},
                    { data: "name" },
                    { data: "age" },
                    { data: "gender" },
                    { data: "eyeColor" },
                    { data: "about" }
                    ],
                bPaginate: false
            })
        },
        async: true
    });
}


// function loadJson(filename) {
//     $.ajax({
//         url: '../../json/' + filename + '.json',
//         success: function (result) {
//             $('#dynamictable').append('<table style="border:1px solid black"></table>');
//             var table = $('#dynamictable').children();
//             for (var i = 0; i < result.length; i++) {
//                 var obj = result[i];
//                 table.append("<tr>" +
//                     "<td style=\"border:1px solid black\">" + obj.index + "</td>" +
//                     "<td style=\"border:1px solid black\">" + obj.name + "</td>" +
//                     "<td style=\"border:1px solid black\">" + obj.age + "</td>" +
//                     "<td style=\"border:1px solid black\">" + obj.eyeColor + "</td>" +
//                     "<td style=\"border:1px solid black\">" + obj.gender + "</td>" +
//                     "<td style=\"border:1px solid black\">" + obj.about + "</td>" +
//                     "</tr>");
//             }
//         },
//         async: true
//     });
// }
