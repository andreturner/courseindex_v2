var capture = false; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 100;
const T = 1;

function setup() {
  createCanvas(1000,1000);
  background(200);

}

function draw() {
  if (capture && frameCount==1) capturer.start();
  colorMode(HSB, 360, 100, 100, 255);
  
  for(i = 300; i <= 700; i+25){
    fill(i*15, i*15, 70, 255);
    ellipse(i, 500, 50);
}

for(i = 0; i < 20; i++){
    fill(0, 200, i*15);
    ellipse(200, i*60, 50);
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
    if (capture == false) {
        capture = true;
        document.getElementById("myButton").value='Saving Frames... Press Again to Cancel'; 
        frameCount = 0;
    } else {
        location.reload();
}
}
}
