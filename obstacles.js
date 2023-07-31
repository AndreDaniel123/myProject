class Obstacles {
    constructor(x, y, l, h ) {
        this.x = x
        this.y = y
        this.l = l
        this.h = h
    
        this.image = loadImage("assets/tower.png")


    }
    display() {
        push();
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();



    }
}