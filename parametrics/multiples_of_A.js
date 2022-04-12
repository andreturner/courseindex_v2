let bgCol=255;
let textMes = 'A';


function setup() {
  createCanvas(innerWidth, innerHeight);
  background(bgCol);
  textFont("Hind");
  textSize(120);
  textAlign(CENTER, CENTER);
  fill(0);
  strokeWeight(8);
  stroke(255);
}


function draw() {
  text(textMes, mouseX, mouseY);
}

function changeBgColor(){
  if(bgCol == 255){
    bgCol = 0;
  }else{
    bgCol = 255;
  }
  background(bgCol);
}


function mouseReleased(){
  changeBgColor();
}

function touchEnded() {
  changeBgColor();
  return false;
}

function keyPressed() {
  console.log(key)
  if (key === "Backspace") {  
    textMes = textMes.slice(0, -1);
  }else if(key === "Meta"){
    return;
  }else if(key === "Shift"){
    return;
  }else if(key === "Enter"){
    return;
  }else{
    textMes += key;
  }
}


