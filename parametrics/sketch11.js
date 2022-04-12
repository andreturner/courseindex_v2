function setup() {
    createCanvas(1000, 1000);
    angleMode(DEGREES);
    }

    function draw() {
        background(255, 100, 100);
        fill(0, 200, 200);

    rect(600, 300, 100, 400);

        translate(width/2, height/2);

        for (let i = 0; i < 12; i++) {

            rotate(30);
            ellipse(100, 100, 100);
        }

    
        
    }