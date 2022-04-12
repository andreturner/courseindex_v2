let infini;
let fontSize = 400;
let hiArray;
let r = 0;

function preload(){
  
  infini = loadFont("infini-regular.otf");
  
}

function setup() {
  createCanvas(400, 400);
  textFont(infini);
  textSize(fontSize);
  textAlign(RIGHT);

  hiArray = infini.textToPoints("a", width/2, height/2, fontSize, {
    sampleFactor: 0.05
  });
}
  

function draw() {
  background(220);
  
  //text("a", width/2, height/2);
  
  beginShape();
  for (let i = 0; i < hiArray.length; i++){
    
    //ellipse(hiArray[i].x, hiArray[i].y, 10, 10);


    push();
    translate(hiArray[i].x, hiArray[i].y);
    rotate(r);
    r++;
    strokeWeight(5);
    line(-5, -5, 5, 5);
    pop();
  }
}