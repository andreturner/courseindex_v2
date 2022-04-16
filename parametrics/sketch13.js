
function setup() {
  createCanvas(1000,1000);
  background(200);

}

function draw() {
  colorMode(HSB, 360, 100, 100, 255);
  noStroke();

   // stroke circle
   fill(242, 46, 92, 200);
   ellipse(500, 500, 450);

//counter circle
fill(279, 48, 100, 150);
  ellipse(500, 500, 200);



// right rectangle
fill(171, 62, 90, 100);
  rect(700, 210, 150, 510);

  // top rectangle
fill(207, 56, 98, 80);
rect(325, 100, 450, 150);

//square
fill(133, 55, 100, 100);
  rect(800, 570, 150, 150);
}