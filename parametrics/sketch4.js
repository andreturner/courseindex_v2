// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 362;
const T = 1;

let angle = 0;

function setup()  {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
} 

function draw()  {
if (capture && frameCount==1) capturer.start(); // start the animation capture{
 background(220);

 translate(500, 500);
 rotate(angle);
ellipseMode(CENTER);

angle = angle + 1;

 //left stroke
  fill(0);
  ellipse (-300, 400, 100);
  fill(0);
  ellipse (-300, 300, 100);
  fill(0);
  ellipse (-300, 200, 100);
  fill(0);
  ellipse (-300, 100, 100);
  fill(0);
  ellipse (-300, 0, 100);
  fill(0);
  ellipse (-300, -100, 100);
  fill(0);
  ellipse (-300, -200, 100);
  fill(0);
  ellipse (-300, -300, 100);
  fill(0);
  ellipse (-300, -400, 100);
  //top horizantal stroke
  fill(0);
  ellipse (-200, -400, 100);
  fill(0);
  ellipse (-100, -400, 100);
  fill(0);
  ellipse (0, -400, 100);
  fill(0);
  ellipse (100, -400, 100);
  fill(0);
  ellipse (200, -400, 100);
  //right stroke
  fill(0);
  ellipse (300, -400, 100);
  fill(0);
  ellipse (300, -300, 100);
  fill(0);
  ellipse (300, -200, 100);
  fill(0);
  ellipse (300, -100, 100);
  fill(0);
  ellipse (300, 0, 100);
  fill(0);
  ellipse (300, 100, 100);
  fill(0);
  ellipse (300, 200, 100);
  fill(0);
  ellipse (300, 300, 100);
  fill(0);
  ellipse (300, 400, 100);
  fill(0);
  //middle horizantal stroke
  ellipse (200, 100, 100);
  fill(0);
  ellipse (100, 100, 100);
  fill(0);
  ellipse (0, 100, 100);
  fill(0);
  ellipse (-100, 100, 100);
  fill(0);
  ellipse (-200, 100, 100);

  if (frameCount < 362) {
    capturer.capture( canvas ); // if capture is 'true', save the frame
   } else if (frameCount == NUM_FRAMES) { //stop and save after NUM_FRAMES
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