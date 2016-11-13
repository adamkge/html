app.directive('onKeyA', ['$parse', function($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('keydown keypress', function(event) {
                  console.log('hi');
                    if (event.which === 65) {
                        var attrValue = $parse(attrs.onKeyA);
                        (typeof attrValue === 'function') ? attrValue(scope) : angular.noop();
                        event.preventDefault();
                    }
                });
                scope.$on('$destroy', function() {
                    element.unbind('keydown keypress')
                })
            }
        };
}]);
app.directive('ashPosition', function() {
        return function(scope, element, attrs) {
            element.addClass('ball');
            var ash = scope[attrs.ashPosition];
            //element.css('backgroundColor', ash.color);

            scope.$watch(function() {
                if(scope[attrs.ashPosition].imageSwitchPace > 0) {
                    scope[attrs.ashPosition].imageSwitchPace--;
                }
                else {
                    scope[attrs.ashPosition].imageSwitchPace = 7;
                    var bgImage = "";
                    if(scope[attrs.ashPosition].index < 4) {
                        scope[attrs.ashPosition].index +=1;
                    }
                    else {
                      scope[attrs.ashPosition].index = 0;
                    }
                    //console.log(scope[attrs.ashPosition].index)
                    if(scope[attrs.ashPosition].dir === 'left') {
                        bgImage=scope.leftMovement[scope[attrs.ashPosition].index];
                    }
                    else {
                      bgImage=scope.rightMovement[scope[attrs.ashPosition].index];
                    }
                    element.css({
                      backgroundImage: 'url('+bgImage+')'
                    });
                }
                element.css({
                    left: (ash.x + 5) + 'px',
                    top: (ash.y + 5) + 'px'
                });

            });
        };
    });

app.factory('animFrame', function($rootScope) {
      var animFrame = 
              window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
        return function(fn) {
          animFrame(function(){
            $rootScope.$apply(fn);
          });
        }
    });

app.directive('animation', function() {
return {
controller: function($scope, animFrame, $rootScope) {
        var width = window.innerWidth-50;
        var height = window.innerHeight-50;
        var speed = .5;
        var lastTime = new Date().getTime();
        
        $scope.sprites = [];
        $scope.leftMovement = [];
        $scope.rightMovement = [];

        $scope.leftMovement.push('src/img/ash1.png','src/img/ash2.png','src/img/ash3.png','src/img/ash4.png','src/img/ash5.png');
        $scope.rightMovement.push('src/img/ash1b.png','src/img/ash2b.png','src/img/ash3b.png','src/img/ash4b.png','src/img/ash5b.png');
        
        $scope.changeCount = function(count) {
          console.log("change count");
            while(count>0) {
                $scope.sprites.push({
                    name: 'ash',
                    x: width/2 * Math.random()+100,
                    y: height/2 * Math.random()+100,
                    velX: 0.2,//speed * Math.random()/2,
                    velY: 0.1,//speed * Math.random()/3,
                    dir: 'right',
                    index: 1,
                    imageSwitchPace: 10
                });
                count--;
            }
            while(count<0) {
                $scope.sprites.pop();
                count++;
            }
        }
        
            
        $scope.tick =function($event){
          //console.log('tick')
          var now = new Date().getTime(),
              delay = now - lastTime,
              sprites = $scope.sprites;
              ashes = $scope.ashes;
        
          for(var i=0; i<sprites.length; i++) {
              var b = sprites[i];
              b.x += delay * b.velX;
              b.y += delay * b.velY;
              if (b.x < 0) { b.x *= -1; b.velX *= -1; b.dir = 'right';}
              if (b.y < 0) { b.y *= -1; b.velY *= -1; }
              if (b.x > width) { b.x = 2*width - b.x; b.velX *= -1; b.dir = 'left';}
              if (b.y > height) { b.y = 2*height - b.y; b.velY *= -1; }
          }
          lastTime = now;
          animFrame($scope.tick);
        }
        
        $scope.changeCount(1);
        $scope.tick();
  }
 };
});
