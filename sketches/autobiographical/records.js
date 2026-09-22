class Records {
  constructor() {
    let boxWidth = 150;
    let boxHeight = 50;
    let boxX = width / 4;
    let boxY = height / 4;
    this.shelves = [];
    this.shelves[0] = new RecordShelve(boxX, boxY, boxWidth, boxHeight);
    this.shelves[1] = new RecordShelve(boxX, 2 * boxY, boxWidth, boxHeight);
    this.shelves[2] = new RecordShelve(boxX, 3 * boxY, boxWidth, boxHeight);
    this.shelves[3] = new RecordShelve(3 * boxX, boxY, boxWidth, boxHeight);
    this.shelves[4] = new RecordShelve(3 * boxX, 2 * boxY, boxWidth, boxHeight);
    this.shelves[5] = new RecordShelve(3 * boxX, 3 * boxY, boxWidth, boxHeight);
  }

  display() {
    // wooden floor array
    for (let i = 0; i <= width + 35; i += 37) {
      for (let j = 0; j <= height; j += 12) {
        fill(205, 133, 63);
        rect(i, j, 35, 4);
        rect(i - 17, j + 6, 35, 4);
      }
    }
    for (let i = 0; i < this.shelves.length; i++) {
      this.shelves[i].display();
    }

    //portal
      fill(0, 255, 0);
ellipse(width / 2, 45, 45, 45);
  }

  checkRecordsCollision(coords) {
    for (let i = 0; i < this.shelves.length; i++) {
      if (this.shelves[i].hasCollided(coords)) {
        textSize(16);
        textAlign(CENTER);
        fill(255);
        text("PRESS 'SPACEBAR'", width / 2, 550);
        return true;
      }
    }
    return false;
  }

  getRecordCoords() {
    let x = boxX;
    let y = boxY;
    let w = boxWidth;
    let h = boxWeight;
    return { x, y, w, h };
  }
}
