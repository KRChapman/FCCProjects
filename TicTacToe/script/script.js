
(function startGame(){
    // var 
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
canvasClick(canvas);


})(this);

function canvasClick(canvas){

canvas.addEventListener('click', function(event){
							squareClicked(this,event);
						});

}

function createXndO(x,y,gamepiece){
	this.x = x;
	this.y = y;
	this.gamepiece = gamepiece;

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
	console.log(ctx);
    // ctx.fillRect(event.offsetX,267 ,385 ,2);

//add draw gamePiece function
//ADD CALL TO AI FUNCTION unbeatableAI();
}

// function create

// window.onclick = function(){
// alert('hi');

// }


