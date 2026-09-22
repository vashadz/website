class Security {
  constructor(img) {
    this.x = (5 * width) / 6;
    this.y = (4 * height) / 5;
    this.w = width / 8;
    this.h = height / 4;
    this.img = img;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }
}
