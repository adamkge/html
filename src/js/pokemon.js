var myTable = document.getElementById('table');
var rowTemplate = "<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>";
$(document).ready(function () {
    $.ajax({
        url: '//pokeapi.co/api/v2/pokemon/?limit=151',
        success: function (result) {
            var pokemons = [];
            for (var i = 0; i < result.results.length; i++) {
                pokemons.push({
                    name: result.results[i].name.charAt(0).toUpperCase() + result.results[i].name.slice(1),
                    url: "//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) + ".png",
                    id: (i + 1)
                });
            }

            // myTable.innerHTML = "";
            while (myTable.firstChild)
            {
                myTable.removeChild(myTable.firstChild);
            }
            for (var i = 0; i < pokemons.length; i++) {

                generateTable(pokemons[i]);
            }
        },
        async: true
    });

    $('#select').on('change', function () {
        var rows = $('#table > tbody > tr').get();

        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        console.log(optionSelected);
        console.log(valueSelected);

        var f;
        if (valueSelected === "id") {
            console.log("if: id");
            f = idsort;
        }
        else {
            console.log("if: name");
            f = namesort
        }

        rows.sort(f);
        console.log(rows);
        while (myTable.firstChild)
        {
            myTable.removeChild(myTable.firstChild);
        }
        console.log("after delete");
        console.log(rows);
        for (var i = 0; i < rows.length; i++) {
            $('#table').append(rows[i]);
        }
    });
});


function idsort(a, b) // num
{
    console.log("idsort called")
    var anum = parseInt($(a).find(".idtd").text(), 10);
    var bnum = parseInt($(b).find(".idtd").text(), 10);
    return anum - bnum;
}

function namesort(a, b) // string
{
    console.log("namesort called")
    var keyA = $(a).find(".nametd").text();
    var keyB = $(b).find(".nametd").text();
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
}
function generateTable(pokemon) {

    var tbody = document.createElement('tbody');

    var td1 = document.createElement('td');
    var td1 = document.createElement('td');
    var td1 = document.createElement('td');
    var tr = createTr(pokemon.id, pokemon.name, pokemon.url);
    var text1 = document.createTextNode(pokemon.id);
    var text2 = document.createTextNode(pokemon.name);
    var img = document.createElement("img");
    img.src = pokemon.url;
    td1.className = "idtd";
    td1.appendChild(text1);
    tr.appendChild(td1);
    td2.className = "nametd";
    td2.appendChild(text2);
    tr.appendChild(td2);
    td3.className = "imagetd";
    td3.appendChild(img);
    tr.appendChild(td3);
    tbody.appendChild(tr);
    myTable.appendChild(tbody);
}
function createTr(td1, td2, td3) {
    var tr = document.createElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    return tr;
}
function createTd(nodeType, className) {
    var td = document.createElement('td');
    td.className = className;
    return td;
}


var tr = createtr(createtd(pokemonname) , createtd(id), createtd(img))
