function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	//stroke("rgb(190,187,187)")
	// for (i=0; i<width; i+=50) {
	// 	line(i,0,i,height)
	// 	for (j=0;j<height;j+=50) {
	// 		line(0,j,width,j)
	// 	}
	// }
	frameRate(3)
}

let angle=0
let angleIncrement=45
let radiusIncrement=0

let colorHex=150
function draw() {
	stroke("white")
	translate(width/2,height/2)
	
	let r=50*(radiusIncrement+1)
	let r_previous=50*(radiusIncrement)
	

	rotate(radians(angle))
	
	//fill(map(colorHex,0,255,75,100),map(colorHex,0,255,0,255),map(colorHex,0,255,100,255))
	fill(map(colorHex,0,255,150,100),map(colorHex,0,255,0,255),map(colorHex,0,255,85,255))
	if (radiusIncrement%2==0) {
		triangle(sqrt(pow(r_previous,2)*2)/4,(-sqrt(pow(r_previous,2)*2)/2-r_previous)/2,0,-r,sqrt(pow(r,2)*2)/2, -sqrt(pow(r,2)*2)/2)
	}
	else {
		triangle(sqrt(pow(r,2)*2)/4,(-sqrt(pow(r,2)*2)/2-r)/2,0,-r_previous,sqrt(pow(r_previous,2)*2)/2, -sqrt(pow(r_previous,2)*2)/2)
	}

	
	angle=(angle+angleIncrement)%360
	colorHex-=2
	
	if (angle==0) {
		radiusIncrement++
	}
	if (frameCount>55) {
		noLoop()
	}
}

