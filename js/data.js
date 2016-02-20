var dataObj = function(){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.draw = function(){
	var w = canvas1.width;
	var h = canvas1.height;

	context1.save();
	context1.shadowBlur = 10;
	context1.shadowColor = "white";
	context1.fillStyle = "white";
	context1.fillText("Score : " + this.score , w * 0.5 , h - 80);

	if(this.gameOver){
		this.alpha += deltaTime * 0.0003;
		if(this.alpha > 1)this.alpha = 1;
		context1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
		context1.fillText("Game Over" , w * 0.5 , h * 0.5);
	}
	context1.restore();
}

dataObj.prototype.addScore = function(){
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}
