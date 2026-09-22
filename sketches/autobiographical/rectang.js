function createRectGrid() {
  locs = [];
  for (let x = 0; x < width; x += width / 50) {
    //divides x axis into 50 blocks
    for (let y = 0; y < height; y += height / 50) {
      //divides y axis into 20 blocks
      stroke(0);
      strokeWeight(2);
      point(x, y); //create grid point
      let loc = { x: x, y: y }; //create an object that will hold point location
      locs.push(loc); //push that object to an array
    }
  }
}

function drawBlock(loc) {
  noStroke();
  fill(random(0, 255),255,random(0, 255));
  rect(loc.x, loc.y, width / 100, height / 20);
  rect(3*loc.x, loc.y, width / 100, height / 20);

}
