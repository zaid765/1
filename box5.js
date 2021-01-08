class Box5{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       
   push();
var pos =this.body.position;     
rectMode(CENTER);
fill("cyan");
strokeWeight(1);
stroke("black");
rect(pos.x, pos.y, this.width, this.height);
   pop();
    }
}