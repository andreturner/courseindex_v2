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
push();
function draw() {
col.r = 0;
col.g = random(100, 255);
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
}