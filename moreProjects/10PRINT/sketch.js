
let x=0;
let y=0;
let space = 10;



function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
 stroke(200);
 if(random(1)<0.5){
  line(x, y, space+x ,space+y);
 }
 else{
  line(x, y+space, x+space, y);
 }

 x+=space;
 if(x>width){
  x=0;
  y+=space;
 }
//  y+=10;

}
