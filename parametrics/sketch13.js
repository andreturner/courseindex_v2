function setup() {
    createCanvas(1000, 1000);
   pixelDensity(1);
 
    }

    function draw() {
        background(51);

        //The Coding Train 11.3: The Pixel Array - p5.js Tutorial
        loadPixels();

        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
                var index = (x + y * width) * 4;
                pixels[index+0] = random(255);
                pixels[index+1] = 0;
                pixels[index+2] = random(255);
                pixels[index+3] = 255;
            }
        }
        updatePixels();

        noStroke();
        fill(140, 90, 200)
        triangle(100, 800, 500, 100, 900, 800);

        fill(50, 150, 200);
        triangle(350, 550, 500, 250, 650, 550);

        fill(200, 60, 60);
        quad(250, 800, 325, 650, 675, 650, 750, 800);
    }