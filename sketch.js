
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var stone, iron, rubber, plane, hammer;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8;


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,600,1200,20)

	stone = new Stone(700,320,50,50)
	iron  = new Iron(950,400)
	rubber = new Rubber(900,450,70)
	hammer = new Hammer(10,100)

	sand1 = new Sand(500,450,10);
	sand2 = new Sand(505,450,10);
	sand3 = new Sand(510,450,10);
	sand4 = new Sand(515,450,10);
	sand5 = new Sand(525,455,10);
	sand6 = new Sand(530,455,10);
	sand7 = new Sand(535,455,10);
	sand8 = new Sand(540,455,10);


	Engine.run(engine);
  
}


function draw() {

  background("lightBlue");
  Engine.update(engine)



 stone.display();
 plane.display();
 iron.display();
 rubber.display();
 
 hammer.display();
 
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();
 sand8.display();
}