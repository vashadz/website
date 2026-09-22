let img;
let legx, legy;
let bx, by;
let bone_curve1 = 10;
let bone_curve2 = 5;
let bone_height = 7;
let hx, hy;
let dx, dy;
let center_x, center_y, skull_x, skull_y;
let r1, g1, b1, g;

function setup() {
  createCanvas(400, 600);
  noStroke();
  fill(218, 207, 227);
  rectMode(CENTER)
  rect(width / 2, height / 6, width, height / 3); // upper rect
  fill(172, 250, 202);
  rect(width / 2, height / 2, width, height / 3); // middle rect
  fill(181, 160, 127);
  rect(width / 2, (5 * height) / 6, width, height / 3); // down rect
}



function draw() {

  
    for(let i=150; i<=width*10; i+=500){
    for (let j=150; j<=height*10; j+=500){
    skull(i,j);
    }
  }

  
  stroke(255);

  push();
  rotate(PI / 40);
  translate(15, -20);
  torso(width / 2, height / 3);
  pop();

  hands(width / 2, height / 2);
  neck(width / 2, height / 3);
  head((1.5 * width) / 6, height / 6, 255, 224, 189);
  push();
//tilt the head (?)?????
  head((4.5 * width) / 6, height / 6, 224, 172, 105);
  pop()
  push();
  translate(10, 0);
  legs((3 * width) / 8, (2 * height) / 3);
  pop()
  push();
  translate(-5, 35);
  scale(0.9);
  lips((1.5 * width) / 6, 1.05*height / 6);
  pop();
  push();
  translate(+15, 35);
  scale(0.9);
  lips((4.5 * width) / 6, 1.05*height / 6);
  pop();
  
  
}

function legs(legx, legy) {
  push();
  strokeWeight(8);
  stroke(107,150,17);
  //fill(224, 172, 105);
  fill(31, 71, 151);

  beginShape();
  vertex(legx + 185, legy + 215);
  bezierVertex(
    legx + 185,
    legy + 221,
    legx + 136,
    legy + 238,
    legx + 115,
    legy + 218
  );
  bezierVertex(
    legx + 106,
    legy + 210,
    legx + 75,
    legy + 213,
    legx + 82,
    legy + 199
  );
  bezierVertex(
    legx + 90,
    legy + 182,
    legx + 85,
    legy + 186,
    legx + 71,
    legy + 183
  );
  bezierVertex(
    legx + 40,
    legy + 177,
    legx + 31,
    legy + 180,
    legx + 14,
    legy + 175
  );
  bezierVertex(
    legx - 2,
    legy + 170,
    legx - 12,
    legy + 163,
    legx - 18,
    legy + 158
  );
  bezierVertex(
    legx - 29,
    legy + 149,
    legx - 54,
    legy + 130,
    legx - 57,
    legy + 100
  );
  bezierVertex(
    legx - 57,
    legy + 98,
    legx - 59,
    legy + 69,
    legx - 40,
    legy + 50
  );
  bezierVertex(legx - 26, legy + 36, legx, legy + 24, legx - 1, legy + 19);
  bezierVertex(legx - 1, legy + 18, legx - 2, legy + 17, legx - 3, legy + 14);
  bezierVertex(legx - 4, legy + 12, legx - 5, legy + 10, legx - 6, legy + 9);
  bezierVertex(legx - 8, legy + 5, legx - 9, legy - 1, legx - 9, legy - 4);
  bezierVertex(legx - 7, legy - 15, legx + 61, legy - 25, legx + 71, legy - 4);
  bezierVertex(legx + 76, legy + 8, legx + 62, legy + 22, legx + 67, legy + 26);
  bezierVertex(legx + 72, legy + 31, legx + 88, legy + 14, legx + 116, legy);
  bezierVertex(
    legx + 143,
    legy - 14,
    legx + 220,
    legy - 61,
    legx + 227,
    legy + 10
  );
  bezierVertex(
    legx + 228,
    legy + 27,
    legx + 229,
    legy + 46,
    legx + 229,
    legy + 64
  );
  bezierVertex(
    legx + 230,
    legy + 107,
    legx + 199,
    legy + 136,
    legx + 190,
    legy + 146
  );
  bezierVertex(
    legx + 160,
    legy + 181,
    legx + 137,
    legy + 191,
    legx + 140,
    legy + 203
  );
  bezierVertex(
    legx + 143,
    legy + 217,
    legx + 185,
    legy + 210,
    legx + 285,
    legy + 215
  );
  endShape();
  noFill();
  beginShape();
  vertex(legx - 5, 459);
  bezierVertex(
    legx + 34,
    legy + 46,
    legx + 61,
    legy + 61,
    legx + 80,
    legy + 76
  );
  bezierVertex(
    legx + 92,
    legy + 85,
    legx + 112,
    legy + 110,
    legx + 122,
    legy + 115
  );
  bezierVertex(
    legx + 122,
    legy + 115,
    legx + 130,
    legy + 98,
    legx + 140,
    legy + 85
  );
  bezierVertex(
    legx + 164,
    legy + 50,
    legx + 180,
    legy + 27,
    legx + 180,
    legy + 27
  );
  bezierVertex(
    legx + 181,
    legy + 28,
    legx + 124,
    legy + 93,
    legx + 82,
    legy + 199
  );
  bezierVertex(
    legx + 77,
    legy + 210,
    legx + 84,
    legy + 192,
    legx + 82,
    legy + 199
  );
  endShape();
  pop();
}

