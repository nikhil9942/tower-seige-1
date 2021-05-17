const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var polygon;

function preload(){
  
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,210,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //second stand level 1
 block17=new Block(610,185,30,40)
 block18=new Block(640,185,30,40)
 block19=new Block(670,185,30,40)
block20=new Block(700,185,30,40)
block21=new Block(730,185,30,40)
block22=new Block(760,185,30,40)
block23=new Block(790,185,30,40)

//second stand level 2
block24=new Block(640,145,30,40)
block25=new Block(670,145,30,40)
block26=new Block(700,145,30,40)
block27=new Block(730,145,30,40)
block28=new Block(760,145,30,40)

//second stand level 3
block29=new Block(670,130,30,40)
block30=new Block(700,130,30,40)
block31=new Block(730,130,30,40)

//second stand top
block32=new Block(700,115,30,40)


//polygon
polygon=new Polygon(100,100,30,40)

holder=createSprite(100,100,30,40)


//constraining polygon
chain=new Chain (polygon.body,holder.body) 

mouseDragged()

mouseReleased()

  
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  polygon.display();

  
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue")
  block17.display();
  block18.display();
  block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();

 fill("pink")
 block24.display();
 block25.display();
 block26.display();
 block27.display();
 block28.display();

 fill("turqouise")
 block29.display();
 block30.display();
 block31.display();

 
 fill("grey")
 block32.display();
 console.log(block23.x,block23.y)

 holder.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  Chain.fly();
}
