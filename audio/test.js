var Game = function() {
  var audioContext = new window.AudioContext();
  var oscillator = null;
  var gainNode = null;
  var winner = false;

  var that = this;
  this.power = false;
  this.started = false;
  this.playerTurn = false;
  this.strictMode = false;
  this.sequence = [];
  this.playerSequence = [];
  this.turn = 0;

  var winningSong = [];
  winningSong.push($('.button.red').get(0));
  winningSong.push($('.button.yellow').get(0));
  winningSong.push($('.button.blue').get(0));
  winningSong.push($('.button.green').get(0));
  winningSong.push($('.button.green').get(0));
  winningSong.push($('.button.green').get(0));
  winningSong.push($('.button.red').get(0));
  winningSong.push($('.button.yellow').get(0));

  var playSound = function(frequency) {
    if (!that.power || !that.started || oscillator !== null) return false;
    gainNode = audioContext.createGain();
    oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.value = frequency;

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.value = 0.1;

    oscillator.start();
  };

  var stopSound = function() {
    if (!oscillator || !gainNode) return false;
    oscillator.stop();
    gainNode.disconnect(audioContext.destination);

    oscillator = null;
    gainNode = null;
  };

  var randomButton = function() {
    var $buttons = $('.button');

    var buttonNumber = Math.floor(Math.random() * $buttons.length);
    return $buttons[buttonNumber];
  };

  var playTone = function(frequency, duration) {
    return new Promise((resolve, reject) => {
      playSound(frequency);
      setTimeout(() => {
        stopSound();
        resolve(true);
      }, duration);
    });
  };

  var playSequence = function(buttons) {
    if (buttons.length === 0) {
      that.playerTurn = true;
      if (winner) {
        that.start();
      }
      return that.playerTurn;
    }

    // Assign the duration of the tone based on how many
    // turns we've already played.
    // ref: http://www.waitingforfriday.com/?p=586#Sound_frequencies_and_timing
    var duration = that.sequence.length <= 5  ? 420
                 : that.sequence.length <= 13 ? 320
                 :                              220;

    if (winner) {
      duration = 100;
    }

    var button = buttons[0];
    if (!winner) {
      if (buttons.length === that.sequence.length) console.log('+++++');
      console.log((that.sequence.length - buttons.length) + ':' + $(button).data('color'));
      if (buttons.length === 1) console.log('-----');
    }

    that.activateButton(button);

    var frequency = $(button).data('frequency');
    playTone(frequency, duration).then(() => {
      that.deactivateButton(button);
      playSequence(buttons.slice(1));
    });
  };

  var takeTurn = function() {
    if ( that.turn === 20 ) {
      winner = true;
      playSequence(winningSong);
      return true;
    }
    that.turn++;

    // Add a new button to the sequence.
    that.sequence.push(randomButton());

    // If necessary, prepend the turn number with a zero
    // before updating the display.
    var displayString = that.turn < 10 ? '0' + that.turn : '' + that.turn;
    $('.display').html(displayString);

    playSequence(that.sequence);
  };

  this.activateButton = function(button) {
    // If the game hasn't been turned on or started, don't do
    // anything.
    if (!that.power || !that.started) return false;

    // Create a jQuery object from the DOM element reference.
    var $button = $(button);

    // Light up the active button.
    $button.addClass('active');
  };

  this.deactivateButton = function(e) {
    var $button = $(e.target || e);
    stopSound();
    $button.removeClass('active');

    if (that.playerTurn && that.playerSequence.length === that.sequence.length) {
      that.playerTurn = false;
      that.playerSequence = [];
      setTimeout(takeTurn, 500);
    }
  };

  this.pressButton = function(e) {
    if (!that.power || !that.started || !that.playerTurn) return false;

    // Add the pressed button to the player's button sequence.
    that.playerSequence.push(e.target);
    that.activateButton(e.target);

    playSound($(e.target).data('frequency'));

    // Check if the player's button matches the computer's
    // button at the same position in the sequence.
    var playerButton = e.target;
    var computerButton = that.sequence[that.playerSequence.length - 1];

    // If the player's button doesn't match, play the
    // failure sound and end the game.
    // ref: http://www.waitingforfriday.com/?p=586#Sound_frequencies_and_timing
    if (playerButton !== computerButton) {
      that.playerTurn = false;
      that.playerSequence = [];
      setTimeout(function() {
        that.deactivateButton(e.target);
        stopSound();
        playSound(42);
        if (that.strictMode) {
          that.started = false;
          setTimeout(stopSound, 1500);
        } else {
          setTimeout(function() {
            stopSound();
            playSequence(that.sequence);
          }, 500);
        }
      }, 200);
    }
  };

  this.start = function() {
    if (!that.power) return false;
    winner = false;
    that.started = true;
    that.turn = 0;
    $('.display').html('00');
    that.sequence = [];
    that.playerSequence = [];
    takeTurn();
  };

  this.toggleStrict = function() {
    if (!that.power) return false;
    that.strictMode = !that.strictMode;
    $('.strict').toggleClass('on');
  }
};

$(function() {
  // Assign the tone frequency based on the button's color.
  $('div.button.green').data('frequency', '329.628');
  $('div.button.red').data('frequency', '220');
  $('div.button.yellow').data('frequency', '277.183');
  $('div.button.blue').data('frequency', '164.814');

  /*
  // From http://www.waitingforfriday.com/?p=586#Sound_frequencies_and_timing
  $buttons.filter('.green').data('frequency', '415');
  $buttons.filter('.red').data('frequency', '310');
  $buttons.filter('.yellow').data('frequency', '252');
  $buttons.filter('.blue').data('frequency', '209');

  // From Wikipedia: "Simon (game)"
  $buttons.filter('.green').data('frequency', '659.255');
  $buttons.filter('.red').data('frequency', '440');
  $buttons.filter('.yellow').data('frequency', '277.18');
  $buttons.filter('.blue').data('frequency', '329.628');

  // From the Free Code Camp forums:
  https://forum.freecodecamp.com/t/better-audiocontext-frequencies-for-simon/69483/2?u=vaggrippino
  */

  var $buttons = $('div.button');

  var game = new Game();
  $buttons.on('mousedown', game.pressButton);
  $buttons.on('mouseup mouseleave', game.deactivateButton);

  $('.power .switch').on('click', function() {
    game.power = !game.power;
    $('.power .switch').toggleClass('on');
    $('.display').html(game.power ? '--' : '');
  });

  $('.start').on('click',  game.start);
  $('.strict').on('click', game.toggleStrict);
});
