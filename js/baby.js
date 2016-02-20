var babyObj = function(){
	this.x;
	this.y;
	this.angle;

	this.babyTailTimer = 0;
	this.babyTailNum = 0;

	this.babyEyeTimer = 0;
	this.babyEyeNum = 0;
	this.babyEyeInterval = 1000;

	this.babyBodyTimer = 0;
	this.babyBodyNum = 0 ;
}
babyObj.prototype.init = function(){
	this.x = canvasWidth * 0.5 - 50;
	this.y = canvasHeight * 0.5 + 50;
	this.angle = 0;
}
babyObj.prototype.draw = function(){

	this.x = lerpDistance(mom.x , this.x , 0.99);
	this.y = lerpDistance(mom.y , this.y , 0.99);

	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;
	var deltangle = Math.atan2(deltaY , deltaX) + Math.PI;
	this.angle = lerpAngle(deltangle, this.angle, 0.6);

	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailNum = (this.babyTailNum + 1) % 8;
		this.babyTailTimer %= 50;
	}
	/*console.log(this.babyTailNum);*/

	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeNum = (this.babyEyeNum + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;

		if(this.babyEyeNum == 0){
			this.babyEyeInterval = Math.random() * 1000 + 2000;
		}
		else this.babyEyeInterval = 200;
	}

	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > 300){
		this.babyBodyNum += 1;
		this.babyBodyTimer %= 300;
		if(this.babyBodyNum > 19){
			this.babyBodyNum = 19;//game over
		}
	}

	context1.save();
	context1.translate(this.x , this.y);
	context1.rotate(this.angle);
	context1.drawImage(babyTail[this.babyTailNum],-babyTail[this.babyTailNum].width * 0.5 + 24 , -babyTail[this.babyTailNum].height * 0.5);
	context1.drawImage(babyBody[this.babyBodyNum],-babyBody[this.babyBodyNum].width * 0.5 , -babyBody[this.babyBodyNum].height * 0.5);
	context1.drawImage(babyEye[this.babyEyeNum] ,-babyEye[this.babyEyeNum].width * 0.5 , -babyEye[this.babyEyeNum].height * 0.5);

	context1.restore();

}