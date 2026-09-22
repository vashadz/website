class Character {
  constructor(img) {
    this.x = width / 2;
    this.y = (4 * height) / 5;
    this.w = width / 8;
    this.h = height / 8;
    this.img = img;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }

  move() {
    let mo = 4;
    //   if (!scene1Collision()) {
    if (keyIsDown(39)) {
      for (let i = 0; i < records.shelves.length; i++) {
        //   console.log(records.shelves[i].x);
      }
      this.x += 3;
    }

    if (keyIsDown(37)) {
      this.x -= 3;
    }

    if (keyIsDown(38)) {
      this.y -= 3;
    }

    if (keyIsDown(40)) {
      this.y += 3;
    }

    if (this.x < 0) {
      this.x = this.x + mo;
    }
    if (this.x > width) {
      this.x = this.x - mo;
    }
    if (this.y < 0) {
      this.y = this.y + mo;
    }
    if (this.y > height) {
      this.y = this.y - mo;
    }
  }
  //   }

  collision1() {
    if (
      mode == 0 &&
      dist(this.x, this.y, width / 2, height / 2 - 75) <= 45 / 2 + 3
    ) {
      mode = 1;
    }
  }

  collision2() {
    if (mode == 1 && dist(this.x, this.y, width / 2, 45) <= 45 / 2 + 3) {
      mode = 2;
    }
  }

  collision3() {
    if (
      mode == 2 &&
      dist(this.x, this.y, (5 * width) / 6, (4 * height) / 5) <= 45 + 3
    ) {
      mode = 3;
    }
  }

  getCharCoords() {
    let obj = {
      x: this.x,
      y: this.y,
      h: this.h,
      w: this.w,
    };
    return obj;
  }

  checkRecordsCollision(coords) {
    for (let i = 0; i < this.shelves.length; i++) {
      if (this.shelves[i].hasCollided(coords)) {
        return true;
      }
    }
    return false;
  }
}
