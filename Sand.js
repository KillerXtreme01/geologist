class Sand{
    constructor(x, y){
        var options = {
            'density':1,
            'friction':5.0,
            'restitution':0.3
        }
        this.x = x
        this.y = y
        this.r = 10
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        World.add(world, this.body)   
    } 
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        strokeWeight(4)
        stroke("black")
        fill("red")
        rectMode(CENTER)
        ellipse(0, 0, this.r, this.r);
        pop()
    }
}