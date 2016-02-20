var momObj = function(){
	this.x;
	this.y;
	this.angle;

	this.bigTailNum = 0;
	this.bigTailTimer = 0;

	this.bigEyeTimer = 0;
	this.bigEyeNum = 0;
	this.bigEyeInterval = 1000;

	this.bigBodyNum = 0;
}

momObj.prototype.init = function(){
	this.x = canvasWidth * 0.5;
	this.y = canvasHeight * 0.5;
	this.angle = 0;
}

momObj.prototype.draw = function(){


	this.x = lerpDistance(mx , this.x , 0.95);
	this.y = lerpDistance(my , this.y , 0.95);

	//delta angle
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var deltangle = Math.atan2(deltaY , deltaX) + Math.PI;
	this.angle = lerpAngle(deltangle, this.angle, 0.6);

	this.bigTailTimer += deltaTime;
	if(this.bigTailTimer > 50){
		this.bigTailNum = (this.bigTailNum + 1) % 8;
		this.bigTailTimer %= 50;
	}

	this.bigEyeTimer += deltaTime;
	if(this.bigEyeTimer > this.bigEyeInterval){
		this.bigEyeNum = (this.bigEyeNum + 1) % 2;
		this.bigEyeTimer %= this.bigEyeInterval;

		if(this.bigEyeNum == 0){
			this.bigEyeInterval = Math.random() * 1000 + 2000;
		}
		else this.bigEyeInterval = 200;
	}

	context1.save();
	context1.translate(this.x , this.y);
	context1.rotate(this.angle);

	context1.drawImage(bigTail[this.bigTailNum], -bigTail[this.bigTailNum].width * 0.5 + 30 , -bigTail[this.bigTailNum].height * 0.5);
	if(data.double == 1)context1.drawImage(bigBodyOra[this.bigBodyNum], -bigBodyOra[this.bigBodyNum].width * 0.5 , -bigBodyOra[this.bigBodyNum].height * 0.5);
	else context1.drawImage(bigBodyBlue[this.bigBodyNum], -bigBodyBlue[this.bigBodyNum].width * 0.5 , -bigBodyBlue[this.bigBodyNum].height * 0.5);
	context1.drawImage(bigEye[this.bigEyeNum] ,-bigEye[this.bigEyeNum].width * 0.5 , -bigEye[this.bigEyeNum].height * 0.5);
	
	context1.restore();
}