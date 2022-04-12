// Interactive Typography: Float, Xin Xin, 2020
// Based on Kinetic Typography tutorial by Tim Roden Broeker https://timrodenbroeker.de/processing-tutorial-kinetic-typography-1/

// GRID
const g = 100; // cell width
const cellnum = 4; // numbers of cells per row and column

// BASIC
let grotesk;
let cg;

// SOURCE
let sx;
let sy;
let sw;
let sh;

// DESTINATION
let dx;
let dy;
let dw;
let dh;

function preload() {
  grotesk = loadFont('infini-regular.otf');
}

function setup() {
  createCanvas(400, 400);
  cg = createGraphics(400, 400);
  cg.textFont(grotesk);
  cg.fill(0,0,255);
}

function draw() {
  background(220);
  // grid();
  cg.push();
  cg.translate(width / 2, height / 2-3);
  cg.textSize(200);
  cg.textAlign(CENTER, CENTER);
  cg.text('A', 0, 0);
  cg.pop();

  for (let x = 0; x < cellnum; x++) {
    for (let y = 0; y < cellnum; y++) {
      let wave = int(sin((frameCount + ( x*y )) * 0.07) * 200);
      
      // SOURCE
      sx = x * g + wave;
      sy = y * g;
      sw = g;
      sh = g;

      // DESTINATION
      dx = x * g;
      dy = y * g;
      dw = g;
      dh = g;
      copy(cg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

}

function grid() {
  for (let i = 0; i < cellnum; i++) {
    for (let j = 0; j < cellnum; j++) {

      //show grid background
      cg.strokeWeight(1);
      cg.stroke(0);
      cg.noFill();
      cg.rect(i * g, j * g, g, g);

      //show grid numbers
      cg.strokeWeight(0);
      cg.fill(0);
      cg.textSize(10);
      cg.text("i:" + i, i * g + 3, j * g + 12);
      cg.text("j:" + j, i * g + 3, j * g + 24);

    }
  }
}