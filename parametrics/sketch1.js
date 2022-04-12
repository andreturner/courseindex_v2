
//learned color animation from "The BuffED - Generative Art Basics - Using USB..." on youtube
var c;
// GIF: Setup
let gif;
let canvas;
let framesToSkip = 0;
let makeGif = false;
let isGifExported = false;

function setupGif() {
  recordedFrames = 0;

  gif = new GIF({
      workers: 2,
      quality: 10,
      workerScript: 'gif.worker.js'
  });

  const uuid = parseInt(Math.random()*10000000);
  gif.on('finished', function(blob) {
      print('GIT: finished')
      rendering = false;
      window.open(URL.createObjectURL(blob));
      saveAs(blob, `bezier-${uuid}@2x.gif`);
      setupGif();
      recordedFrames = 0;
  });
}

function setup()  {
  var p5Canvas = createCanvas(1000, 1000);
  canvas = p5Canvas.canvas;
  setAttributes('antialias', true);
  setupGif();

  colorMode(HSB, 360, 100, 100);
  noStroke(0);
  background(90);
  c=0;


} 

function draw()  {

  c += 1
  c = c%360

 //left stroke
  fill(c, 80, 100);
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
  fill(c, 100, 100);
  //top horizantal stroke
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
  fill(c, 100, 100);

  // GIF: Add frame
  if (makeGif &&
    !isGifExported &&
    ((frameCount - 100) % framesToSkip == 0 || frameCount == 100)
   ) {
  console.log(`Added frame.`)
  gif.addFrame(canvas.elt, { delay: 30, copy: true });
}

// GIF: Render when done
if (makeGif &&
    !isGifExported &&
    // replace with condition to render
    // e.g., frameCount >= 100
   (frameCount<=600)
   ) {
  print('Exporting GIF...');
  gif.render();
  isGifExported = true;
}

}
