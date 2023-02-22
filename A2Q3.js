/* 
  Joseph McCabe
  NMD 105
  02/22/20232
  
  Assignment 2 Question 3 - A2Q3
  
  Task: Reposition Custom shape
*/
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background("Blue");
  scale(1)
  translate(0, 0)
  heart (0, 0, 1)
}
function heart(x, y, size) { // draw heart
  fill(0);
  vertex(0, 50, 0);
  vertex(50, 0, 0);
  vertex(100, 50, 0);
  vertex(150, 0, 0);
  vertex(200, 50, 0);
  vertex(200, 100, 0);
  vertex(100, 225, 0);
  vertex(0, 100, 0);
  endShape();
}
function heart(){
  push();
  translate(50, 50)
  scale(1.5);
 fill(0);
  vertex(0, 50, 0);
  vertex(50, 0, 0);
  vertex(100, 50, 0);
  vertex(150, 0, 0);
  vertex(200, 50, 0);
  vertex(200, 100, 0);
  vertex(100, 225, 0);
  vertex(0, 100, 0);
  endShape();
  pop();
} 

  function heart(){
  push();
  translate(10, 0)
  scale(1.9);
 fill(0);
  vertex(0, 50, 0);
  vertex(50, 0, 0);
  vertex(100, 50, 0);
  vertex(150, 0, 0);
  vertex(200, 50, 0);
  vertex(200, 100, 0);
  vertex(100, 225, 0);
  vertex(0, 100, 0);
  endShape();
  pop();
} 
