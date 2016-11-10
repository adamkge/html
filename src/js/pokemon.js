var myTable = document.getElementById('table');
var rowTemplate = "<tr><td>{0}</td><td>{1}</td><td>{2}</td></tr>";
$( document ).ready(function() {
    $.ajax({
        url: '//pokeapi.co/api/v2/pokemon/?limit=151',
        success: function (result) {
            var pokemons = [];
            for (var i = 0; i < result.results.length; i++) {
                pokemons.push({name : result.results[i].name.charAt(0).toUpperCase() + result.results[i].name.slice(1),
                    url: "//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png",
                    id : (i+1)});
                console.log(pokemons[i]);
            }
            for(var i = 0; i < pokemons.length; i++) {
/*                var opt = pokemons[i].name;
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                var id = document.createElement("text");
                id.textContent = pokemons[i].id;
                id.value = pokemons[i].id;
                el.appendChild(id);
                var img = document.createElement("img");
                img.src = pokemons[i].url;
                el.appendChild(img);
                myList.appendChild(el);*/

                $("#table").append(
                    rowTemplate.format("pokemons[i].id", "pokemons[i].name", "<img src=" +pokemons[i].url + "/>")
                );
            }
        },
        async: true
    });

    $('#select').on('change', function() {
        var items = $('#list li').get();
        items.sort(function(a,b){
            var keyA = $(a).text();
            var keyB = $(b).text();

            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });
        var ul = $('#list');
        $.each(items, function(i, li){
            ul.append(li);
        });
    });
});


