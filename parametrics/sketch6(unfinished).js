var font;
var value1 = 0;

function preload() {
  font = loadFont('banco.ttf')
}

function setup() {
  createCanvas(1000, 1000);
  background(100);
 // textFont(font);
 // textSize(400);
 // fill(255);
 // noStroke();
 // text('Banco', 75, 600);
}


function draw() {
  
  fill(value1);
  var points = font.textToPoints('A', 300, 780, 800);
  console.log(points);

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    strokeWeight(8);
    point(pt.x, pt.y);
  }

  function mouseClicked() {
  if (value1 == 0){
    value1 = 255;
  }else{
    value1 = 0;
  
  }
  }
}