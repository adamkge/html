var myList = document.getElementById('list');
$( document ).ready(function() {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
        success: function (result) {
            var pokemons = [];
            var images = [];
            for (var i = 0; i < result.results.length; i++) {
                pokemons.push(result.results[i].name);
                images.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(i+1)+".png");
            }
            for(var i = 0; i < pokemons.length; i++) {
                var opt = pokemons[i];
                var el = document.createElement("li");
                el.textContent = opt;
                el.value = opt;
                myList.appendChild(el);

                var img = document.createElement("img");
                img.src = images[i];
                myList.appendChild(img);
            }
            console.log(pokemons[0]);
            //$('body').text(JSON.stringify(result));
        },
        async: true
    });
});
