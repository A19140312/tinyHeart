var aneObj = function(){
	this.x = [];
	this.len = [];
}

aneObj.prototype.num = 50;
aneObj.prototype.init = function(){

	for (var i = 0; i < this.num; i++) {
		this.x[i] = i * 20 + Math.random() * 20;
		this.len[i] = 200 + Math.random() * 50;
	}
}
aneObj.prototype.draw = function(){
	context2.save();
	context2.globalAlpha = 0.6; 
	context2.lineWidth = 20;
	context2.lineCap = "round";
	context2.strokeStyle = "#3b154e";
	for(var i = 0 ; i < this.num ; i ++ ){
		context2.beginPath();

		context2.moveTo(this.x[i], canvasHeight);
		context2.lineTo(this.x[i], canvasHeight - this.len[i]);
		context2.stroke();

		context2.closePath();
	}
	context2.restore();
}