
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, binpart1, binpart2, binpart3, paper, dustbin, dustbinimage, paper2, paper3, paper4;
var press_count;

function preload() {
	dustbinimage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;
  
  press_count = 0;

	ground = new Ground(500, 380, 1000, 10);
	binpart1 = new BinPart(850, 365, 100, 10);
	binpart2 = new BinPart(800, 310, 10, 110);
	binpart3 = new BinPart(900, 310, 10, 110);
  paper = new Paper(100, 361, 40);
  dustbin = Bodies.rectangle(850, 312, 126, 126);
    
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  ellipseMode(CENTER);
  
  paper.display();
  rectMode(CENTER);
  ground.display();
  binpart1.display();
  binpart2.display();
  binpart3.display();
  
  imageMode(CENTER);
  image(dustbinimage, dustbin.position.x, dustbin.position.y, 126, 126);
  
  if(keyCode === UP_ARROW) {
    Body.applyForce(paper.body, paper.body.position, {x:2, y:-2});
  }
  if(keyCode === DOWN_ARROW) {
    Body.applyForce(paper.body, paper.body.position, {x:0, y:3});
  }
 
  drawSprites();
 
}



