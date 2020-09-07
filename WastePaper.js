class Paper {
    constructor(x, y, radius) {
        var paperoptions = {
            isStatic: false,
            restitution :0.5,
            friction:0.5,
            density:0.5
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, (this.radius-10)/2, paperoptions);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}