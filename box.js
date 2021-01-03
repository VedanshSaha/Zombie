

class Boxy {
    constructor(x,y,width,height) {
      var options = {
        isStatic:true
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      this.width = width;
      this.height = height;
    }
  
    display() {
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle);
      fill(255);
      push();
      stroke(255)
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
      pop();
    }
  }