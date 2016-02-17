var fruitObj = function(){
	this.alive = [];
	this.x = [];
	this.y = [];
	this.spd = [];
	this.l = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i = 0 ; i < this.num ; i ++ ){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.015 + 0.005;
		this.l[i] = 0;

	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}
fruitObj.prototype.draw = function(){

	for (var i = 0 ; i < this.num ; i ++ ){
		if(this.alive[i]){
			if(this.l[i] < 15) this.l[i] += this.spd[i] * deltaTime;
			else this.y[i] -= this.spd[i] * 7 * deltaTime;
			context2.drawImage(this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i]*0.5, this.l[i], this.l[i]);
			if(this.y[i] < 10)this.alive[i] = false;
		}
		
	}

}
fruitObj.prototype.born = function(i){

	var aneId = Math.floor(Math.random() * ane.num);
	this.x[i] = ane.x[aneId];
	this.y[i] = 600 - ane.len[aneId];
	this.l[i] = 0;
	this.alive[i] = true;
}

function fruitNums(){
	var num = 0;
	for(var i = 0 ; i < fruit.num ; i ++){

		if(fruit.alive[i]) num ++;
	}
	if(num < 15){
		sendFruit();
		return;
	}
}

function sendFruit(){

	for (var i = 0 ; i < fruit.num ; i ++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}