const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope;
var fruit;
var fruit_con;

function preload(){
  bg_img=loadImage("background.png");
  food=loadImage("melon.png");
  rabbit=loadImage("Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  bunny = createSprite(250,620,100,100);
  bunny.addImage(rabbit);
  bunny.scale = 0.2;

  button = createImg("cut_btn.png");
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  ground = new Ground(200,690,600,20);
  rope = new Rope(6,{x:245,y:30});

  var fruit_options = {
    density:0.001
  }

  fruit = Bodies.circle(300,300,15,fruit_options);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode(CENTER);
}

function draw() 
{
  background(51);
  image (bg_img,width/2, height/2,500,700);
  ground.show();
  Engine.update(engine);
   rope.show();
   image(food,fruit.position.x,fruit.position.y,60,60);

   drawSprites();
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null;
}




