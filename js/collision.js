//判断大鱼和果实的distance
function monFruit () {
	if(!data.gameOver)  
	for (var i = 0 ; i < fruit.num ; i ++ ){
		if(fruit.alive[i]){
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 900){
				fruit.eaten(i);
				data.fruitNum += 1;
				mom.bigBodyNum ++;
				if(mom.bigBodyNum > 7)mom.bigBodyNum = 7;
				if(fruit.fruitType[i] == "blue"){
					data.double = 2;
				}
			}
		}
	}
}

function momBaby(){

	if(!data.gameOver && data.fruitNum){
		var l = calLength2(mom.x , mom.y , baby.x , baby.y);
		if(l < 900){
			
			baby.babyBodyNum = 0;
			mom.bigBodyNum = 0;
			data.addScore();
		
		}
	}
	
}