let ellipseSize;
let gifLength = 360;
let canvas; 

// draw a diagonal line of ellipses
function setup() {
	createCanvas(1000, 1000);
	noStroke();
}

function draw() {
	background(180);
	ellipseSize = random(2, 60); 
	ellipseMode(CENTER);
	translate(p5.Vector.fromAngle(millis() / 10, 10));

  
  
//left stroke

	// number of ellipses in line
	var num = 6;
  
	// initialize xy
	var x = 460;
	var y = 130;


	// count with i 
	for (var i = 0; i <= num; i++) {

		// draw ellipse at xy
       fill(0, 255, 200);
		ellipse(x, y, 60, ellipseSize);
		// ellipse((10-i)*x, i*y, 40);

		// increment xy dividing evenly by width and height
		x -= width/15;
		y += height/8;
    
    }
  
//right stroke
  
  	// number of ellipses in line
	var num = 6;
  
	// initialize xy
	var x = 540;
	var y = 130;


	// count with i 
	for (var i = 0; i <= num; i++) {

		// draw ellipse at xy
		ellipse(x, y, 60, ellipseSize);
		// ellipse((10-i)*x, i*y, 40);

		// increment xy dividing evenly by width and height
		x += width/15;
		y += height/8;
    
   


	}

//cross bar  *coding train 4.1*
  
  // number of ellipses in line
for (var x = 250; x <= 750; x +=100) {
	push();
translate(p5.Vector.fromAngle(millis() / 20, 30));
  
  ellipse(x, 590, ellipseSize, 60);
    pop();
}


    

}