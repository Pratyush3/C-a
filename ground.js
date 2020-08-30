class Ground {
    constructor(x,y,width,height){
        var op = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,op);
        this.width = width;
        this.ht = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(220);
        rect(pos.x,pos.y,this.width,this.ht);
    }

    
}