class Polygon{
    constructor(x,y) {
        var options = {
            'isStatic':false,
            'restitution':0.8,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.circle(x,y,5, options);
        
        World.add(world,this.body);
        this.image=loadImage("polygon.png");

    }

   
   
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
       push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);

        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    
    }
}