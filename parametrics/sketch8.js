// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 200;
const T = 1;


function setup() {
  createCanvas(1000,1000);
  background(150);
}

function draw() {
  if (capture && frameCount==1) capturer.start(); // start the animation capture

  //p5 reference - 
  translate(p5.Vector.fromAngle(millis() / 50, 50));
//left stroke
var num = 10;

var x= 550;
var y = 200;

for(var i = 0; i <=num; i++){

    fill(i*20, 255-i, i*5, i*2);
    ellipse(x, i*100, i*10);

    x -= width/15;
		y += height/8;
  }
//right stroke
  var num = 10;
  
  var x= 450;
  var y = 200;
  
  for(var i = 0; i <=num; i++){
  
      fill(i*20, 255-i, i*5, i*2);
      ellipse(x, i*100, i*10);
  
      x += width/15;
      y += height/8;
  }
  //crossbar sphere
  var num = 10;
  
  var y = 500;
  
  for(var i = 0; i <=num; i++){
  
      fill(i*20, 255-i, i*5, i*2);
      ellipse( 500, 600, i*10);
  
      x += width;

}
if (frameCount < 200) {
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