var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();

}

momObj.prototype.init = function(){
	this.x = 400;
	this.y = 300;
	this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}

momObj.prototype.draw = function(){


	this.x = lerpDistance(mx , this.x , 0.95);
	this.y = lerpDistance(my , this.y , 0.95);

	//delta angle
	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var deltangle = Math.atan2(deltaY , deltaX) + Math.PI;
	this.angle = lerpAngle(deltangle, this.angle, 0.6);

	context1.save();
	context1.translate(this.x , this.y);
	context1.rotate(this.angle);
	context1.drawImage(this.bigEye , -this.bigEye.width * 0.5 , -this.bigEye.height * 0.5);
	context1.drawImage(this.bigBody, -this.bigBody.width * 0.5 , -this.bigBody.height * 0.5);
	context1.drawImage(this.bigTail, -this.bigTail.width * 0.5 + 30, -this.bigTail.height * 0.5);

	context1.restore();
}