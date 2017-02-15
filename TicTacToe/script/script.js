
(function startGame(){

var board = {
	top: [],
	middleHorizontal: [],
	bottom: [],

	left: [],
	middleVerticle: [],
	right: [],

	leftDiagnol: [],
	rightDiagnol: []


}




var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
createBoard(ctx);
var gamepiece = 'o';
canvasClick();


windowClick(gamepiece);





function canvasClick(){
	console.log('1'+gamepiece);

canvas.addEventListener('click', function(event){
							squareClicked(this,event);
							console.log(gamepiece);
								gamepiece = 'x';
console.log('2'+gamepiece);
						});

}
function windowClick(gamepiece){
		console.log('3'+gamepiece);
window.addEventListener('keydown', function(event){
							// squareClicked(this,event);
							console.log(gamepiece);
						});

}
function createXndO(x,y,gamepiece){
	this.x = x;
	this.y = y;
	this.gamepiece = gamepiece;

}

function processClick(x,y,board,gamepiece){
	var	verticleOne = 133;
	var verticletwo = 266;
	var horrizontalOne = 133;
	var horrizontalTwo = 266;
	// var GamepieceX
	// var GamepieceY

	var locSmall = 72;
	var locMid = 206;
	var locLarge = 340;



	if (x < verticleOne && y < horrizontalOne){
		x = locSmall;
		y = locSmall;

	} 
	else if (x < verticletwo && y < horrizontalOne){
		x = locMid;
		 y =  locSmall;
	}

	else if (x > verticletwo && y < horrizontalOne){
		x = locLarge;
		y = locSmall;

	} 

//mid
	else if (x < verticleOne && y < horrizontalTwo){
		x =locSmall;
		y = locMid;
	}

	else if (x < verticletwo && y < horrizontalTwo){
		x = locMid;
		y = locMid;

	}
	else if (x > verticletwo && y < horrizontalTwo){
		x = locLarge;
		y = locMid;

	}


	//bottom
	else if (x < verticleOne && y > horrizontalTwo) {
		x = locSmall;
		y = locLarge;

	}
	else if (x < horrizontalTwo && y > horrizontalTwo) {
		x = locMid;
		y = locLarge;

	}
	else if (x > horrizontalTwo && y > horrizontalTwo) {
		x = locLarge;
		y = locLarge;

	}

	console.log('x'+x);
	console.log("y"+y);

}

function drawGamePiece(){

}

function createBoard(ctx){
ctx.fillStyle = 'black';

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = 'white';
	

    ctx.beginPath();
    ctx.fillRect(134, 10, 2, 385);
    ctx.fillRect(267, 10, 2,385);
    ctx.fillRect(10, 134,385 , 2);
    ctx.fillRect(10,267 ,385 ,2);


}

function unbeatableAI() {


}

function squareClicked(place,event,board,gamepiece){
		var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;
	console.log('x'+ event.offsetX);
	console.log("y"+event.offsetY);
// processClick( event.offsetX,event.offsetY,gamepiece)

//add draw gamePiece function
//ADD CALL TO AI FUNCTION unbeatableAI();
}



















})(this);




