
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

canvas.addEventListener('click', function(event){
							squareClicked(this,event,board);
							// console.log(this);
						});

}

function createXndO(x,y,gamepiece){
	this.x = x;
	this.y = y;
	this.gamepiece = gamepiece;

}

function processClick(x,y,gamepiece){
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

} 
else if (x < verticletwo && y < horrizontalOne){
	x = locSmall
	 y = locMid  
}

else if (x > verticletwo && y < horrizontalOne){


} 


else if (x < verticleOne && y < horrizontalTwo){

}
x = 206
else if (x < verticletwo && y < horrizontalTwo){
	
}
else if (x > verticletwo && y < horrizontalTwo){

}

else if (x < verticleOne && y > horrizontalTwo) {

}
else if (x < horrizontalTwo && y > horrizontalTwo) {

}
else if (x > horrizontalTwo && y > horrizontalTwo) {

}

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

function squareClicked(place,event,board){
		var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;
	console.log('x'+ event.offsetX);
	console.log("y"+event.offsetY);


//add draw gamePiece function
//ADD CALL TO AI FUNCTION unbeatableAI();
}




