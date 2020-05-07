const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box = []
var backgroundImg,platform;
var a = 0;
var score = 0;
var a=0
var chain 
var score = 0

function preload() {
    backgroundImg = loadImage("sprites/back.jpg");
    box1 = loadImage("sprites/box.png");
    eraser = loadImage("sprites/eraser.png");
    pencil = loadImage("sprites/pencil.png");
    scale = loadImage("sprites/scale.png");
    book = loadImage("sprites/book.png");
    bag = loadImage("sprites/bag.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(520,height,1100,20);

    ground1 = new Ground(600,0,1200,20);

    ground2 = new Ground(1200,300,20,1200);

    ground3 = new Ground(0,300,20,1200);

    ground4 = new Ground(1060,550,20,100)
    ground5 = new Ground(1170,550,20,100)
    

    box[0] = new Box(810,160,60,60);
    box[0].image = book
    box[1] = new Box(700,180,60,60);
    box[1].image = eraser
    box[2] = new Box(710,180,60,60);
    box[2].image = pencil
    box[3] = new Box(810,160,60,60);
    box[3].image = scale
    box[4] = new Box(810,160,60,60);
    box[4].image = box1
    
    chain = new Chain(box[0].body,{x:200,y:500})
    


    log5 = new Log(1100,530,270,230);
    log5.image = bag


    //console.log(box2.body.speed)

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(5);
    stroke("black")
    textSize(32);
    fill("yellow")
    text("SCORE - " + score + " / 250",450,50)
    fill("green")
    text("Help Me In Packing My Bag ",400,100)
    fill("blue")
    text("Press Space For Next Object",400,180)

   
    ground.display();
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    
    for(i=0;i<5;i++)
    {
      box[i].display();
      box[i].score();
    }
    chain.display()


    log5.display();


    //bird.display();
    console.log(score)
    if(score===250){
        textSize(72)
        fill("yellow")
        text("Winner",600,300)
    }

}
function mouseDragged(){

Matter.Body.setPosition(box[a].body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
chain.release();
a = a+1
}
function keyPressed(){
    if(keyCode===32)
    {   
        chain.attach(box[a].body);

    }
}