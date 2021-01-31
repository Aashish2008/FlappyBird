var Bird, Bird_Falling, Bird_Rising, BirdIMG, Bird_FallingIMG, Bird_RisingIMG;

var pipeup,pipeupIMG, pipedown, pipedownIMG,pipeupgroup, pipedowngroup;

var Bg, BgIMG;

var Ground;

var GameOver, Restart, GameOverIMG, ResetIMG;

var Start, StartIMG;

var logo, logoIMG;

var lives; 

var gameState=PLAY;
//var SERVE=0;
var PLAY=1;
var END=0;
var score= 0;

function preload(){

BirdIMG= loadAnimation("flappybird1.png","flappybird2.png");
//Bird_FallingIMG= loadImage("Images/Falling_Down.png");
BgIMG= loadImage("background.png");
GameOverIMG= loadImage("gameover.png");
ResetIMG= loadImage("reset.png");
pipeupIMG= loadImage("pipeup.png");
pipedownIMG= loadImage("pipedown.png");
StartIMG= loadImage("start.png");
logoIMG= loadImage("logo.png");
}

function setup(){
createCanvas(1530,720);
    
Bg=createSprite(740,350,1530,720);
Bg.addImage(BgIMG);
Bg.x = Bg.width/2;
Bg.velocityX=-6;

Bird= createSprite(730,310,20,20);
Bird.addAnimation("Bird",BirdIMG);
Bird.scale= 0.15;

Ground=createSprite(500,675,1200,25);
Ground.visible= false;
Ground.x=Ground.width/2;
Ground.velocityX=-6;

Restart= createSprite(675,430);
Restart.addImage(ResetIMG);
Restart.scale=0.3;

Start= createSprite(750,400);
Start.addImage(StartIMG);
Start.scale= 0.3;

GameOver= createSprite(675,340);
GameOver.addImage(GameOverIMG);
GameOver.scale= 0.3;

logo= createSprite(740,200,100,100);
logo.addImage(logoIMG);

GameOver.visible=false;
Restart.visible=false;

pipeupgroup=new Group();
pipedowngroup=new Group();

fill("black");  
score=0;

}
function draw(){
//background("lightblue");
drawSprites();
textSize(20);
text("SCORE: "+score,1350,50);

if(mousePressedOver(Start)){
    Bird.velocityY = -12 ;
    Start.visible=false;
    logo.visible=false;
    gameState=PLAY;
            }
if(Bg.x<0){
    Bg.x=Bg.width/2;
    }

if(gameState===PLAY){
score = score+Math.round(getFrameRate()/30);  

Bg.velocityX=-4;
    
if(keyDown("space")){
   Bird.velocityY = -12 ;
   }
   Bird.velocityY=Bird.velocityY + 0.8;
   Bird.velocityX=0;


UpPipes();
DownPipes();

if(Bird.isTouching(pipeupgroup) || Bird.isTouching(Ground)||Bird.isTouching(pipedowngroup)){
   gameState=END;
    }

}   
else if(gameState=== END){
   GameOver.visible=true;
   Restart.visible=true;
   Bird.velocityY=0;
   Bg.velocityX=0;
   Ground.velocityX=0;
   Bird.y=300;
    Bird.x=300;
pipeupgroup.setVelocityXEach(0);
  pipedowngroup.setVelocityXEach(0);
}
if(mousePressedOver(Restart)) {
    reset();  
  }
 

}

function reset(){
    gameState=PLAY;
    GameOver.visible=false;
    Restart.visible=false;
    pipeupgroup.destroyEach();
    pipedowngroup.destroyEach();
    Bird.y=300;
    Bird.x=300;
    score = 0;
  }

function UpPipes(){
    if(frameCount%75===0){
    pipeup=createSprite(1500,250,40,100);    
    pipeup.y=Math.round(random(0,50));
    pipeup.addImage(pipedownIMG);
    pipeup.velocityX=-4;
    pipeup.scale=0.6;
    pipeupgroup.add(pipeup);
    }
}

function DownPipes(){
    if(frameCount%75===0){
    pipedown=createSprite(1500,500,40,100);
    pipedown.y=Math.round(random(600,740));
    pipedown.addImage(pipeupIMG);
    pipedown.velocityX=-4;
    pipedown.scale=0.6;
    pipedowngroup.add(pipedown);
    }
}