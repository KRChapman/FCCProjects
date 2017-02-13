// var zero = document.querySelectorAll('.zero-button');
// console.log(zero[0].textContent);
// console.log(typeof zero[0].textContent);
var expressionarray = [];
calculatorButtons();
function calculatorButtons(){
var allButtons = document.querySelectorAll('button');
	// console.log(allButtons[0].textContent);
	for (var i = 0; i < allButtons.length; i++) {
		allButtons[i].addEventListener('click', proccessValue);
	};


}


function proccessValue(e){


// console.log(this.textContent);
	if(!isNaN(this.textContent) ){
		displayNumbers(this.textContent);
	// console.log(this.textContent);

	}
	else if(this.textContent ===  'AC' ||  this.textContent ===  'CE'){
		this.textContent ===  'AC' ? allClearDisplay() : deleteOne()
		console.log('command'+this.textContent);
	}

	else if(this.textContent !== '.'){

		displaySymbol(this.textContent);
	}
	else{
		//period
		displayDecimal(this.textContent);
			console.log('period'+this.textContent);
	}
	// else{

	// }

	// console.log(e);
}


function displayNumbers(input){
	expressionarray.push(input);

	document.querySelector('.display').textContent = expressionarray.join('');
	
}
function displaySymbol(input){
	if (input === '=' && expressionarray.length > 2){

		calculateExpresion();
	}

	else if(!isNaN(expressionarray[expressionarray.length-1] )){
		console.log('sym'+input);
		printToDisplay(input);
		
	}


}

function displayDecimal(input){
 var initialValue = document.querySelector('.display').textContent;
 console.log('in'+initialValue);
	if(initialValue === '0' ||  (expressionarray.indexOf(input) < expressionarray.length - 1)){
		printToDisplay(input);
	}

 // && expressionarray[expressionarray.length - 1] !
}

function calculateExpresion(){
 var expressionString = document.querySelector('.display').textContent = expressionarray.join('');

 expressionString = expressionString.replace(/x/g, '*');
 expressionString = expressionString.replace(/÷/g, '/');

 answer = eval(expressionString);

 console.log(answer);

 allClearDisplay();
  document.querySelector('.display').textContent = answer;



}

function printToDisplay(input){
expressionarray.push(input);
		document.querySelector('.display').textContent = expressionarray.join('');
}

function allClearDisplay(){
	expressionarray.length = 0;
	document.querySelector('.display').textContent = 0;
}

function deleteOne(){



var one = expressionarray.length - 1;
expressionarray.length = one;
console.log(expressionarray);
document.querySelector('.display').textContent = expressionarray.join('');
}

// listen for all button presses 
// proccess the value if ac(all clear) ce(delete) or = do appropriate command
// else
// put value in n expressionarray
// get the value and display it on screen in order of press

// when operators is pressed check last entry in expression array if it is a isNaN('.') typeof = 'number' allow display of operator and 
// and put in array
// if button press is '=' and above condition is met calculate expressionarray replace display expression with answer


// if delete is pressed remove last index in expressoin array update display

// if all clear is pressed change display to 0


