var canvas1,canvas2;
var context1,context2;
var lastTime,deltaTime;
var bgPic = new Image();
var ane,fruit;

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

	bgPic.src = "./src/background.jpg";
	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
}

function gameloop(){

	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = (now - lastTime); 
	lastTime = now;
	drawBackground();
	ane.draw();
	fruit.draw();
}