//判断大鱼和果实的distance
function monFruit () {
	
	for (var i = 0 ; i < fruit.num ; i ++ ){
		if(fruit.alive[i]){
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if(l < 900){
				fruit.eaten(i);
			}
		}
	}
}

function momBaby(){

	var l = calLength2(mom.x , mom.y , baby.x , baby.y);
	if(l < 900){
		baby.babyBodyNum = 0;
	}
}