function setup() {
  createCanvas(1000, 1000);
  background(100);
}

//idea from WebCraftie
function draw() {
  //add mousepressed to erase
stroke(mouseX, mouseX, mouseY);
line(500, 0, mouseX, mouseY);
line(500, 0, mouseX, mouseY);

}