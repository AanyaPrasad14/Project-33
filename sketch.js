var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var gameState = "play";
//var PLAY = 1;
//var END = 0;

var particle;
//var YLine;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score = 0;
//var turn = 0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //YLine = createSprite(400, 520, 800, 10);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(20);
  Engine.update(engine);
 
  textSize(30);
  textStyle(BOLD);
  fill("white");
  text("Score : "+ score,20,50);


  text("500",15,540);
  text("500",95,540);
  text("500",176,540);
  text("500",254,540);

  text("100",336,540);
  text("100",416,540);
  text("100",495,540);

  text("200",576,540);
  text("200",657,540);
  text("200",737,540);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  // if(frameCount%60===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
 
  //for (var j = 0; j < particles.length; j++) {
   
     //particles[j].display();
   //}

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle != null){
     
     particle.display();

     var pos = particle.body.position;

     if(pos.y > 760){
       if(pos.x < 300){
         score = score + 500;
         particle = null;
          if(count >= 5){
            gamestate = "end";
          }
        }
     }

     if(pos.y > 760){
      if(pos.x > 301 && pos.x < 560){
        score = score + 100;
        particle = null;
         if(count >= 5){
         gamestate = "end";
         }
       }
    }

    if(pos.y > 760){
      if(pos.x > 601 && pos.x < 900){
        score = score + 200;
        particle = null;
         if(count >= 5){
         gamestate = "end";
         }
       }
    }
   }

   if(gameState === "end"){
     text("Game Over",200,200);
   }
}

function mousePressed(){
  if(gameState !== "end"){
  count++;
  particle = new Particle(mouseX,10,10,10);
  }
}