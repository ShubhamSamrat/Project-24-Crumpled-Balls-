
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670,800,20);
	//Drawing DUSTBIN
	binLeft = new Bin(600,610,20,100);
	binRight = new Bin(750,610,20,100);
	binBottom = new Bin(675,650,150,20);

	//Draw Paper
	paper = new Paper(100,635);
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  Engine.update(engine);


  ground.display();
  binBottom.display();
  binLeft.display();
  binRight.display();
  paper.display(); 

  if(paper.body.position.x > 634 && paper.body.position.y >614){

	textSize(30);
	text("Well Done,....Clean Environment, Green Environment",50,100);
;  }


  
  

 
 
}

function keyPressed() {

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :100, y:-95});

	}
}




