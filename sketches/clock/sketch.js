let images = [];
let currentHour = 0;
let currentImageIndex = 0;
let numCols = 60; // Maximum number of columns
let numRows = 60; // Maximum number of rows
let cellWidth;
let cellHeight;
let currentMinute = 0;
let currentSecond = 0;
let nextImage;
let nextImageIndex = 0;
let totalRectangles = 0;
const readyImages = new Set();

function requestImage(index) {
  if (images[index]) return;
  images[index] = loadImage(
    "../../assets/editorial/clock-" + String(index + 1).padStart(2, "0") + ".jpg",
    () => readyImages.add(index)
  );
}

function preload() {
  const initialHour = new Date().getHours();
  requestImage(initialHour);
  requestImage((initialHour + 1) % 24);
}

function setup() {
  createCanvas(700, 494);
  frameRate(1); // Update every second
  currentHour = hour() % 24;
  cellWidth = width / numCols;
  cellHeight = height / numRows;
  nextImageIndex = (currentHour + 1 ) % 24;
  nextImage = images[nextImageIndex];
}

function draw() {
  background(220);

  // Get the current hour, minute, and second
  currentHour = hour() % 24;
  currentMinute = minute() % 60;
  currentSecond = second() % 60;

  // Determine the current image index based on the current hour
  currentImageIndex = currentHour;
  nextImageIndex = (currentHour + 1) % 24;
  requestImage(currentImageIndex);
  requestImage(nextImageIndex);
  if (!readyImages.has(currentImageIndex)) return;
  nextImage = images[nextImageIndex];

  // Display the current image
  image(images[currentImageIndex], 0, 0, width, height);
  if (!readyImages.has(nextImageIndex)) return;

  // Calculate the position for the next rectangle based on the time
  totalRectangles =
    (currentMinute * numCols + currentSecond) % (numCols * numRows);

  // Draw previously revealed rectangles
  for (let i = 0; i < totalRectangles; i++) {
    let col = i % numCols;
    let row1 = floor(i / numCols);
    let imageX = col * cellWidth;
    let imageY = row1 * cellHeight;

    let sourceX = (imageX / width) * nextImage.width;
    let sourceY = (imageY / height) * nextImage.height;

    let sourceWidth = (cellWidth / width) * nextImage.width;
    let sourceHeight = (cellHeight / height) * nextImage.height;

    image(
      nextImage,
      imageX,
      imageY,
      cellWidth,
      cellHeight,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight
    );
  }
}
