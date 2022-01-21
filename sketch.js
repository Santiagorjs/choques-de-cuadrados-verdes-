var cuadrado1,mover;


function setup() {
  createCanvas(800,400);
  cuadrado1 = createSprite(400, 200, 50, 50);
  cuadrado1.shapeColor = "green";
mover = createSprite(650,200,50,50);
mover.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  mover.x = mouseX;
  mover.y = mouseY;
  if(mover.x - cuadrado1.x < cuadrado1.width/2 + mover.width/2 && 
    cuadrado1.x - mover.x < cuadrado1.width/2 + mover.width/2 && 
    mover.y - cuadrado1.y < cuadrado1.width/2 + mover.width/2 && 
    cuadrado1.y - mover.y < cuadrado1.width/2 + mover.width/2 ) {
    mover.shapeColor = "red";
    cuadrado1.shapeColor = "red";
  }
  else{
    mover.shapeColor = "green";
    cuadrado1.shapeColor = "green";
  }
  drawSprites();
}