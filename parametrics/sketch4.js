// draw a diagonal line of ellipses
function setup() {
	createCanvas(1000, 1000);
	noStroke();
}

function draw() {
	background(100);
  
  
//left stroke

	// number of ellipses in line
	var num = 6;
  
	// initialize xy
	var x = 480;
	var y = 130;


	// count with i 
	for (var i = 0; i <= num; i++) {

		// draw ellipse at xy
       fill(0, 255, 200);
		ellipse(x, y, 40);
		// ellipse((10-i)*x, i*y, 40);

		// increment xy dividing evenly by width and height
		x -= width/15;
		y += height/8;
    
    }
  
//right stroke
  
  	// number of ellipses in line
	var num = 6;
  
	// initialize xy
	var x = 520;
	var y = 130;


	// count with i 
	for (var i = 0; i <= num; i++) {

		// draw ellipse at xy
		ellipse(x, y, 40);
		// ellipse((10-i)*x, i*y, 40);

		// increment xy dividing evenly by width and height
		x += width/15;
		y += height/8;
    
   


	}

//cross bar  *coding train 4.1*
  
  // number of ellipses in line
for (var x = 250; x <= 750; x +=100) {
  
  
  ellipse(x, 590, 40);

}

	
    

}