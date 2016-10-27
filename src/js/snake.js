var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 4;
var dy = -4;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 12;
var brickColumnCount = 16;
var brickWidth = 60;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var isMenu = true;
var isGameOver = false;
var basicLevel = [];
var currentLevel = "level1";

var level1 = JSON.parse(level1x);
for (var i = 0; i < level1.bricks.length; i++) {
    basicLevel[i] = [];
    for (var j = 0; j < level1.bricks[i].brickRow.length; j++) {
        basicLevel[i][j]= {x: level1.bricks[i].brickRow[j].x, y: level1.bricks[i].brickRow[j].y, status: level1.bricks[i].brickRow[j].status, color: level1.bricks[i].brickRow[j].color };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("click", mouseClickHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
    if(isMenu) {
        if(getMousePos(canvas, e).x > canvas.width/2-160 && getMousePos(canvas, e).x < canvas.width/2+160 && getMousePos(canvas, e).y > 50 && getMousePos(canvas, e).y < 160) {
            drawMenu2();
        }
        else {
            drawMenu();
        }
    }
}
function mouseClickHandler(e) {
    if(isMenu) {
        if(getMousePos(canvas, e).x > canvas.width/2-160 && getMousePos(canvas, e).x < canvas.width/2+160 && getMousePos(canvas, e).y > 50 && getMousePos(canvas, e).y < 160) {
            dx = 4;
            dy = -4;
            rightPressed = false;
            leftPressed = false;
            score = 0;
            lives = 3;
            draw();
            isMenu = false;
            isGameOver = false;
        }
    }
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = basicLevel[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN, CONGRATS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
function drawMenu() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var buttonGradient = ctx.createLinearGradient(0, 50, 0, 160);
    buttonGradient.addColorStop(0, 'blue');
    buttonGradient.addColorStop(1, 'white');
    ctx.fillStyle = buttonGradient;
    ctx.fillRect(canvas.width/2-160, 50, 320, 100);
    ctx.fillStyle    = 'white';
    ctx.textBaseline = 'top';
    ctx.font         = 'bold 50px comic-sans';
    ctx.fillText('New Game', canvas.width/2-120, 70);
    ctx.closePath();
    if(isGameOver) {
        ctx.beginPath();
        ctx.font = "40px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Game Over", canvas.width/2-100, 280);
        ctx.closePath();
    }
}
function drawMenu2() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    var myGradient = ctx.createLinearGradient(0, 50, 0, 160);
    myGradient.addColorStop(0, 'lightgray');
    myGradient.addColorStop(0.5, 'blue');
    myGradient.addColorStop(1, 'white');
    ctx.fillStyle = myGradient;
    ctx.fillRect(canvas.width/2-160, 50, 320, 110);
    ctx.fillStyle    = 'white';
    ctx.textBaseline = 'top';
    ctx.font         = 'bold 50px comic-sans';
    ctx.fillText('New Game', canvas.width/2-120, 70);
    ctx.closePath();
    if(isGameOver) {
        ctx.beginPath();
        ctx.font = "40px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Game Over", canvas.width/2-100, 280);
        ctx.closePath();
    }
}
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            if(basicLevel[c][r].status == 1) {
                var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
                var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
                basicLevel[c][r].x = brickX;
                basicLevel[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                if(basicLevel[c][r].color == 'grdRed') {
                    var grdNow = ctx.createRadialGradient(brickX,brickY,5,brickX+15,brickY+10,100);
                    grdNow.addColorStop(0,"red");
                    grdNow.addColorStop(1,"white");
                }
                if(basicLevel[c][r].color == 'grdBlue') {
                    var grdNow = ctx.createRadialGradient(brickX,brickY,5,brickX+15,brickY+10,100);
                    grdNow.addColorStop(0,"blue");
                    grdNow.addColorStop(1,"white");
                }
                if(basicLevel[c][r].color == 'grdYellow') {
                    var grdNow = ctx.createRadialGradient(brickX,brickY,5,brickX+15,brickY+10,100);
                    grdNow.addColorStop(0,"yellow");
                    grdNow.addColorStop(1,"white");
                }
                if(basicLevel[c][r].color == 'grdGreen') {
                    var grdNow = ctx.createRadialGradient(brickX,brickY,5,brickX+15,brickY+10,100);
                    grdNow.addColorStop(0,"green");
                    grdNow.addColorStop(1,"white");
                }
                ctx.fillStyle = grdNow;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function drawScore() {
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
    ctx.closePath();
}
function drawLives() {
    ctx.beginPath();
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                isGameOver = true;
                isMenu = true;
                drawMenu();
                return;

            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 4;
                dy = -4;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}
drawMenu();
