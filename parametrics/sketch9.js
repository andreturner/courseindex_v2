// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 260;
const T = 1;

function setup() {
  createCanvas(1000,1000);
  background(200);
}

function draw() {
  if (capture && frameCount==1) capturer.start(); // start the animation capture

  colorMode(HSB, 360, 100, 100);

    //p5 reference - (angle, radius) 
  translate(p5.Vector.fromAngle(millis() / .1, 50));
stroke(220, 70, 100)
line(900, 900, 500, 100);
line(100, 900, 500, 100);
line(300, 550, 700, 550);

if (frameCount < 260) {
  capturer.capture(canvas); // if capture is 'true', save the frame
 } else if (frameCount == NUM_FRAMES){ //stop and save after NUM_FRAMES
      capturer.stop(); 
     // capturer.save(); 
     // noLoop(); 
  }
}

function buttonPress()
{
  if (capture == true) {
      capture = true;
      document.getElementById("myButton").value='Saving Frames... Press Again to Cancel'; 
      frameCount = 0;
  } else {
      location.reload(); //refresh the page (starts animation over, stops saving frames)
  }
}