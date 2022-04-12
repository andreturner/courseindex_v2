function setup() {
createCanvas(1000, 1000);

angleMode(DEGREES);
rectMode(CENTER);
}

function draw() {
background(150);
noFill();

push();

rotate(30);
rect(450, 200, 100, 700);
pop();

push();

rotate(330);
rect(400, 700, 100, 700);
pop();

translate(width/ 2, height /2);

for (var i = 0; i < 200; i++) {
    push();

    rotate(sin(frameCount + i) * 100)


 
    rect (0, 0, 600 - i * 3, 100 - i * 3, 200 - i );

    pop();


}
}