let button1;
let face = 1;
let modi, modi2, modi3, modi4, modi5, modi6;
let r, g, b, r2, g2, b2, r3, g3, b3, r4, g4, b4, r6;

function setup() {
  createCanvas(400, 400);
  background(100, 19, 59);
  button1 = createButton("Background");
  button1.position(410, 0);
  button1.size(30, 30);
  button1.mousePressed(changeBG);

  modi = loadImage("modi.jpg");
  modi2 = loadImage("modi2.jpeg");
  modi3 = loadImage("modi3.jpg");
  modi4 = loadImage("modi4.jpg");
  modi5 = loadImage("modi5.jpg");
  modi6 = loadImage("modi6.jpg");
  modi7 = loadImage("modi7.jpg");
  modi8 = loadImage("modi8.jpg");

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  r2 = random(0, 255);
  g2 = random(0, 255);
  b2 = random(0, 255);
  r3 = random(0, 255);
  g3 = random(0, 255);
  b3 = random(0, 255);
  r4 = random(0, 255);
  g4 = random(0, 255);
  b4 = random(0, 255);
  r6 = random(0, 255);
}

function draw() {
  /*
  background(222);
  image(modi6, width / 10, 0, modi2.width / 2, modi2.height / 2);

  //the x,y axis coordinates
  text(mouseX + " , " + mouseY, 20, 20);

  //grid
  stroke(255);
  for (var i = 0; i < width; i += 10) {
    line(i, 0, i, height);
    line(width, i, 0, i);
  }
*/

  
  if (face === 1) {
    //hair
    fill(r2, g2, b2);
    stroke(0);
    beginShape();
    curveVertex(114, 0);
    curveVertex(114, 0);
    curveVertex(109, 5);
    curveVertex(92, 38);
    curveVertex(93, 69);
    curveVertex(96, 83);
    curveVertex(94, 102);
    curveVertex(92, 115);
    curveVertex(93, 130);
    curveVertex(107, 152);
    curveVertex(104, 174);
    curveVertex(116, 216);
    curveVertex(141, 242);
    curveVertex(149, 249);
    curveVertex(152, 257);
    curveVertex(159, 259);
    curveVertex(251, 294);
    curveVertex(262, 222);
    curveVertex(263, 216);
    curveVertex(279, 205);
    curveVertex(286, 180);
    curveVertex(284, 161);
    curveVertex(293, 142);
    curveVertex(305, 100);
    curveVertex(282, 61);
    curveVertex(272, 19);
    curveVertex(249, 0);
    endShape(CLOSE);

    //face

    stroke(0);
    fill(254, 227, 212);
    beginShape();
    curveVertex(170, 41);
    curveVertex(147, 56);
    curveVertex(129, 84);
    curveVertex(130, 186);
    curveVertex(162, 245);
    curveVertex(193, 274);
    curveVertex(211, 278);
    curveVertex(229, 272);
    curveVertex(245, 253);
    curveVertex(254, 230);
    curveVertex(262, 207);
    curveVertex(270, 169);
    curveVertex(260, 108);
    curveVertex(221, 47);
    endShape(CLOSE);

    //neck
    fill(254, 227, 212);
    stroke(0);
    beginShape();
    curveVertex(158, 241);
    curveVertex(158, 241);
    curveVertex(159, 305);
    curveVertex(158, 320);
    curveVertex(154, 339);
    curveVertex(154, 349);
    curveVertex(164, 370);
    curveVertex(172, 379);
    curveVertex(177, 390);
    curveVertex(179, 400);
    curveVertex(236, 400);
    curveVertex(240, 389);
    curveVertex(246, 378);
    curveVertex(248, 359);
    curveVertex(244, 351);
    curveVertex(248, 327);
    curveVertex(247, 325);
    curveVertex(252, 279);
    curveVertex(256, 227);
    curveVertex(254, 230);
    curveVertex(245, 253);
    curveVertex(229, 272);
    curveVertex(211, 278);
    curveVertex(193, 274);
    curveVertex(162, 245);
    endShape(CLOSE);

    //jacket
    fill(r, g, b);
    beginShape();
    curveVertex(159, 311);
    curveVertex(159, 311);
    curveVertex(132, 332);
    curveVertex(120, 351);
    curveVertex(98, 370);
    curveVertex(79, 382);
    curveVertex(63, 393);
    curveVertex(55, 400);
    curveVertex(362, 400);
    curveVertex(352, 390);
    curveVertex(333, 379);
    curveVertex(321, 374);
    curveVertex(311, 359);
    curveVertex(284, 340);
    curveVertex(269, 333);
    curveVertex(248, 325);
    curveVertex(248, 327);
    curveVertex(244, 351);
    curveVertex(248, 359);
    curveVertex(246, 378);
    curveVertex(240, 389);
    curveVertex(236, 400);
    curveVertex(236, 400);
    curveVertex(179, 400);
    curveVertex(177, 390);
    curveVertex(172, 379);
    curveVertex(164, 370);
    curveVertex(154, 349);
    curveVertex(154, 339);
    curveVertex(158, 320);
    curveVertex(159, 305);
    curveVertex(158, 241);
    endShape();

    //nose
    noFill();
    stroke(0);
    beginShape();
    curveVertex(132, 132);
    curveVertex(132, 132);
    curveVertex(146, 127);
    curveVertex(159, 130);
    curveVertex(175, 147);
    curveVertex(179, 162);
    curveVertex(183, 195);
    curveVertex(182, 212);
    curveVertex(180, 217);
    curveVertex(192, 216);
    curveVertex(203, 212);
    curveVertex(206, 213);
    curveVertex(211, 212);
    curveVertex(213, 207);
    curveVertex(204, 199);
    curveVertex(194, 169);
    curveVertex(189, 145);
    curveVertex(195, 128);
    curveVertex(210, 121);
    curveVertex(224, 115);
    curveVertex(235, 115);
    curveVertex(235, 115);
    endShape();

    //lips
    fill(r3, 0, 0);
    stroke(0);
    beginShape();
    curveVertex(180, 237);
    curveVertex(180, 237);
    curveVertex(191, 227);
    curveVertex(196, 230);
    curveVertex(203, 226);
    curveVertex(209, 227);
    curveVertex(217, 227);
    curveVertex(209, 236);
    curveVertex(199, 241);
    curveVertex(186, 240);
    curveVertex(180, 237);
    curveVertex(180, 237);
    endShape(CLOSE);
    stroke(0);
    //LINE
    beginShape();
    curveVertex(180, 237);
    curveVertex(180, 237);
    curveVertex(195, 234);
    curveVertex(199, 233);
    curveVertex(207, 230);
    curveVertex(216, 228);
    curveVertex(216, 228);
    endShape();

    //eyes
    noFill();
    beginShape();
    curveVertex(144, 146);
    curveVertex(149, 143);
    curveVertex(154, 142);
    curveVertex(167, 142);
    curveVertex(158, 147);
    curveVertex(144, 146);
    endShape(CLOSE);

    beginShape();
    curveVertex(205, 138);
    curveVertex(214, 132);
    curveVertex(220, 131);
    curveVertex(226, 130);
    curveVertex(233, 129);
    curveVertex(218, 137);
    curveVertex(205, 138);
    endShape(CLOSE);
  } else if (face === 2) {
    //hair
    //noFill();
    fill(r2, g2, b2);
    stroke(0);
    beginShape();
    curveVertex(160, 113);
    curveVertex(152, 100);
    curveVertex(151, 87);
    curveVertex(149, 66);
    curveVertex(144, 52);
    curveVertex(145, 32);
    curveVertex(158, 11);
    curveVertex(168, 4);
    curveVertex(187, 9);
    curveVertex(200, 27);
    curveVertex(203, 32);
    curveVertex(207, 42);
    curveVertex(212, 54);
    curveVertex(217, 67);
    curveVertex(220, 87);
    curveVertex(221, 96);
    curveVertex(212, 106);
    curveVertex(208, 102);
    curveVertex(173, 107);
    endShape(CLOSE);

    //face
    fill(254, 227, 212);
    stroke(0);
    beginShape();
    curveVertex(167, 25);
    curveVertex(186, 28);
    curveVertex(193, 41);
    curveVertex(200, 57);
    curveVertex(207, 64);
    curveVertex(211, 77);
    curveVertex(210, 121);
    curveVertex(207, 138);
    curveVertex(201, 144);
    curveVertex(188, 144);
    curveVertex(167, 112);
    curveVertex(158, 95);
    curveVertex(152, 76);
    curveVertex(148, 45);
    curveVertex(155, 30);
    endShape(CLOSE);

    //eyes
    beginShape();
    curveVertex(157, 68);
    curveVertex(157, 68);
    curveVertex(163, 64);
    curveVertex(171, 66);
    curveVertex(166, 70);
    curveVertex(159, 68);
    curveVertex(159, 68);
    endShape(CLOSE);

    beginShape();
    curveVertex(178, 64);
    curveVertex(178, 64);
    curveVertex(183, 60);
    curveVertex(189, 61);
    curveVertex(185, 65);
    curveVertex(180, 65);
    curveVertex(177, 63);
    curveVertex(177, 63);
    endShape(CLOSE);

    //lips
    push();
    fill(r6, 0, 0);
    beginShape();
    curveVertex(180, 121);
    curveVertex(184, 120);
    curveVertex(186, 119);
    curveVertex(188, 119);
    curveVertex(190, 117);
    curveVertex(192, 118);
    curveVertex(195, 118);
    curveVertex(195, 118);
    curveVertex(193, 120);
    curveVertex(188, 124);
    curveVertex(183, 124);
    curveVertex(182, 121);
    curveVertex(181, 120);
    curveVertex(181, 120);
    endShape(CLOSE);
    pop();

    //LINES

    beginShape();
    curveVertex(175, 56);
    curveVertex(175, 56);
    curveVertex(182, 53);
    curveVertex(190, 53);
    curveVertex(196, 56);
    curveVertex(196, 56);
    endShape();

    beginShape();
    curveVertex(168, 58);
    curveVertex(168, 58);
    curveVertex(158, 59);
    curveVertex(154, 61);
    curveVertex(152, 65);
    curveVertex(152, 65);
    endShape();

    beginShape();
    curveVertex(170, 65);
    curveVertex(170, 65);
    curveVertex(177, 86);
    curveVertex(181, 108);
    curveVertex(181, 112);
    curveVertex(184, 112);
    curveVertex(188, 111);
    curveVertex(191, 108);
    curveVertex(193, 110);
    curveVertex(195, 107);
    curveVertex(194, 102);
    curveVertex(191, 100);
    endShape();

    //jacket
    fill(r, g, b);
    beginShape();
    curveVertex(179, 152);
    curveVertex(179, 152);
    curveVertex(160, 176);
    curveVertex(135, 193);
    curveVertex(74, 231);
    curveVertex(51, 260);
    curveVertex(44, 297);
    curveVertex(45, 325);
    curveVertex(53, 371);
    curveVertex(69, 400);
    curveVertex(84, 389);
    curveVertex(91, 383);
    curveVertex(101, 385);
    curveVertex(107, 393);
    curveVertex(103, 374);
    curveVertex(92, 337);
    curveVertex(82, 292);
    curveVertex(115, 245);
    curveVertex(122, 269);
    curveVertex(126, 286);
    curveVertex(136, 319);
    curveVertex(151, 352);
    curveVertex(157, 368);
    curveVertex(163, 400);
    curveVertex(306, 400);
    curveVertex(304, 368);
    curveVertex(305, 325);
    curveVertex(299, 273);
    curveVertex(278, 229);
    curveVertex(245, 182);
    curveVertex(233, 167);
    curveVertex(213, 164);
    curveVertex(180, 151);
    curveVertex(180, 151);
    endShape();

    //neck2
    fill(254, 227, 212);
    stroke(0);
    beginShape();
    curveVertex(181, 134);
    curveVertex(181, 178);
    curveVertex(180, 206);
    curveVertex(187, 227);
    curveVertex(202, 265);
    curveVertex(204, 269);
    curveVertex(214, 252);
    curveVertex(224, 232);
    curveVertex(232, 199);
    curveVertex(235, 187);
    curveVertex(215, 176);
    curveVertex(214, 175);
    curveVertex(212, 163);
    curveVertex(210, 130);
    curveVertex(210, 121);
    curveVertex(207, 138);
    curveVertex(201, 144);
    curveVertex(188, 144);
    curveVertex(181, 134);
    endShape(CLOSE);
  } else if (face === 3) {
    //hair
    fill(r4, g4, b4);
    //noFill();
    stroke(250);
    beginShape();
    curveVertex(197, 10);
    curveVertex(168, 21);
    curveVertex(150, 41);
    curveVertex(143, 61);
    curveVertex(132, 98);
    curveVertex(134, 139);
    curveVertex(140, 160);
    curveVertex(140, 128);
    curveVertex(149, 104);
    curveVertex(174, 76);
    curveVertex(192, 63);
    curveVertex(206, 80);
    curveVertex(216, 92);
    curveVertex(229, 110);
    curveVertex(239, 117);
    curveVertex(245, 130);
    curveVertex(251, 141);
    curveVertex(247, 176);
    curveVertex(245, 201);
    curveVertex(255, 194);
    curveVertex(257, 181);
    curveVertex(261, 132);
    curveVertex(253, 62);
    curveVertex(233, 29);
    curveVertex(211, 13);
    curveVertex(211, 13);
    endShape(CLOSE);

    //neck
    fill(254, 227, 212);
    stroke(0);
    beginShape();
    curveVertex(161, 233);
    curveVertex(161, 233);
    curveVertex(162, 327);
    curveVertex(154, 355);
    curveVertex(145, 368);
    curveVertex(158, 385);
    curveVertex(184, 400);
    curveVertex(229, 400);
    curveVertex(239, 392);
    curveVertex(241, 387);
    curveVertex(246, 387);
    curveVertex(244, 375);
    curveVertex(239, 356);
    curveVertex(235, 345);
    curveVertex(233, 330);
    curveVertex(226, 276);
    curveVertex(226, 228);
    curveVertex(211, 248);
    curveVertex(189, 261);
    curveVertex(161, 233);
    endShape();

    //face
    stroke(0);
    fill(254, 227, 212);
    beginShape();
    curveVertex(140, 160);
    curveVertex(140, 128);
    curveVertex(149, 104);
    curveVertex(174, 76);
    curveVertex(192, 63);
    curveVertex(206, 80);
    curveVertex(216, 92);
    curveVertex(229, 110);
    curveVertex(239, 117);
    curveVertex(245, 130);
    curveVertex(251, 141);
    curveVertex(247, 176);
    curveVertex(237, 206);
    curveVertex(219, 240);
    curveVertex(193, 261);
    curveVertex(168, 249);
    curveVertex(149, 198);
    curveVertex(144, 168);
    endShape(CLOSE);

    //jacket
    //noFill();
    fill(r, g, b);
    beginShape();
    curveVertex(160, 329);
    curveVertex(153, 338);
    curveVertex(137, 356);
    curveVertex(113, 370);
    curveVertex(98, 383);
    curveVertex(91, 390);
    curveVertex(84, 398);
    curveVertex(82, 400);
    curveVertex(306, 400);
    curveVertex(304, 400);
    curveVertex(300, 392);
    curveVertex(297, 388);
    curveVertex(282, 375);
    curveVertex(260, 358);
    curveVertex(238, 340);
    curveVertex(233, 330);
    curveVertex(238, 349);
    curveVertex(244, 367);
    curveVertex(248, 382);
    curveVertex(243, 389);
    curveVertex(237, 397);
    curveVertex(230, 400);
    curveVertex(188, 400);
    curveVertex(173, 394);
    curveVertex(161, 385);
    curveVertex(150, 379);
    curveVertex(149, 377);
    curveVertex(152, 370);
    curveVertex(155, 353);
    curveVertex(161, 341);
    curveVertex(162, 328);
    endShape(CLOSE);

    //lines
    noFill();
    beginShape();
    curveVertex(161, 139);
    curveVertex(161, 139);
    curveVertex(174, 134);
    curveVertex(185, 136);
    curveVertex(177, 144);
    curveVertex(164, 141);
    curveVertex(164, 141);
    endShape(CLOSE);

    beginShape();
    curveVertex(206, 141);
    curveVertex(206, 141);
    curveVertex(208, 137);
    curveVertex(216, 137);
    curveVertex(227, 140);
    curveVertex(231, 144);
    curveVertex(219, 145);
    curveVertex(208, 144);
    curveVertex(206, 141);
    curveVertex(206, 141);
    endShape(CLOSE);

    beginShape();
    curveVertex(165, 132);
    curveVertex(165, 132);
    curveVertex(174, 129);
    curveVertex(186, 133);
    curveVertex(182, 162);
    curveVertex(176, 189);
    curveVertex(179, 189);
    curveVertex(181, 193);
    curveVertex(184, 193);
    curveVertex(186, 191);
    curveVertex(189, 189);
    curveVertex(194, 191);
    curveVertex(194, 192);
    curveVertex(197, 192);
    curveVertex(196, 184);
    curveVertex(196, 171);
    endShape();

    beginShape();
    curveVertex(209, 131);
    curveVertex(209, 131);
    curveVertex(215, 129);
    curveVertex(224, 132);
    curveVertex(231, 137);
    curveVertex(231, 137);
    endShape();
    //eyebrows
    push();
    strokeWeight(2);
    beginShape();
    curveVertex(154, 115);
    curveVertex(154, 115);
    curveVertex(167, 112);
    curveVertex(178, 116);
    curveVertex(187, 122);
    curveVertex(187, 122);
    endShape();

    beginShape();
    curveVertex(202, 119);
    curveVertex(202, 119);
    curveVertex(212, 118);
    curveVertex(225, 120);
    curveVertex(230, 121);
    curveVertex(235, 126);
    curveVertex(235, 126);
    endShape();
    pop();
    //lips
    fill(r6, 0, 0);
    beginShape();
    curveVertex(168, 211);
    curveVertex(174, 208);
    curveVertex(177, 205);
    curveVertex(179, 205);
    curveVertex(182, 207);
    curveVertex(184, 207);
    curveVertex(185, 205);
    curveVertex(186, 204);
    curveVertex(191, 207);
    curveVertex(195, 210);
    curveVertex(198, 211);
    curveVertex(200, 212);
    curveVertex(195, 217);
    curveVertex(183, 220);
    curveVertex(175, 217);
    curveVertex(172, 214);
    curveVertex(169, 212);
    curveVertex(166, 211);
    curveVertex(166, 211);
    endShape(CLOSE);

    beginShape();
    curveVertex(167, 210);
    curveVertex(167, 210);
    curveVertex(174, 211);
    curveVertex(179, 211);
    curveVertex(182, 213);
    curveVertex(184, 213);
    curveVertex(185, 212);
    curveVertex(187, 211);
    curveVertex(189, 211);
    curveVertex(191, 211);
    curveVertex(193, 213);
    curveVertex(196, 214);
    curveVertex(198, 213);
    curveVertex(198, 213);
    endShape();
  }
      textSize(12);
  textAlign(CENTER);
  fill(0);
  noStroke();
  text("Click on the corners to change pose", 200, 380);
  text("Click on hair,jacket &lips to change color", 200, 393);
}

