var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["19457be4-547b-43c5-8917-bd7d8571ae04","d7aed411-4fdd-4bc5-bab3-4e0d52a3b072","f6f0c5ee-323e-4433-880d-163e6685875a","6a8ebb1e-3ad7-46bc-8340-dce0baf472a2","5dff08c9-1135-43e2-bedd-009e5956a3e7","2e4cb8c3-b262-4732-87da-f9ad0f3398e7","10d9010b-c890-4945-9df4-9ace8a947493","72e8dd46-c19b-4d2d-9ee4-00d3c63756e4"],"propsByKey":{"19457be4-547b-43c5-8917-bd7d8571ae04":{"name":"bunny","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":10,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"d7aed411-4fdd-4bc5-bab3-4e0d52a3b072":{"name":"robot1","sourceUrl":"assets/api/v1/animation-library/gamelab/RfplXuONxsrn_LdlBz3VBTh7RbYi8gY9/category_characters/blue_robot_2.png","frameSize":{"x":472,"y":854},"frameCount":1,"looping":true,"frameDelay":2,"version":"RfplXuONxsrn_LdlBz3VBTh7RbYi8gY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":472,"y":854},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RfplXuONxsrn_LdlBz3VBTh7RbYi8gY9/category_characters/blue_robot_2.png"},"f6f0c5ee-323e-4433-880d-163e6685875a":{"name":"robot2","sourceUrl":"assets/api/v1/animation-library/gamelab/V1ZFWXFctYTOk6tsB96C9ZdH.jLHrZGY/category_characters/gray_robot_3.png","frameSize":{"x":480,"y":847},"frameCount":1,"looping":true,"frameDelay":2,"version":"V1ZFWXFctYTOk6tsB96C9ZdH.jLHrZGY","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":847},"rootRelativePath":"assets/api/v1/animation-library/gamelab/V1ZFWXFctYTOk6tsB96C9ZdH.jLHrZGY/category_characters/gray_robot_3.png"},"6a8ebb1e-3ad7-46bc-8340-dce0baf472a2":{"name":"robot3","sourceUrl":"assets/api/v1/animation-library/gamelab/2bcJ_mcHN6YxoBDIw2IJjv.Z2W5Nu7Bd/category_characters/gray_robot_5.png","frameSize":{"x":493,"y":836},"frameCount":1,"looping":true,"frameDelay":2,"version":"2bcJ_mcHN6YxoBDIw2IJjv.Z2W5Nu7Bd","loadedFromSource":true,"saved":true,"sourceSize":{"x":493,"y":836},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2bcJ_mcHN6YxoBDIw2IJjv.Z2W5Nu7Bd/category_characters/gray_robot_5.png"},"5dff08c9-1135-43e2-bedd-009e5956a3e7":{"name":"restart","sourceUrl":"assets/v3/animations/d3FhowF1Z_zXY8rGVFssxK5BupLN2spYijPa9b7aruo/5dff08c9-1135-43e2-bedd-009e5956a3e7.png","frameSize":{"x":75,"y":64},"frameCount":1,"looping":true,"frameDelay":4,"version":"cnuYz3u0nKqErwHUbjzdItqB4VM.MCDs","loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":64},"rootRelativePath":"assets/v3/animations/d3FhowF1Z_zXY8rGVFssxK5BupLN2spYijPa9b7aruo/5dff08c9-1135-43e2-bedd-009e5956a3e7.png"},"2e4cb8c3-b262-4732-87da-f9ad0f3398e7":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":381,"y":21},"frameCount":1,"looping":true,"frameDelay":12,"version":"1Uw0ijfU6uLE5prbjtxcHyHR3I.XHgp9","loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":21},"rootRelativePath":"assets/2e4cb8c3-b262-4732-87da-f9ad0f3398e7.png"},"10d9010b-c890-4945-9df4-9ace8a947493":{"name":"cloud","sourceUrl":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png","frameSize":{"x":260,"y":134},"frameCount":1,"looping":true,"frameDelay":2,"version":"BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":134},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BeluqVwHb2a.yvYLoxkNH0HWitQlKDF9/category_environment/cloud.png"},"72e8dd46-c19b-4d2d-9ee4-00d3c63756e4":{"name":"ground","sourceUrl":"assets/v3/animations/d3FhowF1Z_zXY8rGVFssxK5BupLN2spYijPa9b7aruo/72e8dd46-c19b-4d2d-9ee4-00d3c63756e4.png","frameSize":{"x":2377,"y":12},"frameCount":1,"looping":true,"frameDelay":4,"version":"2eVckQNeqcFc6VpDa9tNQdOtWwovRu2G","loadedFromSource":true,"saved":true,"sourceSize":{"x":2377,"y":12},"rootRelativePath":"assets/v3/animations/d3FhowF1Z_zXY8rGVFssxK5BupLN2spYijPa9b7aruo/72e8dd46-c19b-4d2d-9ee4-00d3c63756e4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var bunny = createSprite(200,370,20,50);
bunny.setAnimation("bunny");


bunny.setCollider("circle",0,0,30);


bunny.scale = 0.3;
bunny.x = 50;

//create a ground sprite
var ground = createSprite(200,385,400,20);
ground.setAnimation("ground");
ground.scale = 1;
ground.x = ground.width /2;

var invisibleGround = createSprite(200,375,400,5);
invisibleGround.visible = false;

//create Obstacle and Cloud Groups
var ObstaclesGroup = createGroup();
var CloudsGroup = createGroup();

//place gameOver and restart icon on the screen
var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.5;

gameOver.visible = false;
restart.visible = false;

//set text
textSize(18);
textFont("Georgia");
textStyle(BOLD);

//score
var count = 0;
textSize(10);

function draw() {
  //set background to pink
  background("pink");
  //display score
  text("Score: "+ count, 250, 100);
  text("SPEED WILL INCREASE WHEN THE SCORE REACHES EVERY 100 POINTS",10,200);
  console.log(World.frameRate);
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -(6 + 3*count/100);
    //scoring
    count = count + Math.round(World.frameRate/20);
    
    if (count>0 && count%100 === 0){
      playSound("assets/checkPoint.mp3",false);
    }
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
     //jump when the space key is pressed
    if(keyDown("space") && bunny.y >= 359){
      bunny.velocityY = -12 ;
      playSound("assets/jump.mp3",false);
    }
  
    //add gravity
    bunny.velocityY = bunny.velocityY + 0.8;
    
    //spawn the clouds
    spawnClouds();
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(bunny)){
      gameState = END;
      playSound("assets/die.mp3",false);
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    bunny.velocityY = 0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudsGroup.setVelocityXEach(0);
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    CloudsGroup.setLifetimeEach(-1);
    
    
  }
  
  if(mousePressedOver(restart)&& gameState === END) {
    reset();
  }
  
  

  bunny.collide(invisibleGround);
  
  drawSprites();
}

function reset(){
   gameState = PLAY;
   
   count = 0;
   
   ObstaclesGroup.setLifetimeEach(0);
   CloudsGroup.setLifetimeEach(0);
  
   gameOver.visible = false;
   restart.visible = false;
  
   bunny.setAnimation("bunny");
}

function spawnObstacles() {
  if(World.frameCount % 55 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = - (6 + 3*count/100);
    
    //generate random obstacles
    var rand = randomNumber(1,3);
    obstacle.setAnimation("robot" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.25;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = bunny.depth;
    bunny.depth = bunny.depth + 1;
    
    cloud.depth =  gameOver.depth;
    gameOver.depth = gameOver.depth + 1;
    
    cloud.depth = restart.depth;
    restart.depth = restart.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
