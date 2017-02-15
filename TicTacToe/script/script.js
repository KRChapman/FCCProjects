"use strict";
(function startGame(){

var board = [[],[],[]];






var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
createBoard(ctx);
var playerPlaySymbol = 'o';
var computerPlaySymbol = 'x';
pickGamePiece();
//put in x o selector function







function addCanvasClick(playSymbol){
	

canvas.addEventListener('click', function(event){
							squareClicked(this,event,playSymbol);
					
						

						});

}

function createXndO(x,y,playSymbol){
	this.x = x;
	this.y = y;
	this.gamepiece = playSymbol;

}

function processClick(x,y,playSymbol){
	var	verticleOne = 133;
	var verticletwo = 266;
	var horrizontalOne = 133;
	var horrizontalTwo = 266;
	// var GamepieceX
	// var GamepieceY

	var locSmall = 72;
	var locMid = 206;
	var locLarge = 340;
    
    var row;
    var col;


	if (x < verticleOne && y < horrizontalOne){
		x = locSmall;
		y = locSmall;
		row = 0;
		col = 0;

	} 
	else if (x < verticletwo && y < horrizontalOne){
		x = locMid;
		 y =  locSmall;
		row = 0;
		col = 1;
	}

	else if (x > verticletwo && y < horrizontalOne){
		x = locLarge;
		y = locSmall;
		row = 0;
		col = 2;

	} 

//mid
	else if (x < verticleOne && y < horrizontalTwo){
		x =locSmall;
		y = locMid;
		row = 1;
		col = 0;
	}

	else if (x < verticletwo && y < horrizontalTwo){
		x = locMid;
		y = locMid;
		row = 1;
		col = 1;
	}
	else if (x > verticletwo && y < horrizontalTwo){
		x = locLarge;
		y = locMid;
		row = 1;
		col = 2;
	}


	//bottom
	else if (x < verticleOne && y > horrizontalTwo) {
		x = locSmall;
		y = locLarge;
	    row = 2;
		col = 0;
	}
	else if (x < verticletwo && y > horrizontalTwo) {
		x = locMid;
		y = locLarge;
	    row = 2;
		col = 1;
	}
	else if (x > verticletwo && y > horrizontalTwo) {
		x = locLarge;
		y = locLarge;
	    row = 2;
		col = 2;
	}

	var gamePiece = new createXndO(x,y,playSymbol);
	loadBoard(row,col,gamePiece);
	// top = 'top';
	// piece = board[+top+];
	// 	console.log(piece);


	// 
	// console.log(board);
	// console.log("y"+y);
    
	
		// board.push([gamePiece]);
	// board[0][0]p
	
    function loadBoard(row,col,gamePiece){
    	board[row][col] = gamePiece;
	
    	console.log('r',board);
    }
}



function drawGamePiece(){

}

function pickGamePiece(){
	var li = document.querySelectorAll('li');
		var ul = document.querySelector('ul');

	for (let i = 1; i < li.length; i++) {
		li[i].addEventListener('click', function(event){
										var playSymbol = this.textContent;
										
										console.log(event);	
										if (playSymbol === 'X'){
											ul.innerHTML = '<li></li>';
											addCanvasClick(playSymbol);

											// ul.classList.add("hide_li");
										}
										else{

											unbeatableAI('X');


										}			
								});

		// canvas.addEventListener('mousedown', drawStatus.bind(null,true));
	};

	

	// return playSymbol;
}

function createBoard(){
ctx.fillStyle = 'black';

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = 'white';
	

    ctx.beginPath();
    ctx.fillRect(134, 10, 2, 385);
    ctx.fillRect(267, 10, 2,385);
    ctx.fillRect(10, 134,385 , 2);
    ctx.fillRect(10,267 ,385 ,2);


}

function unbeatableAI(computerPlaySymbol) {

Symbol
}

function squareClicked(place,event,playSymbol){

ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;
	console.log('x'+ event.offsetX);
	console.log("y"+event.offsetY);
	console.log(board);

	processClick(event.offsetX,event.offsetY,playSymbol);
// processClick( event.offsetX,event.offsetY,gamepiece)

//add draw gamePiece function
//ADD CALL TO AI FUNCTION unbeatableAI();
}














})(this);



// function tester(b){
// 	console.clear();
// 	console.log(b);
// 	b = 3;
// 	console.log('4 '+b);

// }
