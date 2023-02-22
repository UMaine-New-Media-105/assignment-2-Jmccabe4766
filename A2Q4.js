/* 
  Joseph McCabe
  NMD 105
  02/22/2023
  
  Assignment 2 Question 4 - A2Q4
  
  Task: Create your own Flag
*/
function setup() {
  createCanvas(600, 400);
  background("white"); // draw white background
}

function draw() {
  fill("green");
  stripe(0, 0, 400); // draw green stripe
  fill("yellow");
  translate(200, 0);
  stripe(0, 0, 400); // draw yellow stripe
  fill("red");
  translate(200, 0);
  stripe(0, 0, 400); //draw red stripe
  fill("white")
  rect(-225, 75, 250) //draw white flag
  fill("red")
  ellipse(-100, 200, 100) // draw red dot
 
}
function stripe() {
  rect(0, 0, 200, 400); // create stripe function
}
