const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var backgroundImg;
var snow= [];

function setup() {
  createCanvas(800,400);
 engine=Engine.create();
  world= engine.world;


  backgroundImg= loadImage("snow1.jpg");
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-10, width/2+10), 10,10));
    
  }

  //display the paricles 
  for (var d = 0; d < snow.length; d++) {
    snow[d].display();
  }
  drawSprites();
}

  
