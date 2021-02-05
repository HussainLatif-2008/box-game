var canvas;
var block1,block2,block3,block4;
var ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createSprite(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rbg(0,0,255);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rbg(255,128,0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rbg(153,0,76);

    block4 = createSprite(740,580,200,30);
    block4.shapeColor = rbg(0,100,0);

    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -3;
    ball.velocityY = -8;
    ball.velocityX = +4;
    ball.velocityY = +9;

}

function draw(){
background(rgb(169,169,169));
edges=createEdgeSprite();
ball.bounceoff(edges);

if(block1.istouching(ball) && ball.bounceoff(block1)){
    ball.shapeColor = rgb(255,128,0);
    music.play();
}

if(block2.istouching(ball)){
    ball.shapeColor = rgb(255,128,0);
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
}

if(block3.istouching(ball) && ball.bounceoff(block3)){
    ball.shapeColor = rgb(153,0,76);
}

if (block4.istouching(ball) && ball.bounceoff(block4)){
    ball.shapeColor = rgb(0,100,0);
}
 drawSprites();
}