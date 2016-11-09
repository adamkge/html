var myList = document.getElementById('list');
$( document ).ready(function() {
    $.ajax({
        url: 'http://pokeapi.co/api/v2/pokemon/?limit=151',
        success: function (result) {
            var pokemons = [];
            for (var i = 0; i < result.results.length; i++) {
                pokemons.push(result.results[i].name);
            }
            for(var i = 0; i < pokemons.length; i++) {
                var opt = pokemons[i];
                var el = document.createElement("li");
                el.textContent = opt;
                el.value = opt;
                myList.appendChild(el);
            }
            console.log(pokemons[0]);
            //$('body').text(JSON.stringify(result));
        },
        async: true
    });
    alert("Done");
});
