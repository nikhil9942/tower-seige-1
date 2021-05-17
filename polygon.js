class Polygon{
    constructor(x,y,sides,radius,options){
var options={
    density:1,
    frictionAir:0.05
}
this.body=Bodies.polygon(x,y,sides,radius,options)
this.sides=sides
this.radius=radius
this.image=loadImage("polygon.png")
World.add(world,this.body)

    }
    display(){
        
push()
translate(this.body.position.x,this.body.position.y)
    
    ellipse(0,0,this.sides,this.radius)
    imageMode(CENTER)
    image(this.image, 0, 0, 40, 50);
    pop()
    }

}