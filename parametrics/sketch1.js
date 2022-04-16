// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 100;
const T = 1;

function setup() {
  createCanvas(1000, 1000);

}

function draw() {
  if (capture && frameCount==1) capturer.start(); // start the animation capture
 background(220);
 

  ellipse (200, 900, 100);
  fill(0);
  ellipse (200, 800, 100);
  fill(0);
  ellipse (200, 700, 100);
  fill(0);
  ellipse (200, 600, 100);
  fill(0);
  ellipse (200, 500, 100);
  fill(0);
  ellipse (200, 400, 100);
  fill(0);
  ellipse (200, 300, 100);
  fill(0);
  ellipse (200, 200, 100);
  fill(0);
  //top horizantal stroke
  ellipse (200, 100, 100);
  fill(0);
  ellipse (300, 100, 100);
  fill(0);
  ellipse (400, 100, 100);
  fill(0);
  ellipse (500, 100, 100);
  fill(0);
  ellipse (600, 100, 100);
  fill(0);
  ellipse (700, 100, 100);
  fill(0);
  //right stroke
  ellipse (800, 100, 100);
  fill(0);
  ellipse (800, 200, 100);
  fill(0);
  ellipse (800, 300, 100);
  fill(0);
  ellipse (800, 400, 100);
  fill(0);
  ellipse (800, 500, 100);
  fill(0);
  ellipse (800, 600, 100);
  fill(0);
  ellipse (800, 700, 100);
  fill(0);
  ellipse (800, 800, 100);
  fill(0);
  ellipse (800, 900, 100);
  fill(0);
  //middle horizantal stroke
  ellipse (700, 600, 100);
  fill(0);
  ellipse (600, 600, 100);
  fill(0);
  ellipse (500, 600, 100);
  fill(0);
  ellipse (400, 600, 100);
  fill(0);
  ellipse (300, 600, 100);
  fill(0);

  if (capture){
    capturer.capture( canvas ); // if capture is 'true', save the frame
    if (frameCount-1 == NUM_FRAMES){ //stop and save after NUM_FRAMES
        capturer.stop(); 
        capturer.save(); 
        noLoop(); 
    }
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
