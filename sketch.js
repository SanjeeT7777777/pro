
var ground;
var player;
var  bgImage;
var health;
var e1;
 var e2;
 var e3;
var e4;
var bulletgroup ;

function preload (){
bgImage = loadImage("S1.jpg");
playerImage = loadImage("sprite_0.png");
playerImageflip = loadImage("player.png");

enemyImage = loadImage("enemy.png");
enemyImageflip = loadImage("enemy1.png");
}

function setup(){
    var canvas = createCanvas(1200,800);
     player = createSprite (200,600,60,60);
     player.addImage(playerImage);

    health = 500;
bulletgroup = new Group();
    
}

function draw(){
    background(bgImage);

if(keyDown("space")){
    createbullets();
}
if(keyDown(UP_ARROW)){
            player.y = player.y-10;
}

if(keyDown(DOWN_ARROW)){
            player.y = player.y+10;
}
if(keyDown(LEFT_ARROW)){
           player.x = player.x-10;
            player.addImage(playerImageflip);
      
}

if(keyDown(RIGHT_ARROW)){
           player.x = player.x+10;
           player.addImage(playerImage);
        
}

console.log(player.position);
if(bulletgroup.isTouching(player)){
    health = health - 10 ; 
}
if(health <= 0  ){
    player.destroy();
}

    drawSprites();
    textSize(22);
    fill("red");
    text("health:"+health,1000,100)
    enemies();
}

function createbullets () {
    var bullets = createSprite(player.x,player.y,10,20);
    bullets.shapeColor = "yellow";
    bullets.velocityX = 7;
    bullets.lifetime = 150;
}
function createbulletsfore1 () {
    var bullets = createSprite(e1.x,e1.y,10,20);
    bullets.shapeColor = "red";
    bullets.velocityX = 7;
    bullets.lifetime = 150;
    bulletgroup.add (bullets)
}
function createbulletsfore1flip () {
    var bullets = createSprite(e1.x,e1.y,10,20);
    bullets.shapeColor = "red";
    bullets.velocityX = -7;
    bullets.lifetime = 150;
    bulletgroup.add (bullets)
}

function enemies (){
     e1= createSprite(285 , 575 , 50 , 50 );
     e1.addImage(enemyImage);
     e1.setCollider("rectangle",0,0,100,200);
    e1.debug = true;

    
    if (e1.isTouching(player) && player.x < e1.x ){
        e1.addImage(enemyImageflip);
        e1.shapeColor = "red";
        createbulletsfore1flip();
    }
    if (e1.isTouching(player) && player.x > e1.x ){
        e1.addImage(enemyImage);
        e1.shapeColor = "red";
        createbulletsfore1();
    }
    

     e2 = createSprite(195,190 , 50 , 50 );
     e3 = createSprite(445 , 110 ,50 ,50 );
     e4 = createSprite(925 , 190 , 50 , 50);
}