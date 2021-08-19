
function preload(){
  seaImage = loadImage("sea.png");
 shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 


 
}

function setup(){
  createCanvas(400,400);
  var shipe= createSprite(188,188,10,10)
}

function draw() {
 background(seaImage)
 shipe.addImage("shipImage)
 




  drawSprites();
}
