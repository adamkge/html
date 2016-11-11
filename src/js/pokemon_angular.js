var app = angular.module("pokeModule", []);
app.controller("myCtrl", function ($scope, $http) {
    var pokemons = [];
    $scope.orderBy = 'name';
    $scope.sortingOrder = false;

    $http.get("//pokeapi.co/api/v2/pokemon/?limit=151", {jsonpCallbackParam: 'callback'})
        .success(function (data) {
            for (var i = 0; i < data.results.length; i++) {
                pokemons.push({
                    name: data.results[i].name.charAt(0).toUpperCase() + data.results[i].name.slice(1),
                    url: "//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (i + 1) + ".png",
                    id: (i + 1)
                });
            }
            console.log(pokemons);
            //console.log(data.found);
        });
    $scope.pokemons = pokemons;

    $scope.names = ["Id", "Name"];

    $scope.go = function(item)
    {
        $http.get("//pokeapi.co/api/v2/pokemon/" + item.id, {jsonpCallbackParam: 'callback'})
            .success(function (data) {
                console.log(data);
            });
    };

});

