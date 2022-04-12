function setup() {
    createCanvas(1000, 1000);
    blendMode(LIGHTEST);
    }

    function draw() {
        background(255, 100, 100);

for(i = 0; i < 20; i++){
    fill(i*15, i*15, 0);
    triangle(0, i*50, 500, 0, 1000, i*50);
}

for(i = 0; i < 20; i++){
    fill(0, 200, i*15);
    rect(200, i*60, 600, 50);
}

    }