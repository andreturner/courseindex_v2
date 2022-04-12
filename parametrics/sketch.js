let i = 50;

function setup() {
  createCanvas(1000,1000);
  background(200);

}

function draw() {

  colorMode(HSB, 360, 100, 100, 255);

var x = 500;

while (x <= width) {
  

      ellipse(x/2, 500, i/2);
      x = x + 50;
  }
}