function torso(bx, by) {
  //center piece
  push();
  fill(255, 219, 172);
  stroke(250, 210, 160);
  strokeWeight(26);
  strokeJoin(ROUND);
  //triangle(width / 2, height / 2, bx - 80, by + 18, bx + 80, by + 18);
  pop();
  fill(224, 172, 105);
  rectMode(CENTER);
  rect(bx, height / 2, 15, height / 3, bone_curve1);
  rect(bx, (5 * height) / 12, 15, height / 6, bone_curve1);
  ellipse(bx, by + (10 * height) / 54, 15, 5);
  ellipse(bx, by + 11 * (height / 54), 15, 5);
  ellipse(bx, by + 12 * (height / 54), 15, 5);
  ellipse(bx, by + 13 * (height / 54), 15, 6);
  ellipse(bx, by + 14 * (height / 54), 20, 7);
  ellipse(bx, by + 15 * (height / 54), 30, 8);
  ellipse(bx, by + 16 * (height / 54), 40, 9);
  ellipse(bx, by + 17 * (height / 54), 50, 10);
  //left side

  rect(
    bx - 0.7 * (width / 6),
    by + height / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (2 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (3 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (4 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (5 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (6 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (7 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (8 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (9 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (10 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (11 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx - 0.7 * (width / 6),
    by + (12 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  //right side
  rect(
    bx + 0.7 * (width / 6),
    by + height / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (2 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (3 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (4 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (5 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (6 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (7 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (8 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (9 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (10 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (11 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
  rect(
    bx + 0.7 * (width / 6),
    by + (12 * height) / 54,
    width / 6,
    bone_height,
    bone_curve2
  );
}

function hands(center_x, center_y) {
 fill(224, 172, 105)
  //left side
  ellipse(center_x - 90, center_y - 80, 25, 25);
  ellipse(center_x - (2 * width) / 6, center_y, 25, 25);
  arc(
    center_x - (1.8 * width) / 6,
    center_y + 100,
    25,
    25,
    0,
    (2 * PI) / 3 + HALF_PI,
    CHORD
  );
  //right side
  ellipse(center_x + 90, center_y - 80, 25, 25);
  ellipse(center_x + 1.5* width / 6, center_y+10, 25, 25);
  arc(
    center_x + (1.8 * width) / 6,
    center_y + 100,
    25,
    25,
    (2 * PI) / 3 + HALF_PI,
    0,
    CHORD
  );
  //arms
  arc(
    center_x - 110,
    center_y - 30,
    center_x - 180,
    center_y - 200,
    PI / 4,
    -PI / 2,
    CHORD
  );
  arc(
    center_x + 110,
    center_y - 30,
    center_x - 180,
    center_y - 200,
    (3 * PI) / 4,
    PI / 2,
    CHORD
  );
  arc(
    center_x - 120,
    center_y + 55,
    center_x - 190,
    center_y - 220,
    -PI / 4,
    (3 * PI) / 2,
    CHORD
  );
  arc(
    center_x + 100,
    center_y + 65,
    center_x - 190,
    center_y - 220,
    (3 * PI) / 4,
    PI / 2,
    CHORD
  );
}

function head(hx, hy, r1, g1, b1) {
  push();
  fill(144, 84, 47);
  ellipse(hx, hy - 15, hy - 20, hy);
  fill(183, 119, 41);
  // blendMode(MULTIPLY)
  ellipse(hx - 20, hy - 20, 50, hy - 20);
  ellipse(hx + 20, hy - 20, 50, hy - 20);
  ellipse(hx - 20, hy - 20, 50, hy - 20);
  pop();
  fill(r1, g1, b1);
  ellipse(hx, hy, width / 6, height / 6);

  //eyes
  push();
  noStroke();
  fill(255);
  ellipse(hx - 15, hy - 5, 10, 22);
  ellipse(hx + 15, hy - 5, 10, 22);
  fill(99, 57, 15);
  ellipse(hx - 15, hy - 5, 8, 11);
  ellipse(hx + 15, hy - 5, 8, 11);
  fill(0);
  ellipse(hx - 15, hy - 5, 5, 5);
  ellipse(hx + 15, hy - 5, 5, 5);
  pop();



  //brows
  stroke(144, 84, 47, 75);
  arc(hx - 15, hy - 18, hy / 10, hy / 20, PI, 0, OPEN);
  arc(hx + 15, hy - 18, hy / 10, hy / 20, PI, 0, OPEN);
}

function closed_eyes(hx,hy){
    //closed eyes
  stroke(144, 84, 47, 50);
  ellipse(hx - 15, hy - 5, 10, 22);
  ellipse(hx + 15, hy - 5, 10, 22);
}

function skull(skull_x, skull_y) {
  push();
  scale(0.1);
  fill(255);
  ellipse(skull_x, skull_y, 300, 200);
  rect(skull_x - 25, skull_y + 50, 150, 100);
  fill(0);
  // eyes.
  ellipse(skull_x - 25, skull_y, 50, 50);
  ellipse(skull_x + 125, skull_y, 50, 50);
  // teeth
  rect(skull_x - 50, skull_y + 100, 10, 50);
  rect(skull_x, skull_y + 100, 10, 50);
  rect(skull_x + 50, skull_y + 100, 10, 50);
  pop();
}

function lips(x, y) {
  fill(255, 0, 0);
  stroke(220);
  beginShape();
  curveVertex(x, y);
  curveVertex(x, y);
  curveVertex(x + 11, y - 10);
  curveVertex(x + 16, y - 7);
  curveVertex(x + 23, y - 11);
  curveVertex(x + 29, y - 10);
  curveVertex(x + 37, y - 10);
  curveVertex(x + 29, y - 1);
  curveVertex(x + 19, y + 4);
  curveVertex(x + 6, y + 3);
  curveVertex(x, y);
  curveVertex(x, y);
  endShape(CLOSE);
}

function neck(nx, ny) {
  // gradient fill (?)
  fill(224, 172, 105);
  beginShape();
  vertex(nx - 108, ny - 59);
  bezierVertex(nx - 88, ny - 75, nx - 13, ny - 21, nx + 10, ny - 26);
  bezierVertex(nx + 49, ny - 34, nx + 89, ny - 83, nx + 100, ny - 71);
  bezierVertex(nx + 107, ny - 63, nx + 27, ny + 2, nx + 4, ny + 4);
  bezierVertex(nx - 20, ny + 5, nx - 115, ny - 53, nx - 108, ny - 59);
  endShape();
}

