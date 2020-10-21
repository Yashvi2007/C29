class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
         }
        //load the static images(images that do not intract with any other object)
        //since they are static, we do not create a body in the physics engine for them
         this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3= loadImage("sprites/sling3.png");
         this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //display the slingShot
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            //use push and pop so that the changes do not apply to the entire game
            push();
            //give brown color to the lines whivh represent the rubber band
            //r= 48, g=22, b=8 from colorGizla
            stroke(48, 22, 8);
            //this is a solution for bringing the base of the band infront of the bird when the bird pulled infront of the catapult 
            if(pointA.x < 220){
                //draw the rubber band 
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
           image(this.sling3, pointA.x-30, pointA.y-10, 15, 30);
           //make the rubber band look thinker when streagthed
           strokeWeight(7);
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
               image(this.sling3, pointA.x+25, pointA.y-10, 15, 30);
                strokeWeight(3);
            }
            pop(); 
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}