/* 
  Joseph McCabe
  NMD 105
  02/14/2023
  
  Assignment 2 Question 2 - A2Q2
  
  Task: Create Custom shape
*/
function setup() {
  createCanvas(400, 400);
  background("paleturquoise");
  stroke(220);

  beginShape();
  fill(0);
  vertex(100, 100);
  vertex(150, 50);
  vertex(200, 100);
  vertex(250, 50);
  vertex(300, 100);
  vertex(300, 150);
  vertex(200, 300);
  vertex(100, 150);
  vertex(100, 100);
  endShape();
}
