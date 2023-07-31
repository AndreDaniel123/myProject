class catapult{
    consructor(x,y,width,height,angle)
    {
    this.y = y;
    this.x=x
    this.angle = angle;
    this.width = width
    this.height = height
    this.woodBase = loadImage("assets/woodBox.png");
    this.woodenSpoon = loadImage("assets/woodSpoon.png")
}
display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle<70  ) {
      this.angle += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle>-30 ) {
      this.angle -= 1;
    }

    image(this.catapult_image,0,0,this.width,this.height)
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.woodenSpoon, 0, 0, this.width, this.height);
    pop();
    image(this.woodenBase, 70, 20, 200, 200);
    noFill();
}

}



