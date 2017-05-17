// make buttons animate and look good
// make bottom button look good
//
// (maybe try dark grey boarder light grey background)
//
// when done go on slack/dentist stuff
// stratagise schedule and programming



(function (global){
  var switchOnOff = false;
  var player = [];
  var computer = [];
  var listeners = {};
  var score = 0;


  turnGameOn();

  function turnGameOn(){
    const onOffButton = document.getElementsByName("onOff")[0];
    onOffButton.addEventListener("click", slide);
    const buttons = document.querySelectorAll('.simon-button');
    var transitionMilliSeconds = 500;
    var replayMilliSeconds = 1000;
    var strictStatus = false;
    var audio = new window.AudioContext();
    var frequencies = document.querySelectorAll('div[data-frequency]');
    // console.log(frequencies[0].dataset.frequency);

    // var totalTransition = replayMilliSeconds * 2 * computer.length;
    // buttons.forEach

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(){

                                      player.push(i);

                                      turn(i,this);
                                      processClick();
                                      playAudio(this);

                                  });
    }


    function slide(e){
      switchOnOff = !switchOnOff;
      this.classList.toggle("slide");
      var startStrictButtons = document.querySelectorAll(".start-strict-btn");
       var strictBtn = document.querySelector(".indicator");
        console.log("btn",startStrictButtons);


      if(switchOnOff){
        let start = function() {
            score = 0;
            document.querySelector(".score h1").textContent = score;

            player.length = 0;
            computer.length = 0;
            computerTurn();
        };
        let strict = function(){

          strictStatus = !strictStatus;
          strictBtn.classList.toggle('on');
        };
          addEventsToBtns(start,strict);
      }
  //    http://stackoverflow.com/questions/5660131/how-to-removeeventlistener-that-is-addeventlistener-with-anonymous-function?rq=1
  //      http://stackoverflow.com/questions/4950115/removeeventlistener-on-anonymous-functions-in-javascript
      else{
        player.length = 0;
        computer.length = 0;
        score = '-';
        strictBtn.classList.remove("on");
        var scoreText = document.querySelector(".score h1").textContent = score;
        startStrictButtons[0].removeEventListener("click", listeners["start"]);
        startStrictButtons[1].removeEventListener("click", listeners["strict"]);
      }

      function addEventsToBtns(start,strict){
        listeners["start"] = start;
        listeners["strict"] = strict;
        startStrictButtons[0].addEventListener("click", listeners["start"]);
        startStrictButtons[1].addEventListener("click", listeners["strict"]);

        startStrictButtons[0].addEventListener("mousedown",pressDown);
        startStrictButtons[0].addEventListener("mouseup",pressUp);
        startStrictButtons[1].addEventListener("mousedown",pressDown);
        startStrictButtons[1].addEventListener("mouseup",pressUp);

        function pressDown(){
          this.style.boxShadow = '0 0 0 white';
        }

        function pressUp(){
          this.style.boxShadow = '0px 2px 3px #222';
        }

      }

    }

    function playAudio(ele){
      var freq = ele.dataset.frequency;

      console.log(ele.dataset.frequency);

      createOscillator(freq);



    }

    function createOscillator(freq) {
        var osc = audio.createOscillator();

        osc.frequency.value = freq;
        osc.type = "square";
        osc.connect(audio.destination);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(audio.destination);
        }, 1000 / 3)
    }



    function computerTurn(){
      var colorId = randomColorIndex();
      var ele = document.getElementById(`${colorId}`);
      computer.push(colorId);
      simulateClick();


        playersTurn();

      //SET TIME OUT time * computer.length
        //playerTURN
      // buttons.forEach(btn => btn.addEventListener('transitionend', playersTurn));
    }

    function turn(colorId,ele){

      var selectedClass,
          blue = 3,
          yellow = 2,
          red = 1,
          green = 0;
          // transitionMilliSeconds = 800;


      if (colorId === blue){
        selectedClass = "lighten-blue";
        ele.classList.add(`${selectedClass}`);
      }
      else if (colorId === yellow){
        selectedClass = "lighten-yellow";
        ele.classList.add(`${selectedClass}`);
      }
      else if (colorId === red){
        selectedClass = 'lighten-red';
        ele.classList.add(`${selectedClass}`);
      }
      else if (colorId === green){
        selectedClass = 'lighten-green';
        ele.classList.add(`${selectedClass}`);

      }

      var timeTransition = setTimeout(function () {
         ele.classList.remove(`${selectedClass}`);
         console.log('time');

      }, transitionMilliSeconds);

    }


      function processClick(){
        var win = 20;
        var match = checkForMatch();
        if (!match && strictStatus){
           listeners["start"]();

         }
        if (!match){
          player.length = 0;
          document.querySelector(".score h1").textContent = '!!'

          playersTurnDone();

        }

        else if (computer.length === win && player.length === win){
          winner();

        }

        else if (player.length === computer.length){
          var totalTransition = replayMilliSeconds * computer.length;
          score++;
          var scoreText = document.querySelector(".score h1").textContent = score;

          let nextRound = setTimeout(function(){
            player.length = 0;
           buttons.forEach(btn => btn.classList.add('unclickable'));
            computerTurn();
          }, totalTransition);
        }

      }

      function randomColorIndex(){
        var numberofSquares = 4;
        let index = Math.floor(Math.random() * numberofSquares);

          return index;
      }

     function playersTurn(){
       var totalTransition = replayMilliSeconds * computer.length;
       console.log("pl");
      //  buttons.forEach(btn => btn.removeEventListener('transitionend', playersTurn));

        var timebeforePlayer = setTimeout(function(){
          buttons.forEach(btn => btn.classList.remove('unclickable'));
          document.querySelector(".score h1").textContent = score;


        }, totalTransition);

     }

     function playersTurnDone(){
       buttons.forEach(btn => btn.classList.add('unclickable'));
       simulateClick();


         playersTurn();


       //

     }

     function checkForMatch(){



          var match = (function(){

          if( player.length === 0){
              return true;
          }
          for(let i = 0; i < player.length; i++) {
              if(player[i] !== computer[i]){
                  return false;
                }
            }
            return true;
          })();
        console.log(`${match}`);
        return match;

     }


     function simulateClick() {


          var count = 0;
                       //setinterval
      var replay = setInterval(function () {

          var thing = computer[count];
          var ele = document.getElementById(`${thing}`);
          console.log(count+""+computer.length);
          turn(thing,ele);
          playAudio(ele);

          count++;
          if( count === computer.length){
            clearInterval(replay);
          }

          }, replayMilliSeconds);

      }

      function winner(){


          document.querySelector(".score h1").textContent = 'Win';

          var rePlay = setTimeout(function(){
            listeners["start"]();
          }, replayMilliSeconds * 4);


      }


  }




})(this);
