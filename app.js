window.addEventListener("load", function() {
});

window.addEventListener('userproximity', function(event) {
  if (event.near) {
    window.navigator.vibrate(900);
    alert("TOO CLOSE!");
  } else {
    show("Come closer...");
    drawSmiley();
  }
});

window.addEventListener('devicemotion', function(event) {
  if(event.accelerationIncludingGravity.x > 1 || event.accelerationIncludingGravity.y > 1 || event.accelerationIncludingGravity.z > 10) {
    show("NO NO NO PUT ME DOWN");
    drawSadface();
    playSound();
  } else {
    show("Come closer...");
    drawSmiley();
  }
});

var playSound = function (text) {
  var audioCtx = new AudioContext();
  var oscillator = audioCtx.createOscillator();
  var gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.type = 'square'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
  oscillator.frequency.value = 200; // value in hertz
  oscillator.start();
  oscillator.stop(0.1);
}

var show = function (text) {
  $('.closeness').html(text);
}

var drawSmiley = function() {
  var ctx = document.getElementById('canvas').getContext("2d");
  ctx.clearRect(0, 0, 300, 300);

  ctx.fillStyle = "green";
  var path=new Path2D();
    path.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    path.moveTo(110,75);
    path.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
    path.moveTo(65,65);
    path.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    path.moveTo(95,65);
    path.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke(path);
}


var drawSadface = function() {
  var ctx = document.getElementById('canvas').getContext("2d");
  ctx.clearRect(0, 0, 300, 300);

  ctx.fillStyle = "green";
  var path=new Path2D();
    path.arc(75,75,50,0,Math.PI*2,true); // Outer circle
    path.moveTo(80,95);
    path.arc(65,95,15,0,Math.PI*2,true);  // Left eye
    path.moveTo(65,65);
    path.arc(60,65,5,0,Math.PI*2,true);  // Left eye
    path.moveTo(95,65);
    path.arc(90,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke(path);
}

