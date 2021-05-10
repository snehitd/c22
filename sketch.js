const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic: true
  }
  object=Bodies.rectangle(200,300,200,20,options);
  World.add(world,object);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,200,20);
 // rect(200,200,50,50);
  drawSprites();
}