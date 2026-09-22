class Gallery {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = img;
  }

  display() {
    background(200);
    imageMode(CENTER);
    image(this.img, this.x, (3 * this.y) / 2, 400, 50);
    fill(30);
    char_security.display();
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }

  checkRecordsCollision2() {
    if (
      dist(
        character.getCharCoords.x,
        character.getCharCoords.y,
        width / 2,
        height / 2
      ) < 100
    ) {
      textSize(16);
      textAlign(CENTER);
      fill(255);
      text("PRESS 'SPACEBAR'", width / 2, 550);
      return true;
    }
    return false;
  }

  hasCollided2(coords) {
    //   let coords2 = character.getCharCoords();
    if (keyIsDown(32)) {
      if (dist(coords.x, coords.y, width / 2, height / 2) < 100) {
        // console.log("23")
        showSlideShow2 = true;
      }
    }
  }
}
