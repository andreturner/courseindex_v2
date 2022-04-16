// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 60*5;
const T = 1;

function setup() {
createCanvas(1000, 1000);

angleMode(DEGREES);
rectMode(CENTER);
}

function draw() {
    if (capture && frameCount== 0.5*1) capturer.start(); // start the animation capture

background(150);
noFill();

push();
rotate(30);
rect(450, 200, 100, 700);
pop();

push();
rotate(330);
rect(400, 700, 100, 700);
pop();

translate(width/ 2, height /2);

for (var i = 0; i < 200; i++) {
    push();
    rotate(sin(frameCount + i) * 100)
    rect (0, 0, 600 - i * 3, 100 - i * 3, 200 - i );
    pop();
}

if (frameCount < 60*5) {
  capturer.capture(canvas); // if capture is 'true', save the frame
 } else if (frameCount == NUM_FRAMES){ //stop and save after NUM_FRAMES
      capturer.stop(); 
      capturer.save(); 
      noLoop(); 
 }
function buttonPress() {
  if (capture == true) {
      capture = true;
      document.getElementById("myButton").value='Saving Frames... Press Again to Cancel'; 
      frameCount = 0;
  } else {
      location.reload(); //refresh the page (starts animation over, stops saving frames)
  }
}
}