function changeBG() {
  let r1 = random(0, 255);
  let g1 = random(0, 255);
  let b1 = random(0, 255);
  background(r1, g1, b1);
}

function mousePressed() {
  // Check if mouse is inside the jacket d1, hair d2, lips d3
  let d1 = dist(mouseX, mouseY, 207, 359);
  let d2 = dist(mouseX, mouseY, 188, 121);
  let d3 = dist(mouseX, mouseY, 198, 234);
  let d4 = dist(mouseX, mouseY, 200, 50);
  let d5 = dist(mouseX, mouseY, 183, 212);
  let d6 = dist(mouseX, mouseY, 0, 0);
  let d7 = dist(mouseX, mouseY, 400, 400);
  let d8 = dist(mouseX, mouseY, 0, 400);
  if (d1 > 40 && d1 < 120) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
  if (d2 < 100) {
    // Pick new random color values
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }

  if (d3 < 20) {
    // Pick new random color values
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
  }
  if (d4 < 70) {
    // Pick new random color values
    r4 = random(255);
    g4 = random(255);
    b4 = random(255);
  }
  if (d5 < 20) {
    // Pick new random color values
    r6 = random(255);
  }
  if (d6 < 20) {
    background(r4, g4, b4);
    face = 2;
  }

  if (d7 < 10) {
    background(r2, g2, b2);
    face = 3;
  }

  if (d8 < 10) {
    background(r4, g4, b4);
    face = 1;
  }
}
