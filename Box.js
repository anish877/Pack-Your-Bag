class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    Matter.Body.setMass(this.body,2500)

  }
display(){
  if(this.body){
  if(this.body.position.y<610){
  
super.display()}
else{
  this.body = null
}}}

score(){
  if(this.body === null )
  {
    score = score + 50
    this.body = undefined
  }
}



}


    
  



