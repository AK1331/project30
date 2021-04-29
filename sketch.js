const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var polygon;

var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16;
 

var ground,ground2;

//var launcher,launcher2;
var chain


function setup(){
    var canvas = createCanvas(800,650);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,550,800,10);
    ground2 = new Ground(600,430,200,10);

    box1 = new Box(530,425,25,30);
    box2 = new Box(555,425,25,30);
    box3 = new Box(580,425,25,30);
    box4 = new Box(605,425,25,30);
    box5 = new Box(630,425,25,30);
    box6 = new Box(655,425,25,30);
    box7 = new Box(683,425,25,30);


    box8 = new Box(555,405,25,30);
    box9 = new Box(580,405,25,30);
    box10 = new Box(605,405,25,30);
    box11 = new Box(630,405,25,30);
    box12 = new Box(655,385,25,30); 

    
    box13 = new Box(580,385,25,30);
    box14 = new Box(605,385,25,30);
    box15 = new Box(630,350,25,30);

    box16 = new Box(605,350,25,30);
    

    polygon = new Polygon(150,400);

    

    chain = new Chain(polygon.body,{x:150,y:400});


    Engine.run(engine);


}

function draw(){
    background(0);
    

    ground.display();
    ground2.display();
   
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
   
    fill("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   
    fill("yellow");
    box13.display();
    box14.display();
    box15.display();
    
    fill("green");
    box16.display();
   
    polygon.display();
    chain.display();
   
    

    



    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if (keycode === 32){
        chain.attach(this.polygon);
    }
}
