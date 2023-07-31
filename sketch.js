
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var tower
var obstacle1

var score=0

var backgroundImg
var StoneImg

function preload (){
backgroundImg = loadImage("assets/warBackground.png")
StoneImg = loadImage("assets/stone.png")
towerImg = loadImage("assets/tower.png")


}

function setup() {
 canvas = createCanvas(2000,1000);

  engine = Engine.create();
  world = engine.world;

  obstacle1 = new Obstacles(1000,600,100,200)
  catapult1 = new catapult(100,200,200,90)
  
}


function draw() 
{
  
  image(backgroundImg,0,0,2000,1000);

  image(towerImg,1500,400,200,400)
  
  
 
 
  Engine.update(engine);
  catapult1.display()
  obstacle1.display()
  
}

