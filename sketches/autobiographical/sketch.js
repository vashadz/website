let mode = 0;
let myFont;
let img_char, img_char2, img_floor, img_mind, img_bench;
let img_pool;
let character;
let labyrinth;
let records;
let gallery;
let char_security;
let rectang;
let locs;
var possible_music, possible_art, possible_songs;
let next, prev, playMusic, YourMusicSel;
let song;
let next2, prev2, YourArtSel;

let loadedRecordImages = [];
let musicTracks = [];
let loadedArtImages = [];
let imageIndex = 0;
let newImageIndex = 0;

let savedState = 0;
let newSavedState = 0;

let showSlideShow = false;
let showSlideShow2 = false;

let closeSlideButton, closeSlideButton2;

let changeSlideShowState = false;

let quoteSongArray = [
  "Are you ignoring the obvious?",
  "The broader focus of your life during this time is to see love as an experience that can transcend reality and transform your life completely.",
  "This is your life and you are the only one who can live it.",
  "There’s a little voice in your head telling you that it is selfish to create a boundary. It’s not. You just haven’t accepted that crying releases oxytocin that eases both physical and emotional pain. Take it slow. Try not to enforce your version of structure and control.",
  "Anything is better than to leave one wreck for another.",
  "Your desire to learn and grow is changing. It may help you to strengthen your expansive vision. Destroy your illusions.  Accuracy will take their place.",
];
let quoteArtArray = [
  "Instead of being a block of ice, try experimenting with vulnerability.",
  "See love as an experience that can transcend reality and transform your life completely.",
  "Luck is on your side, a plan isn’t needed.",
  "Treat everyone’s feelings as if they are something precious that you can’t afford to replace.",
  "Today and tomorrow, the way you think and communicate may feel closed-off. Try to reconnect with your rational mind. Sometimes you don't want to hear the truth because it will destroy your illusions. Embrace facts with objectivity instead of avoiding them.",
  "You can set the tone for what happens next ",
];

function preload() {
  myFont = loadFont('assets/Robus.otf');
  img_char = loadImage("assets/dora.png");
  img_char2 = loadImage("assets/dora1.png");
  img_floor = loadImage("assets/floor.png");
  img_mind = loadImage("assets/1.png");
  img_bench = loadImage("assets/bench.png");
  img_pool = loadImage("assets/pool.png");
  // song = loadSound("assets/neon.mp3");
  possible_songs = [
    "assets/songs/fuzzy.m4a",
    "assets/songs/seeyou.m4a",
    "assets/songs/take.m4a",
    "assets/songs/escape.m4a",
    "assets/songs/innerbloom.m4a",
    "assets/songs/romantics.m4a",
  ];
  var pos1 = floor(random(possible_songs.length));
  song_record = loadSound(possible_songs[pos1]);

  for (let i = 0; i < possible_songs.length; i++) {
    musicTracks[i] = loadSound(possible_songs[i]);
  }
  possible_music = [
    "assets/music/fuzzy.png",
    "assets/music/seeyouagain.png",
    "assets/music/aha.png",
    "assets/music/escape.jpg",
    "assets/music/innerbloom.jpg",
    "assets/music/romantics.jpeg",
  ];
  var pos = floor(random(possible_music.length));
  img_record = loadImage(possible_music[pos]);

  for (let i = 0; i < possible_music.length; i++) {
    loadedRecordImages[i] = loadImage(possible_music[i]);
  }
  possible_art = [
    "assets/art/baselitz.jpg",
    "assets/art/hirst.jpg",
    "assets/art/kuniyoshi.jpeg",
    "assets/art/lou.jpeg",
    "assets/art/schiele.jpeg",
    "assets/art/man.jpg",
  ];
  var pos2 = floor(random(possible_art.length));
  img_art = loadImage(possible_art[pos2]);

  for (let i = 0; i < possible_art.length; i++) {
    loadedArtImages[i] = loadImage(possible_art[i]);
  }
}

function setup() {
    textAlign(CENTER);
  createCanvas(600, 600);
  character = new Character(img_char);
  char_security = new Security(img_char2);
  labyrinth = new Labyrinth(img_mind);
  records = new Records();
  gallery = new Gallery(width / 2, height / 2, 300, 240, img_bench);
  createRectGrid();
  createCustomButton();
  createCustomButton2();
}

