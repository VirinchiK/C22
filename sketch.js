var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3






function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;


  gameObject1 = createSprite(100, 200, 20,40)
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(150, 200, 20,40)
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(200, 200, 20,40)
  gameObject3.shapeColor = "green";



}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


 if(isTouching(movingRect, gameObject3)) {

  gameObject3.shapeColor = "red";
  movingRect.shapeColor = "red";


 }

 else {

  gameObject3.shapeColor = "green";
  movingRect.shapeColor = "green";
  
 }



  drawSprites();
}

function isTouching(object1, object2) {

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {


   return true;

}
else {

   return false

 
}

}



