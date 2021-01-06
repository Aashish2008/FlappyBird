var flappy,flappyimg,flappydown,flappydownimg;

var bg,bgimg;

var pipeup,pipeup1,pipeup2,pipeup3;

var pipedown,pipedown1,pipedown2,pipedown3;

var gameover,gameoverimg;

var restart,restartimg;

var start,startimg;

var play,playimg;

function preload(){

  //flappyimg
  flappyimg = loadAnimation("images/bird1.png","images/bird2.png");

  //flappydownimg
  flappydownimg = loadImage("images/flappydownimg");

  //bgimg
  bgimg = loadImage("images/background.png");

  //pipeup1
  pipeup1 = loadImage("images/pipeup1.png");

  //pipeup2
  pipeup2 = loadImage("images/pipeup2.png");

  //pipeup3
  pipeup3 = loadImage("images/pipeup3.png");

  //pipedown1
  pipeudown1 = loadImage("images/pipedown1.png");

  //pipedown2
  pipeudown2 = loadImage("images/pipedown2.png");

  //pipedown3
  pipeudown3 = loadImage("images/pipedown3.png");

  //gameoverimg
  gameoverimg = loadImage("images/gameover.png");

  //restartimg
  restartimg = loadImage("images/restartimg.jpg");

  //startimg
  startimg = loadImage("images/start.jpg");

  //playimg
  playimg = loadImage("images/play.png")
}

function setup() {
  createCanvas(1200,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}