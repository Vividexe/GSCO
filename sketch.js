var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1500,200,60,height/2);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(check(car,wall)){
      deformation = 0.5 * weight * speed * speed / 22500
      if(deformation > 180){
        car.shapeColor = color(255,0,0);
        car.velocityX = 0;
      }
      if(deformation < 100){
        car.shapeColor = color(0,255,0);
        car.velocityX = 0;
      }
      if (deformation >= 100 && deformation <= 180){
        car.shapeColor = color(230,230,0);
        car.velocityX = 0;
      }

  }
  drawSprites();
}
function check(Andy,Swati){
  if(Andy.x + Andy.width/2 >= Swati.x - Swati.width/2 && Andy.x - Andy.width/2 <= Swati.x + Swati.width/2 && Andy.y + Andy.height/2 >= Swati.y - Swati.height/2 && Andy.y - Andy.height/2 <= Swati.y + Swati.height/2){
    return true;
}else{
    return false;
}
}