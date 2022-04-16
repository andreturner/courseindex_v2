function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    }

    function draw() {
        colorMode(HSB, 360, 100, 100);
        background(255, 80, 100);

        fill(320, 100, 100);

    rect(600, 300, 100, 400);

        translate(width/2, height/2);

        for (let i = 0; i < 12; i++) {

            rotate(30);
            ellipse(100, 100, 100);
        }

    
        
    }