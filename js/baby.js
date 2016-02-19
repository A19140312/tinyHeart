var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();

	this.babyTailTimer = 0;
	this.babyTailNum = 0;
}
babyObj.prototype.init = function(){
	this.x = canvasWidth * 0.5 - 50;
	this.y = canvasHeight * 0.5 + 50;
	this.angle = 0;
	this.babyEye.src = "./src/babyEye0.png";
	this.babyBody.src = "./src/babyFade0.png";
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

	context1.save();
	context1.translate(this.x , this.y);
	context1.rotate(this.angle);
	context1.drawImage(babyTail[this.babyTailNum],-babyTail[this.babyTailNum].width * 0.5 + 25 , -babyTail[this.babyTailNum].height * 0.5);
	context1.drawImage(this.babyBody,-this.babyBody.width * 0.5 , -this.babyBody.height * 0.5);
	context1.drawImage(this.babyEye ,-this.babyEye.width * 0.5 , -this.babyEye.height * 0.5);

	context1.restore();

}