// template for saving png files from p5.js sketch using CCapture
var capture = true; // default is to not capture frames, can be changed with button in browser
var capturer = new CCapture({format:'png'});
const NUM_FRAMES = 100;
const T = 1;


function setup() {
    createCanvas(1000, 1000);
   pixelDensity(1);
 
    }

    function draw() {
        if (capture && frameCount==1) capturer.start(); // start the animation capture

        background(51);

        //The Coding Train 11.3: The Pixel Array - p5.js Tutorial
        loadPixels();

        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var index = (x + y * width) * 4;
                pixels[index+0] = random(255);
                pixels[index+1] = 0;
                pixels[index+2] = random(255);
                pixels[index+3] = 255;
            }
        }
        updatePixels();

        noStroke();
        fill(140, 90, 200)
        triangle(100, 800, 500, 100, 900, 800);

        fill(50, 150, 200);
        triangle(350, 550, 500, 250, 650, 550);

        fill(200, 60, 60);
        quad(250, 800, 325, 650, 675, 650, 750, 800);
    
    if (frameCount < 100) {
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