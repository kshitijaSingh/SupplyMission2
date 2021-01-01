class Stick{
  constructor(x,y,width,heigth);
    var options = {
      isStatic : true

 }

 this.body = Bodies.rectangle(x,y,20,heigth,option);
 this.width = 20;
 this.heigth = heigth; 
 Matter.Body.setStatic(this.body,false) 

 World.add(world,this.body);

 
}
