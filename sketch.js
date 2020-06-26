const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ball1,basket1,ground1,engine,world,sling1,wall1,wall2;

function setup(){

 var canvas = createCanvas(800,700);
engine = Engine.create();
world = engine.world;


 ground1=new ground(400,650,width,20)
ball1=new ball(200,350,30,30)
basket1=new basket(600,630,150,20)
sling1=new sling(ball1.body,{x:200,y:350})

wall1=new basket(525,570,20,100)

wall2=new basket(675,570,20,100)












}
function draw(){




    background("black");  
    Engine.update(engine);

ground1.display();
ball1.display();
basket1.display();
wall1.display();
wall2.display();

















}
function mouseDragged(){


    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
    
    
    
    
    
    
    
    }
    function mouseReleased(){
    
    
    
    sling1.fly();
    }