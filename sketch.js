var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

 speed = random(223,321);
 weight = random(30,52);
 thickness = random(22,83);

 bullet = createSprite(50, 200, 70, 20);
  wall = createSprite(1200,200,thickness,height/2);

  wall.shapeColor = color(80,80,80);
  bullet.shapecolor = "white";
  
  bullet.velocityX = speed;

}

function draw() {
  background(0);

 if (hasCollided(bullet, wall)){

  bullet.velocityx = 0; 
  var damage =  0.5* weight* speed* speed/ (thickness* thickness* thickness);
  
 if (damage>10){

   wall.shapeColor = color(255,0,0);
 }
  
 
  if(damage<10){

    wall.shapeColor = color(0,255,8);
  }
  
  

  }

  drawSprites();
}

function hasCollided(lbullet, lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallleftedge = lwall.x;
if(bulletRightEdge>=wallleftedge)
{

return true
} 
return false;}