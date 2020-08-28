class Paper {

    constructor(x,y){
       var option = {
           restitution : 0.3,
           friction : 0.5,
           density : 1.2,
           isStatic : false
       }

       this.body = Bodies.circle(x,y,25,option); 
       World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        
        push();
        rectMode(CENTER);
        translate(position.x,position.y);
        angleMode(RADIANS);
        rotate(angle);
        fill("blue");
        ellipse(0,0,50);
        pop();
        




    }
    


}