const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var myWorld , myEngine,ground, ground_properties,ball,ball_properties

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground_properties = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200, 390, 400, 20, ground_properties); 
  World.add(myWorld, ground); 

var ball_properties = {

  'restitution' : 0.8
}


  ball = Bodies.circle(200,200,20,ball_properties)

  World.add(myWorld,ball)
}


function draw() {
  background(0);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(200,200,50,50)
  rect(ground.position.x,ground.position.y, 400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y ,20,20)
}