// fractal.js
let angle;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('treeContainer');
  angle = PI / 4;
  stroke(100, 255, 150);
  strokeWeight(1.2);
}

function draw() {
  clear();
  translate(width/2, height);
  angle = map(sin(frameCount * 0.01), -1, 1, PI / 2, PI / 16);
  branch(100);
}

function branch(len){
  line(0, 0, 0, -len);
  translate(0, -len);
  if(len > 4){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}