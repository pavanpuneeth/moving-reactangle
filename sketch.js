var fixedRect,movingRect;

function setup() {
  createCanvas(400, 400);
  fixedRect=createSprite(200,200,100,100);
  movingRect=createSprite(100,100,20,50);
  
}

function draw() {
  background(220);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }
  else
  {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  
  drawSprites();
  //rectMode(CENTER);
  //rect(200,200,100,100);
  fill("red");
  text(mouseX+","+mouseY,mouseX,mouseY);
}