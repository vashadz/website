class RecordShelve {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    //shelve
    strokeWeight(3);
    stroke(255, 204, 0);
  //  fill(150, 70, 51);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);

    //record
    strokeWeight(2);
    stroke(70, 150, 200);
    let boxW = this.w / 2 - 5;
    let boxH = this.h / 2 - 3;
    for (let lineX = this.x; lineX <= this.x + 2 * boxW; lineX += 4) {
      line(lineX - boxW, this.y - boxH, lineX - boxW, this.y + boxH);
    }
  }

  hasCollided(coords) {
    let xCond =
      coords.x - coords.w * 0.5 > this.x - this.w * 0.5 &&
      coords.x + coords.w * 0.5 < this.x + this.w * 0.5;

    let yCond =
      (coords.y - coords.h * 0.5 > this.y - this.h / 2 &&
        coords.y - coords.h * 0.5 < this.y + this.h / 2) ||
      (coords.y + coords.h * 0.5 > this.y - this.h / 2 &&
        coords.y + coords.h * 0.5 < this.y + this.h / 2);

    if (keyIsDown(32)) {
      if (dist(coords.x, coords.y, this.x, this.y) < 100) {
        !changeSlideShowState 
          ?(changeSlideShowState = true)  
        :(changeSlideShowState = false);
      //  console.log("Pressed Again");
      }
    }

    //       if (keyIsDown(32)&&showSlideShow==true) {
    //         showSlideShow = false}

    return yCond && xCond;

    //  console.log(coords.y - coords.h*0.5 > this.y + this.h/2 );
    /*  return !(
      coords.y +coords.h/2 < this.y + this.h/2 ||
      coords.y  -coords.h/2> this.y - this.h/2 ||
      coords.x -coords.w/2 < this.x - this.w/2 ||
      coords.x  +coords.w/2> this.x + this.w/2
    ); */
  }
}
