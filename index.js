let points=[];
let _shader;
let img;

let counter=0;
function preload(){
	_shader=loadShader("shader.vert","shader.frag");
	img=loadImage("neko.png");
	pixelDensity(1);
}

function setup(){
	createCanvas(600, 600, WEBGL);
	for(let i=0;i<120;i+=3){
		points.push(random(width));
		points.push(random(height));
		points.push(random(1));
	}
}

function draw(){
	shader(_shader);
	_shader.setUniform("points",points)
	_shader.setUniform("angle",mouseX*0.01);
	_shader.setUniform("mouse",[mouseX,600-mouseY]);
	_shader.setUniform("image",img)
	_shader.setUniform("counter",counter)
	rect(0,0,width,height);
	counter+=0.005
}

function mouseIsPressed(){
	for(let i=0;i<120;i+=3){
		points[i]=random(width);
		points[i+1]=random(height);
	}
}


