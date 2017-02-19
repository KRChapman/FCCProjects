"use strict";
(function startGame(){

var board = [[null,null,null],[null,null,null],[null,null,null]];






var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
createBoard(ctx);
var playerSymbol;
var computerSymbol;
pickGamePiece();
//put in x o selector function







function addCanvasClick(player,computer){

	playerSymbol = player;

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
	function loadBoard(row,col,x,y,gameSymbol){
	var gamePiece = new createXndO(x,y,gameSymbol);
	board[row][col] = gamePiece;
	  drawGamePiece(gamePiece);
	console.log('r',board);
    }


}


function drawGamePiece(gamePiece){
// ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = 'green';
	console.log('dd'+gamePiece.x);
// 	ctx.beginPath();
// ctx.moveTo(gamePiece.x,gamePiece.y);
// ctx.lineTo(gamePiece.x+10, gamePiece.y+10);
// ctx.stroke();
    ctx.beginPath();
    ctx.fillRect(gamePiece.x, gamePiece.y, 2,10 );
    // ctx.fillRect(267, 10, 2,385);
}

function pickGamePiece(){
	var li = document.querySelectorAll('li');
		var ul = document.querySelector('ul');

	for (let i = 1; i < li.length; i++) {
		li[i].addEventListener('click', function(event){
										var chosenSymbol = this.textContent;
										var player;
										var computer;
				
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

	//maybe an object  '0' : 72

	var locMid = { "1": 206, "0": 72, "2": 340};//1

	// var numberofGamePieces = board[0].length + board[1].length + board[2].length;
	
 	// if ((numberofGamePieces < 2) || (computerPlaySymbol === 'O' && numberofGamePieces <= 3)){

 	



 	// }

 	 if (board[1][1] == null || board[0][2] == null ){
 	 	    var moveToMake = checkForWinOrBlock();
 	 	    console.log('gg'+moveToMake);
 	 		if (moveToMake != null ){
	 	 		  processClick(locMid[moveToMake[1]],locMid[moveToMake[0]],computerPlaySymbol);

	 	 	}
	 	 	else {
	 	 		firstTwoMoves();
	 	 	}
// || moveToMake.length != 0
 	 			
 	 }
 	 else{
 	 	// var moveToMake = [];
	 	 	var moveToMake = checkForWinOrBlock();
	 	 	console.log('bb'+moveToMake);
	 	 	if (moveToMake == null ){
	 	 		board[2][2] == null ?  processClick(locMid["2"],locMid["2"],computerPlaySymbol) : processClick(locMid["0"],locMid["0"],computerPlaySymbol);

	 	 	}

	 	 	else{
	 	 		processClick(locMid[moveToMake[1]],locMid[moveToMake[0]],computerPlaySymbol);
	 	 	}

 	 }




 	// var moveToMake = checkForWinOrBlock();
  //    processClick(moveToMake)





// Symbol

	// function firstMove(){
	// 	if(board[1][1] == null){

	// 		 processClick(locMid["1"],locMid["1"],computerPlaySymbol);
	// 	}
	// 	else{

	// 		 processClick(locSmall["0"],locLarge["2"],computerPlaySymbol);

	// 	}
	// }

	function firstTwoMoves(){
			 	board[1][1] == null ?  processClick(locMid["1"],locMid["1"],computerPlaySymbol) : processClick(locMid["2"],locMid["0"],computerPlaySymbol);

	}


	function checkForWinOrBlock(){
		var toBlockSqure;
		var TempBlockSquare = [];
		var WinSquare = [];
		var countComputer = 0;
		var countPlayer = 0;
		for (var i = 0; i < board.length; i++) {

			for (var j = 0; j < board[i].length; j++) {
				

				if (board[i][j] == null){
					let row = (i).toString();
					let col = (j).toString();
					WinSquare[0] = row;
					WinSquare[1] = col;

					if (countPlayer <= 2){
					    TempBlockSquare[0] = row;
						TempBlockSquare[1] = col;
						


					}
		

				}
// .gamepiece
					if(board[i][j] != null){
						if (board[i][j].gamepiece === computerPlaySymbol){

							countComputer++;
						}

						if  ( board[i][j].gamepiece === playerSymbol){
							countPlayer++;
						}
						

					  }


					if(countComputer >= 2 && board[i].indexOf(null) != -1){
						return WinSquare;
					}

			 
			};

						if(countPlayer >= 2 && board[i].indexOf(null) != -1){
					toBlockSqure === TempBlockSquare;
				    }

			
		 countComputer = 0;
		 // if (countPlayer == 2) {
		 	  countPlayer = 0;

		 // };
		
		 WinSquare.length = 0;

		
		};
		var nullcount = 0;
		var index = 0;
		for (let i = 0; i <= board.length; i++) {
			
			// for (let j = 0; j <= index; j++) {
		
		
				// if ((i > 2 ) && i+index <= 6 ){
				if (i >= 3 && index >= 2){
					break;
				}

				if (i == 3 ){
					i = 0;
					index++;

						if(countComputer >= 2 && nullcount == 1){
						return WinSquare;
					}

						if(countPlayer >= 2 && nullcount == 1){
					toBlockSqure = TempBlockSquare;
				    }
			
						 countComputer = 0;
						 // if (countPlayer == 2) {
						 	  countPlayer = 0;

						 // };
						
						 WinSquare.length = 0;

				}


				if (board[i][index] == null){
					let row = (i).toString();
					let col = (index).toString();
					WinSquare[0] = row;
					WinSquare[1] = col;

					if (countPlayer <= 2){
					    TempBlockSquare[0] = row;
						TempBlockSquare[1] = col;
						


					}
		

				}
// .gamepiece
					if(board[i][index] != null){
						if (board[i][index].gamepiece === computerPlaySymbol){

							countComputer++;
						}

						if  ( board[i][index].gamepiece === playerSymbol){
							countPlayer++;
						}
						

					  }

					  if (board[i][index] == null){
					  	nullcount++;
					  }


				


				// };
		

				// for (let j = 0; ij< board[j].length; j++) {
		};

		// if


	}
}

function squareClicked(place,event){

ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;
	// console.log('x'+ event.offsetX);
	// console.log("y"+event.offsetY);
	// console.log(board);

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
