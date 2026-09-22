let locs;

function setup() {
	createCanvas(600, 600);
	background(255);
	
	//create grid and array filled with locations
	locs = [];
	for (let x = 0; x < width; x += width / 50) { //divides x axis into 50 blocks
		for (let y = 0; y < height; y += height / 50) { //divides y axis into 20 blocks 
			stroke(0);
			strokeWeight(2);
			point(x, y); //create grid point
			let loc = createLoc(x, y); //create an object that will hold point location
			locs.push(loc); //push that object to an array
		}
	}
}

function draw() {
	let loc = random(locs); 
	drawBlock(loc);

}

function createLoc(x, y) {
	let locX = x;
	let locY = y;
	//create loc object containing variables and values initialised
	let loc = {
		x: locX,
		y: locY
	};
	return loc; //return created loc to where it was called and end function

}

function drawBlock(loc) {
	//strokeWeight(4);
	noStroke();
	fill(random(0,255));
	//point(loc.x, loc.y);
  rect(loc.x,loc.y, width/50, height/50);

}