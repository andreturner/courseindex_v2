// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 300;
const T = 1;

//The Coding Train 2.5: The random() Function - p5.js Tutorial
var spot = {
  x: 100,
  y: 50,
}

  var col = {
    r: 255,
    g: 0, 
    b: 0, 
  }

function setup() {
  createCanvas(1000,1000);
  background(200);
}
//crossbar

function draw() {
  if (capture && frameCount==1) capturer.start(); // start the animation capture

push();
col.r = random(0, 255);
col.g = 0;
col.b = random(150, 200);
spot.x = random(200, 800);
spot.y = random(450, 600);
fill(col.r, col.g, col.b);
ellipse(spot.x, spot.y, 50, 50);
pop();

//left stroke
push();
col.r = random(100, 255);
col.g = 0;
col.b = random(0, 100);
spot.x = random(200, 300);
spot.y = random(200, 800);
fill(col.r, col.g, col.b);
ellipse(spot.x, spot.y, 50, 50);
pop();

//right stroke
push();
col.r = random(100, 255);
col.g = 0;
col.b = random(0, 100);
spot.x = random(700, 800);
spot.y = random(200, 800);
fill(col.r, col.g, col.b);
ellipse(spot.x, spot.y, 50, 50);
pop();

//top bar
push();
col.r = random(0, 255);
col.g = 0;
col.b = random(0, 255);
spot.x = random(200, 800);
spot.y = random(100, 200);
fill(col.r, col.g, col.b);
ellipse(spot.x, spot.y, 50, 50);
pop();


if (frameCount < 300) {
  capturer.capture(canvas); // if capture is 'true', save the frame
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