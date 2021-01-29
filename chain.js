class Chain{
constructor(bodyA,bodyB){
    var chain_options={
        length:10,
        stiffness:0.4,
        bodyB:log6.body,
        bodyA:bird.body
    }
    this.chain =Constraint.create(chain_options);
    World.add(world,this.chain);
}
    display(){
        push();
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(10);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();

    } 

    








}