// function draw() {
//   background(220);
//   switch (mode) {
//     case 0:
//       scene0(); // BRAIN
//       break;
//     case 1:
//       scene1(); // RECORDS
//       break;
//     case 2:
//       scene2(); // ART
//       break;
//     case 3:
//       scene3(); // RESULTS
//       break;
//     //to go back to beginning
//     case 4:
//       mode = 0;
//       break;
//   }
//   character.display();
//   character.move();
//   if (showSlideShow) {
//     slideshow();
//   }
//   if (showSlideShow2) {
//     showArt();
//   }
// }

function draw() {
  background(220);
  switch(mode){case 0:scene0();break;case 1:scene1();break;case 2:scene2();break;case 3:scene3();break;default:mode=0;scene0();}

  character.display();
  character.move();
  if (showSlideShow) {
    slideshow();
  }
  if (showSlideShow2) {
    showArt();
  }
}

//mind
function scene0() {
  //  mode = 0;
  labyrinth.display();
  //  console.log("scene 0");
  noStroke();
  textAlign(CENTER);
  textSize(50);
  fill(238,9,121)
  textFont(myFont);
  text("Find your way to the next phase", width / 2, (8.5 * height) / 9);
  fill(255, 106, 0);
  stroke(238,9,121)
  strokeWeight(3)
  ellipse(width / 2, height / 2 - 75, 45, 45);
  character.collision1();
  noButtons();
  let loc = random(locs);
  drawBlock(loc);
}

//records
function scene1() {
  // mode = 1;
  background(255); 
  //console.log("scene 1");
  noStroke();
  textSize(41);
  textFont("Times New Roman");
  fill(0, 255, 0);
  records.display();
  character.collision2();
  scene1Collision();
  noButtons();
  textSize(41);
  textFont(myFont);
  fill(255,225,0);
  text("why don't you explore some more?",width/2,100)
}

function scene1Collision() {
  let coords = character.getCharCoords();
  if (records.checkRecordsCollision(coords)) {
    return true;
  } else {
    return false;
  }
}

// gallery
function scene2() {
  // mode = 2;
  background(200);
  // console.log("scene 2");
  noStroke();
  textSize(41);
  textFont("Times New Roman");
  // fill(0, 255, 0);
  gallery.display();
  // char_security.display();
  character.collision3();
  scene2Collision();

  noButtons();
  if (showSlideShow2) {
    showArt();
  }
}

function scene2Collision() {
  let coords2 = character.getCharCoords();

  if (records.checkRecordsCollision(coords2)) {
    return true;
  } else {
    return false;
  }
}

//results
function scene3() {
  background(255);
  fill(0, 102, 153);
  textAlign(CENTER);
  textSize(20);
  textFont("Times New Roman");
  text(quoteSongArray[savedState], width / 2, height / 2, 200, 200);
  text(quoteArtArray[newSavedState], width / 2, height / 2 + 200, 200, 200);
  noButtons();
}

function slideshow() {
  fill(20, 145, 150);
  rect(width / 2, height / 2, 500, 350);
  image(loadedRecordImages[imageIndex], width / 2, height / 2, 100, 100);
  fill(0, 100, 40);
  textSize(20);
  textAlign(CENTER);
  text("Will this be your Selection?", width / 2, 180);

  if (next) {
    next.style("display", "block");
  }
  if (prev) {
    prev.style("display", "block");
  }
  if (playMusic) {
    playMusic.style("display", "block");
  }
  if (YourMusicSel) {
    YourMusicSel.style("display", "block");
  }
  if (closeSlideButton) {
    closeSlideButton.style("display", "block");
  }
}

function createCustomButton() {
  next = createButton("👉🏻");
  next.position(500, height / 2);
  next.mouseClicked(nextshow);
  prev = createButton("👈🏻");
  prev.position(100, height / 2);
  prev.mouseClicked(prevshow);
  YourMusicSel = createButton("Save");
  YourMusicSel.position(width / 2, 430);
  YourMusicSel.mouseClicked(saveSong);
  YourMusicSel.style("transform", `translateX(-50%)`);
  playMusic = createButton("⏯");
  playMusic.position(width / 2, 400);
  playMusic.mouseClicked(audiosound);
  playMusic.style("transform", `translateX(-50%)`);

  closeSlideButton = createButton("X");
  closeSlideButton.mouseClicked(closeSlide);
}

