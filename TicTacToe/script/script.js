
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
canvasClick(canvas,board);


})(this);

function canvasClick(canvas,board){

canvas.addEventListener('click', function(event,board){
							squareClicked(this,event);
							console.log(board);
						});

}

function createXndO(x,y,gamepiece){
	this.x = x;
	this.y = y;
	this.gamepiece = gamepiece;

}

function processClick(){

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

function squareClicked(place,event){
		var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;
	console.log(event.offsetX);


//add draw gamePiece function
//ADD CALL TO AI FUNCTION unbeatableAI();
}




