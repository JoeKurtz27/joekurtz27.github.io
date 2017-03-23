var e1, e2, e3;

function setup() {
  createCanvas(720, 400);
  noStroke();
  e1 = new Eye(250, 16, 120);
  e2 = new Eye(164, 185, 80);
  e3 = new Eye(420, 230, 220);
}

function draw() {
  background(102);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(153, 204, 0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}

//function setup(){
  //createCanvas(1000,400);
  //background(0,255,0);


//fill(100,100,100,100);
//stroke(0,0,255);


//rect(200,50,100,100);
//ellipse(250,100,100,100);
//triangle(219,140,281,140,250,50);

//rect(300,50,100,100);
//ellipse(350,100,100,100);
//triangle(319,140,381,140,350,50);

//rect(400,50,100,100);
//ellipse(450,100,100,100);
//triangle(419,140,481,140,450,50);
