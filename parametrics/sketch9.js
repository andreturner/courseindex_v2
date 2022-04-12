function setup() {
  createCanvas(1000,1000);
  background(200);
}

function draw() {
  colorMode(HSB, 360, 100, 100);

    //p5 reference - (angle, radius) 
  translate(p5.Vector.fromAngle(millis() / .1, 50));
stroke(220, 70, 100)
line(900, 900, 500, 100);
line(100, 900, 500, 100);
line(300, 550, 700, 550);
}
