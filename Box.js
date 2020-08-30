class Box{

    //parameterized constructors
    constructor(x,y,width,height){
        //used to initialize the properties

        var options = {
            restitution: 0.8
           
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        console.log(this.body)
        World.add(world,this.body);

    }
    
    display(){

       var pos =  this.body.position;
       var angle = this.body.angle;
       //when you need objects to topple

       //used to save your previous changes or settings
       push();
       translate(pos.x,pos.y);
       rotate(angle);

       rectMode(CENTER);
       fill("white");
       rect(0,0,this.w,this.h);
       pop();
        
    }






}