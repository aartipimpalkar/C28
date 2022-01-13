const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var backgroundImg;
var myEngine, myWorld;
var box1, pig1,platform;
var constrainedLog,sling1;

function setup(){
    var canvas = createCanvas(1200,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;
   
    backgroundImg=loadImage("sprites/bg.png")
    
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    constrainedLog=new Log(230,180,80,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    sling1=new SlingShot(bird.body,{x:200, y:100});
    
  
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);
  //  console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //constrainedLog.display();

    //line(bird.body.position.x,bird.body.position.y,constrainedLog.body.position.x,constrainedLog.body.position.y);
    sling1.display();
}

function mouseDragged()
{
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    sling1.fly();
}