"use strict";
(function startGame(){

var board = [];
var Realboard = {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: ''
    };

  var listener = {};

 var canvasAdd = false;





var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
createBoard(ctx);
var playerSymbol;
var computerSymbol;
pickGamePiece();
//put in x o selector function

var winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
  ]







function addCanvasClick(player,computer){

	playerSymbol = player;

	computerSymbol = computer;

  if(!canvasAdd){

canvas.addEventListener('click', function(event){

              processClick(event.offsetX,event.offsetY,playerSymbol);
							squareClicked(this,event);




						});

  canvasAdd = true;
}

}

function createXndO(x,y,gameSymbol,pos){
	this.x = x;
	this.y = y;
	this.gamepiece = gameSymbol;
  this.pos = pos;

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
  var pos;

    var row;
    var col;


	if (x < verticleOne && y < horrizontalOne){
		x = locSmall;
		y = locSmall;
		row = 0;
		col = 0;
    pos = 1;

	}
	else if (x < verticletwo && y < horrizontalOne){
		x = locMid;
		 y =  locSmall;
		row = 0;
		col = 1;
    pos = 2;
	}

	else if (x > verticletwo && y < horrizontalOne){
		x = locLarge;
		y = locSmall;
		row = 0;
		col = 2;
    pos = 3;

	}

//mid
	else if (x < verticleOne && y < horrizontalTwo){
		x =locSmall;
		y = locMid;
		row = 1;
		col = 0;
    pos = 4;
	}

	else if (x < verticletwo && y < horrizontalTwo){
		x = locMid;
		y = locMid;
		row = 1;
		col = 1;
    pos = 5;
	}
	else if (x > verticletwo && y < horrizontalTwo){
		x = locLarge;
		y = locMid;
		row = 1;
		col = 2;
    pos = 6;
	}


	//bottom
	else if (x < verticleOne && y > horrizontalTwo) {
		x = locSmall;
		y = locLarge;
	    row = 2;
		col = 0;
    pos = 7
	}
	else if (x < verticletwo && y > horrizontalTwo) {
		x = locMid;
		y = locLarge;
	    row = 2;
		col = 1;
    pos = 8
	}
	else if (x > verticletwo && y > horrizontalTwo) {
		x = locLarge;
		y = locLarge;
	    row = 2;
		col = 2;
    pos = 9;
	}


	loadBoard(x,y,playerSymbol,pos);




}

function loadBoard(x,y,gameSymbol,pos){

  var gamePiece = new createXndO(x,y,gameSymbol,pos);
  // board[row][col] = gamePiece;
  board.push(gamePiece);

  Realboard[pos] = gameSymbol;

    console.log("dsd",board);


    var win = checkWin(Realboard,gameSymbol);

    drawGamePiece(gamePiece,win);

    console.log('llllloooooaaadd', win);



  }

  function gameDone(){
    //board = [];
    board.length = 0;

    for (var variable in Realboard) {
      // if (Realboard.hasOwnProperty(variable)) {
        Realboard[variable] = '';

      // }
    }
    console.log('board',board);

    var ul = document.querySelector('ul');
    ul.innerHTML = "<li>Choose:</li><li>X</li><li>O</li>"
    createBoard();
    pickGamePiece();


  }



function drawGamePiece(gPiece,win){

// ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.font="40px Helvetica";
//

	// console.log('dd'+gPiece.x);



  ctx.fillText(gPiece.gamepiece,gPiece.x-10,gPiece.y+10);
    //checkWin/////////////////////////////////////////////////////////
    //var win = checkWin(board,gPiece.gamepiece);

    //console.log('hhhplayer',win);
    // draw line for win
    if (win[0]){
      console.log('win1nnn',win[1]);

    var arObjects = win[1].map(function(current, i, ar){
      console.clear;
      console.log('ccccccccccc',current);
      console.log('iiiii', i);
        console.log('arararar', ar);

        for (var i = 0; i < board.length; i++) {
          if (Realboard[current] === board[i].gamepiece && board[i].pos === current){
            console.clear;
            console.log('ccccccccccc'+current);
            console.log('iiiii', i);
              console.log('arararar', ar);


           return board[i];

          }

        }




      });

       console.log("arObjects" , arObjects);
       ctx.strokeStyle = 'green';

      console.log('j',win);
      ctx.beginPath();
      ctx.moveTo(arObjects[0].x,arObjects[0].y);
      ctx.lineTo(arObjects[2].x,arObjects[2].y);
      ctx.stroke();

    }







    //
    //   ctx.beginPath();
    // ctx.moveTo(gPiece.x,gPiece.y);
    // ctx.lineTo(gPiece.x+300, gPiece.y+300);
    // ctx.stroke();

      // ctx.beginPath();
      // ctx.moveTo(10,10);
      // ctx.lineTo(206,206);
      // ctx.stroke();

    //  ctx.fillStyle = 'white';


      var checks = setTimeout(function(){
       gameDone();

      }, 5000);






  //  }



  //GameDone

  //RESET



}

function pickGamePiece(){
	var li = document.querySelectorAll('li');
		var ul = document.querySelector('ul');

    var dothing = function(){
        var chosenSymbol = this.textContent;

        console.log(this);
        // var player;
        // var computer;

        if (chosenSymbol === 'X'){
          ul.innerHTML = '<li></li>';
          playerSymbol = "X";
          computerSymbol = 'O';
          addCanvasClick(playerSymbol,computerSymbol);

          // ul.classList.add("hide_li");
        }
        else{
          playerSymbol = 'O';
          computerSymbol = 'X';

          ul.innerHTML = '<li></li>';
          easyAi(computerSymbol);
          addCanvasClick(playerSymbol,computerSymbol);

        }
      }

        listener['start'] = dothing;
          console.log( listener['start']);

	for (let i = 1; i < li.length; i++) {
		li[i].addEventListener('click', listener['start']);
    console.log( listener['start']);




	};





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

function easyAi(computerPlaySymbol) {


  generateRandomSpot();

  function generateRandomSpot(){
    var indexOne,
        indexTwo;
    var locSmall = 72;
    var locMid = 206;
    var locLarge = 340;
    var t = 'top',
        mH = 'midH',
        b = 'bot',
        l = 'left',
        mV = 'midV',
        r = 'right',
        lD= 'leftD',
        rD = 'rightD';
    // y x
    var obj = {'1': [72,72], '2': [72,206], '3': [72,340], '4': [206, 72], '5': [206,206], '6': [206,340], '7': [340,72],
               '8': [340,206], '9': [340,340]}

    var position = {'1': [t,l], '2': [t,mV], '3': [t,rD,r], '4': [l, mH], '5': [mH,mV,lD,rD], '6': [mH,r], '7': [l,rD,b],
               '8': [mH,b], '9': [r,lD,b]}

    var done; //= GameDone();


    //
    // console.log(done);


          do{
          indexOne = Math.floor(Math.random() * 9 + 1);
          // indexTwo = Math.floor(Math.random() * 3);


          // console.log(indexOne);
        } while(board.some(findPosition) !== false && board.length < 9);

        function findPosition(obj){
          // console.log(obj.pos);
          return obj.pos === indexOne;
        }
        var win = checkWin(board,computerPlaySymbol);
        console.log('aaaaaaafdf',win);


        // console.log('done',indexOne);

        var indexOneString = indexOne.toString();
        // var indexTwoString = indexTwo.toString();


        // console.log('obj',obj[indexOneString]);



        	loadBoard(obj[indexOneString][1],obj[indexOneString][0],computerPlaySymbol,indexOne);

      }



}

function squareClicked(place,event){

// ctx.fillStyle = 'green';
	var clickedY;
	var ClickedX;




  easyAi(computerSymbol);

}



function checkWin(board, selectedPiece){

  // var win = searchOjectWithArrayProperties(board,selectedPiece);
  console.log('hihiBB',board);

  var winningCombo = [];

  var winner = winCombos.some(function(combination){
    var winning = true;

      for (let i = 0; i < combination.length; i++) {
        if(Realboard[combination[i]] !== selectedPiece){
          winning = false;


        }
      }
      if (winning){
        winningCombo = combination;
      }
      return winning;
    });
    return [winner, winningCombo];


}



function searchOjectWithArrayProperties(board,selectedPiece){
  var t = 'top',
      mH = 'midH',
      b = 'bot',
      l = 'left',
      mV = 'midV',
      r = 'right',
      lD= 'leftD',
      rD = 'rightD';

     var positionsArray = [mH,mV,lD,rD,t,l,b,r];

      function thing(){
        var winArray = [];
        for (let i = 0; i < board.length; i++) {
          for (let x in board[i]){
            if(x == 'pos' && board[i].gamepiece == selectedPiece){

              for (let k = 0; k < board[i][x].length; k++) {
                let index = positionsArray.indexOf(board[i][x][k]);
                if (board[i][x][k] === positionsArray[index]){

                  winArray.push(board[i]);

                }
              };

            }

          }
        };

        return winArray;

      }

      var ab = thing();

      // if (ab === 3){
            return ab;

      // }



}



















})(this);



// function tester(b){
// 	console.clear();
// 	console.log(b);
// 	b = 3;
// 	console.log('4 '+b);

// }
