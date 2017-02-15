"use strict";
(function startGame(){

var board = [[],[],[]];






var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
createBoard(ctx);
var playerSymbol;
var computerSymbol;
pickGamePiece();
//put in x o selector function







function addCanvasClick(player,computer){

	playerSymbol = playerSymbol;
	computerSymbol = computer;

canvas.addEventListener('click', function(event){
							squareClicked(this,event);
					
						

						});

}

function createXndO(x,y,gameSymbol){
	this.x = x;
	this.y = y;
	this.gamepiece = gameSymbol;

}

function processClick(x,y,playerSymbol){
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

	
	loadBoard(row,col,x,y,playerSymbol);
	// top = 'top';
	// piece = board[+top+];
	// 	console.log(piece);


	// 
	// console.log(board);
	// console.log("y"+y);
    
	
		// board.push([gamePiece]);
	// board[0][0]p
	
  
}

function loadBoard(row,col,x,y,gameSymbol){
	var gamePiece = new createXndO(x,y,gameSymbol);
	board[row][col] = gamePiece;

	console.log('r',board);
}

function drawGamePiece(){

}

function pickGamePiece(){
	var li = document.querySelectorAll('li');
		var ul = document.querySelector('ul');

	for (let i = 1; i < li.length; i++) {
		li[i].addEventListener('click', function(event){
										var chosenSymbol = this.textContent;
										var player;
										var computer;
										console.log(event);	
										if (chosenSymbol === 'X'){
											ul.innerHTML = '<li></li>';
											player = "X";
											computer = 'O';
											addCanvasClick(player,computer);

											// ul.classList.add("hide_li");
										}
										else{
											player = 'O';
											computer = 'X';

											ul.innerHTML = '<li></li>';
											unbeatableAI(computer);
											addCanvasClick(player,computer);

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

	var locSmall = 72;
	var locMid = 206;
	var locLarge = 340;
	var numberofGamePieces = board[0].length + board[1].length + board[2].length;
	 console.log(numberofGamePieces);
 	if ((numberofGamePieces < 2) || (computerPlaySymbol === 'O' && numberofGamePieces <= 3)){

 		firstMove();



 	}

// Symbol

	function firstMove(){
		if(board[1][1] == null){

			 loadBoard(1,1,206,206,computerPlaySymbol);
		}
		else{

			 loadBoard(0,2,x,y,computerPlaySymbol);

		}
	}

	function secondMove(){


	}
}

function squareClicked(place,event){

ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;
	console.log('x'+ event.offsetX);
	console.log("y"+event.offsetY);
	console.log(board);

	processClick(event.offsetX,event.offsetY,playerSymbol);
	unbeatableAI(computerSymbol);
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
