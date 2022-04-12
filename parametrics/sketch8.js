function setup() {
  createCanvas(1000,1000);
  background(150);
}

function draw() {
  //p5 reference - 
  translate(p5.Vector.fromAngle(millis() / 50, 50));
//left stroke
var num = 10;

var x= 550;
var y = 200;

for(var i = 0; i <=num; i++){

    fill(i*20, 255-i, i*5, i*2);
    ellipse(x, i*100, i*10);

    x -= width/15;
		y += height/8;
  }
//right stroke
  var num = 10;
  
  var x= 450;
  var y = 200;
  
  for(var i = 0; i <=num; i++){
  
      fill(i*20, 255-i, i*5, i*2);
      ellipse(x, i*100, i*10);
  
      x += width/15;
      y += height/8;
  }
  //crossbar sphere
  var num = 10;
  
  var y = 500;
  
  for(var i = 0; i <=num; i++){
  
      fill(i*20, 255-i, i*5, i*2);
      ellipse( 500, 600, i*10);
  
      x += width;
      
      
  
  
      
  
  
  

}
}
