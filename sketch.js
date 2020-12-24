var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivaltime;
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("sprite_0.png",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(180);
 stroke("black");
  textSize(20);
  fill("black");
survivaltime=Math.ceil(frameCount/frameRate());
 text("Survivaltime :"+survivaltime,100,50);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score :"+score,300,50);
  
  
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score=score+1;
    
  }
  
  if (ground.x<0){
  ground.x=ground.width/2; 
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
    monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);

  bananas();
  stones();
  
  
  if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  drawSprites();
  
}
function bananas(){
  if(frameCount%80===0){
    banana = createSprite(800,30,15,15);
    banana.y=Math.round(random(120,200)); 
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.lifetime=380;
    FoodGroup.add(banana);
  }
}
function stones(){
  if(frameCount%300===0){
    obstacle = createSprite(800,340,10,40);
    obstacle.velocityX=-8;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime=350;
    obstacleGroup.add(obstacle);
  }
}




