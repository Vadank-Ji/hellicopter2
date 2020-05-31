const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World=  Matter.World;

var engine, world, ground;
var load, box;
function preload(){

   load = loadImage("helicopter.png");

}

var box1, r1;
function setup()
{

	createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;

var fil = {fillStyle:'red'}


 	box1 = new Box(300, 200, 50, 50);

 var is_static = { isStatic: true}

 	ground = Bodies.rectangle(600, 780, 1200, 20, is_static)
 	World.add(world, ground);

  r1 = new Box(400 , 778 , 20, 120)


  r2 = new Box(200 , 778 , 20, 120);

  r3 = new Box(300 , 778 , 200, 20, is_static);

//  box = new Vessel(300, 770, 20, 65, 20, 30,30, 29, is_static);


   box1.body.restitution = 1.8;

}


function draw()
{


   background("white");

   Engine.update(engine);

   r1.display();
   r2.display();
   r3.display();
 //matter.body.restitution = 2;
   box1.display();
  // box.display();



	 //evessel.display()

   rect(ground.position.x, ground.position.y, 1200, 20)

   image(load, 200, 100, 250, 150);

     //box1.restitution = 2;

}
