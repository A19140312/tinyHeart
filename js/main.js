var canvas1,canvas2;
var context1,context2;
var lastTime,deltaTime;
var bgPic = new Image();
var ane, fruit, mom, baby;
var mx , my;
var canvasWidth = 800;
var canvasHeight = 600;
var babyTail = [];

document.body.onload = function(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	canvas1 = document.getElementById("canvas1");//finish, UI, dust..
	canvas2 = document.getElementById("canvas2");//background
	context1 = canvas1.getContext("2d");
	context2 = canvas2.getContext("2d");

	canvas1.addEventListener("mousemove" , onMouseMove , false);

	bgPic.src = "./src/background.jpg";

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	mx = canvasWidth * 0.5;
	my = canvasHeight * 0.5;

	baby = new babyObj();
	baby.init();

	for(var i = 0 ; i < 8 ; i ++){
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
}

function gameloop(){

	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = (now - lastTime); 
	lastTime = now;
	if(deltaTime > 40)deltaTime = 40; 
	drawBackground();
	ane.draw();
	fruitNums();
	fruit.draw();

	context1.clearRect(0 , 0 , canvasWidth , canvasHeight);
	mom.draw();
	monFruit ();

	baby.draw();
}

function onMouseMove(e){
	if(e.offSetX || e.layerX){
		mx = e.offSetX || e.layerX;
		my = e.offSetY || e.layerY;
	}
}