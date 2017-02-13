
var countTime;
tButton();
addCustomTime();
	
function tButton(seconds){

var buttons = document.querySelectorAll(".time_button");

	buttons.forEach(button => button.addEventListener('click', timer))

}

function addCustomTime(){
	var inputTime = document.querySelectorAll("input");

	for (var i = 0; i < inputTime.length; i++) {

	
	inputTime[i].addEventListener('keydown', function(e){
											  console.log('this'+this);
											handleCustomTimeSubmit(this,e,inputTime);

											// event.preventDefault();
															});

	};

}


function handleCustomTimeSubmit(athis,e,bothInputs){
	 if (e.keyCode === 13){
		console.log('a',athis);
		console.log(e);
		console.log('input',bothInputs);
		var seconds = bothInputs[1].value;
		var minutes = bothInputs[0].value;
		var customTime = Number((minutes * 60)) + Number(seconds);
		console.log('startTime'+customTime+ 'min '+ minutes + "sec " + seconds);
			timer(e,customTime);
				bothInputs[0].value = '';
				bothInputs[1].value = '';
	}



}


function displayTimeleft(seconds){
	var h1 = document.querySelector('h1');
	const minutes = Math.floor(seconds / 60);
	const Secondstogo = seconds % 60;
	h1.textContent = `${minutes}:${Secondstogo}`;
}

function timer(e,changeTime){

	clearInterval(countTime);
	var h1 = document.querySelector('h1');
	h1.textContent = '';
	
	var startTime = changeTime;
	if(!changeTime){
	
     startTime = this.getAttribute("data-time");
				console.log(this.dataset.time);

	}
	

	var now = new Date();
	now = now.getTime();

		//got the count function from work with javascript30
	  countTime = setInterval(function(){
	 var current = Date.now();

	 var time = (current / 1000) - (now / 1000);
	 var seconds = Math.floor(time);
	 var newTime = startTime - seconds;
	 if(newTime < 0){
	 	clearInterval(countTime);
	 	var audio = document.querySelector('audio');
	 	audio.play();
	 	return;
	 }
	 displayTimeleft(newTime);
	  
	 },1000)


}	 

