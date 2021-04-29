class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.6,
            friction:100,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.Visibility = 225;
        
        World.add(world,this.body);
    }
    display(){
    if (this.body.speed<3){
     var pos =this.body.position;
    var angle=this.body.angle; 
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    //fill("blue");
    rect(0,0,this.width,this.height);
    pop();
    }else{
        world.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        rect(999,999,this.width,this.height);
        pop();
    }
    }
};
