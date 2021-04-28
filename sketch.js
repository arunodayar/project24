const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
	
}

function setup() {
	var canvas=createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	ground = new Ground(600,height,1500,20);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball=new Paperball(50,60)

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  	rectMode(CENTER);
  	background(0);

  	ground.display();
	paperball.display();

 	drawSprites();
 
}
function keyPressed(){
	if(keycode===UP_ARROW){ 
		Matter.Body.applyForce(paperObject.body,paperObject.Body.position,{x:85,y:-85});
	}
}



