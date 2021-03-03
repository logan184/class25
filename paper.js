class paper  {
    constructor(x,y,radius)
{  'isStatic:false',
    'restitution:0.3',
    'friction:0.5',
    'density:1.2'

this.image=loadImage("paper.png")
this.body = Bodies.circle(x, y, radius);
this.radius=radius;
World.add(world, this.body);
}
display() {
    var angle = this.body.angle;
    push();
    rotate(angle);
    fill("yellow")
    ellipse(0, 0,this.radius/2,this.radius/2);
    pop();
}


}
