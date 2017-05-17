
// var context = new window.AudioContext();
//
// var osc = context.createOscillator();
// osc.frequency.value = 140;
// osc.connect(context.destination);
// osc.start(0);
//
// var gain = context.createGain();
// gain.gain.value = 100;
// gain.connect(osc.frequency);
//
// var osc2 = context.createOscillator();
// osc2.frequency.value = 1;
// osc2.type = "square";
// osc2.connect(gain);
// osc2.start(0);



// window.onload = function() {
//
//     var audio = new window.AudioContext(),
//         osc = audio.createOscillator(),
//         position = 0,
//         scale = {
//             g: 392,
//             f: 349.23,
//             e: 329.63,
//             b: 493.88
//         },
//         song = "gfefgg-fff-gbb-gfefggggffgfe---";
//
//         osc.connect(audio.destination);
//         osc.start(0);
//
//     setInterval(play, 1000 / 4);
//
//     function play() {
//         var note = song.charAt(position),
//             freq = scale[note];
//         position += 1;
//         if(position >= song.length) {
//             position = 0;
//         }
//         if(freq) {
//             osc.frequency.value = freq;
//         },
//     }
// };

var frequency = ['329.628'];



window.onload = function() {

    var audio = new window.AudioContext(),
        position = 0,
        scale = {
            g: 392,
            f: 349.23,
            e: 329.63,
            b: 493.88
        },
        song = "gfefgg-fff-gbb-gfefggggffgfe---";

    setInterval(play, 250);

    function createOscillator(freq) {
        var osc = audio.createOscillator();

        osc.frequency.value = freq;
        osc.type = "square";
        osc.connect(audio.destination);
        osc.start(0);

        setTimeout(function() {
            osc.stop(0);
            osc.disconnect(audio.destination);
        }, 1000 / 4)
    }

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if(position >= song.length) {
            position = 0;
        }
        if(freq) {
            createOscillator(freq);
        }
    }
};
