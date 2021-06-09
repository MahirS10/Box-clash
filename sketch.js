const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(200,400,800,20);
  box1=new Box (200,300,50,50);
  box2=new Box (225,100,50,50);


  

}

function draw() {
  background(255,255,255);  
 
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  
}