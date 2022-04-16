// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 360;
const T = 1;

function setup()  {
  var p5Canvas = createCanvas(1000, 1000);
  canvas = p5Canvas.canvas;
 // setAttributes('antialias', true);
  //setupGif();

  colorMode(HSB, 360, 100, 100);
  noStroke(0);
  background(90);
  c=0;


} 

function draw()  {
  if (capture && frameCount==1) capturer.start(); // start the animation capture

  c += 1
  c = c%360

 //left stroke
  fill(c, 100, 100);
  ellipse (200, 900, 100);
  fill(c, 100, 100);
  ellipse (200, 800, 100);
  fill(c, 100, 100);
  ellipse (200, 700, 100);
  fill(c, 100, 100);
  ellipse (200, 600, 100);
  fill(c, 100, 100);
  ellipse (200, 500, 100);
  fill(c, 100, 100);
  ellipse (200, 400, 100);
  fill(c, 100, 100);
  ellipse (200, 300, 100);
  fill(c, 100, 100);
  ellipse (200, 200, 100);
  //top horizantal stroke
  fill(c, 100, 100);
  ellipse (200, 100, 100);
  fill(c, 100, 100);
  ellipse (300, 100, 100);
  fill(c, 100, 100);
  ellipse (400, 100, 100);
  fill(c, 100, 100);
  ellipse (500, 100, 100);
  fill(c, 100, 100);
  ellipse (600, 100, 100);
  fill(c, 100, 100);
  ellipse (700, 100, 100);
  fill(c, 100, 100);
  //right stroke
  ellipse (800, 100, 100);
  fill(c, 100, 100);
  ellipse (800, 200, 100);
  fill(c, 100, 100);
  ellipse (800, 300, 100);
  fill(c, 100, 100);
  ellipse (800, 400, 100);
  fill(c, 100, 100);
  ellipse (800, 500, 100);
  fill(c, 100, 100);
  ellipse (800, 600, 100);
  fill(c, 100, 100);
  ellipse (800, 700, 100);
  fill(c, 100, 100);
  ellipse (800, 800, 100);
  fill(c, 100, 100);
  ellipse (800, 900, 100);
  fill(c, 100, 100);
  //middle horizantal stroke
  ellipse (700, 600, 100);
  fill(c, 100, 100);
  ellipse (600, 600, 100);
  fill(c, 100, 100);
  ellipse (500, 600, 100);
  fill(c, 100, 100);
  ellipse (400, 600, 100);
  fill(c, 100, 100);
  ellipse (300, 600, 100);


  if (frameCount < 360) {
    capturer.capture( canvas ); // if capture is 'true', save the frame
   } else if (frameCount == NUM_FRAMES){ //stop and save after NUM_FRAMES
        capturer.stop(); 
        capturer.save(); 
        noLoop(); 
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
