  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball
function setup() {
  createCanvas(400,400);
 engine=Engine.create()
 world=engine.world
 var ground_properties ={
  isStatic: true
}
var ball_properties ={
  restitution: 1
}
ground=Bodies.rectangle(0,350,400,20,ground_properties)
World.add(world,ground,)
ball=Bodies.circle(200,100,20, ball_properties)
World.add(world,ball)
console.log(ball)
}

function draw() {
  background("black");
  Engine.update(engine);
   
  rect(ground.position.x,ground.position.y,400,20);
  rectMode(CENTER)
  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}