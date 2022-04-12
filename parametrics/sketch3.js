
let angle = 0;

function setup()  {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
} 

function draw()  {
 background(220);

 translate(500, 500);
 rotate(angle);
ellipseMode(CENTER);

angle = angle + 1;

 //left stroke
  fill(0);
  ellipse (-300, 400, 100);
  fill(0);
  ellipse (-300, 300, 100);
  fill(0);
  ellipse (-300, 200, 100);
  fill(0);
  ellipse (-300, 100, 100);
  fill(0);
  ellipse (-300, 0, 100);
  fill(0);
  ellipse (-300, -100, 100);
  fill(0);
  ellipse (-300, -200, 100);
  fill(0);
  ellipse (-300, -300, 100);
  fill(0);
  ellipse (-300, -400, 100);
  //top horizantal stroke
  fill(0);
  ellipse (-200, -400, 100);
  fill(0);
  ellipse (-100, -400, 100);
  fill(0);
  ellipse (0, -400, 100);
  fill(0);
  ellipse (100, -400, 100);
  fill(0);
  ellipse (200, -400, 100);
  //right stroke
  fill(0);
  ellipse (300, -400, 100);
  fill(0);
  ellipse (300, -300, 100);
  fill(0);
  ellipse (300, -200, 100);
  fill(0);
  ellipse (300, -100, 100);
  fill(0);
  ellipse (300, 0, 100);
  fill(0);
  ellipse (300, 100, 100);
  fill(0);
  ellipse (300, 200, 100);
  fill(0);
  ellipse (300, 300, 100);
  fill(0);
  ellipse (300, 400, 100);
  fill(0);
  //middle horizantal stroke
  ellipse (200, 100, 100);
  fill(0);
  ellipse (100, 100, 100);
  fill(0);
  ellipse (0, 100, 100);
  fill(0);
  ellipse (-100, 100, 100);
  fill(0);
  ellipse (-200, 100, 100);
}