function nextshow() {
  // console.log("called");
  // imageIndex = randomInt(0, loadedRecordImages.length - 1);
  if (imageIndex === loadedRecordImages.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  image(loadedRecordImages[imageIndex], width / 2, height / 2, 100, 100);
  // ellipse(20,20,20,20)
}

function prevshow() {
  //  console.log("called");
  //imageIndex = randomInt(0, loadedRecordImages.length);
  // console.log(imageIndex);
  if (imageIndex === 0) {
    imageIndex = loadedRecordImages.length - 1;
  } else {
    imageIndex--;
  }
  image(loadedRecordImages[imageIndex], width / 2, height / 2, 100, 100);
}

/*function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} */

function audiosound() {
  for (let i = 0; i < musicTracks.length; i++) {
    if (musicTracks[i].isPlaying()) {
      musicTracks[i].stop();
    }
  }
  userStartAudio();
  musicTracks[imageIndex].play();
}

function saveSong() {
  savedState = imageIndex;
  //  console.log(quoteSongArray[savedState]); //first argument for text()
  // ellipse(0, 0, 100, 100);
}

function saveArt() {
  newSavedState = newImageIndex;
}

function closeSlide() {
  showSlideShow = false;
}

function noButtons() {
  if (next) {
    next.style("display", "none");
  }
  if (prev) {
    prev.style("display", "none");
  }
  if (playMusic) {
    playMusic.style("display", "none");
  }
  if (YourMusicSel) {
    YourMusicSel.style("display", "none");
  }
  if (closeSlideButton) {
    closeSlideButton.style("display", "none");
  }
  if (next2) {
    next2.style("display", "none");
  }
  if (prev2) {
    prev2.style("display", "none");
  }

  if (YourArtSel) {
    YourArtSel.style("display", "none");
  }
  if (closeSlideButton2) {
    closeSlideButton2.style("display", "none");
  }
}

function showArt() {
  fill(20, 145, 150);
  rect(width / 2, height / 2, 500, 350);
  imageMode(CENTER);
  image(
    loadedArtImages[newImageIndex],
    width / 2,
    height / 2,
    (loadedArtImages[newImageIndex].width / 8) * 7,
    (loadedArtImages[newImageIndex].height / 8) * 7
  );
  fill(0, 100, 40);
  textSize(20);
  textAlign(CENTER);
  text("Will this be your Selection?", width / 2, 180);
  if (next2) {
    next2.style("display", "block");
  }
  if (prev2) {
    prev2.style("display", "block");
  }
  if (YourArtSel) {
    YourArtSel.style("display", "block");
  }
  if (closeSlideButton2) {
    closeSlideButton2.style("display", "block");
  }
}

function createCustomButton2() {
  next2 = createButton("👉🏻");
  next2.position(500, height / 2);
  next2.mouseClicked(nextshow2);
  prev2 = createButton("👈🏻");
  prev2.position(70, height / 2);
  prev2.mouseClicked(prevshow2);
  YourArtSel = createButton("Save");
  YourArtSel.position(width / 2, 430);
  YourArtSel.mouseClicked(saveArt);
  YourArtSel.style("transform", `translateX(-50%)`);

  closeSlideButton2 = createButton("X");
  closeSlideButton2.mouseClicked(closeSlide2);
}

function nextshow2() {
  // console.log("called");
  // imageIndex = randomInt(0, loadedRecordImages.length - 1);
  if (newImageIndex === loadedArtImages.length - 1) {
    newImageIndex = 0;
  } else {
    newImageIndex++;
  }
  image(
    loadedArtImages[newImageIndex],
    width / 2,
    height / 2,
    loadedArtImages[newImageIndex].width,
    loadedArtImages[newImageIndex].height
  );
  // ellipse(20,20,20,20)
}

function prevshow2() {
  //  console.log("called");
  //imageIndex = randomInt(0, loadedRecordImages.length);
  // console.log(imageIndex);
  if (newImageIndex === 0) {
    newImageIndex = loadedArtImages.length - 1;
  } else {
    newImageIndex--;
  }
  image(
    loadedArtImages[newImageIndex],
    width / 2,
    height / 2,
    loadedArtImages[newImageIndex].width,
    loadedArtImages[newImageIndex].height
  );
}

function closeSlide2() {
  showSlideShow2 = false;
}

function keyReleased() {
  if (changeSlideShowState) {
    if (keyCode === 32 && mode === 1) {
      showSlideShow = !showSlideShow;
    }
    if (keyCode === 32 && mode === 2) {
      showSlideShow2 = !showSlideShow2;
    }
  } else {
    if (keyCode === 32 && mode === 1) {
      showSlideShow = !showSlideShow;
    }
    if (keyCode === 32 && mode === 2) {
      showSlideShow2 = !showSlideShow2;
    }
  }
}
