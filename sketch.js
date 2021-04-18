var fixedRectangle, movingRectangle;

function setup() {
  createCanvas(800,400);
  
  fixedRectangle = createSprite(400, 200, 50, 40);
  fixedRectangle.debug = true;
  fixedRectangle.shapeColor = "lightblue";

  movingRectangle = createSprite(300, 100, 50, 40);
  movingRectangle.debug = true;
  movingRectangle.shapeColor = "lightblue";
}

function draw() {
  background("white");  

  movingRectangle.x = World.mouseX;
  movingRectangle.y = World.mouseY;

  // if condition
  if(movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 
    && movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 
    && fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 
    && movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2){
    fixedRectangle.shapeColor = "red";
    movingRectangle.shapeColor = "red";
  } else {
    fixedRectangle.shapeColor = "lightblue";
    movingRectangle.shapeColor = "lightblue";
  }

  // console.log(movingRectangle.x - fixedRectangle.x);
  drawSprites();
}