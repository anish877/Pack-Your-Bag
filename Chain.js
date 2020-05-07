class Chain{

constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness : 0.08,
length : 10

}
this.chain1 = loadImage("sprites/sling1.png")
this.chain2 = loadImage("sprites/sling2.png")
this.chain3 = loadImage("sprites/sling3.png")
this.pointB = pointB
this.chain = Constraint.create(options)
World.add(world,this.chain)

}
release(){
    this.chain.bodyA = null
}
attach(body){
 this.chain.bodyA = body
} 

display()
{


    if(this.chain.bodyA){
var pointA = this.chain.bodyA.position
var pointB = this.pointB
push()
stroke(48,22,8)

if(pointA.x < 250) {
    strokeWeight(0)
line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
}
else{
    strokeWeight(0);
    line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
    line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);

}
    }

}



}