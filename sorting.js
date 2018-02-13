function fizzBuzz() {
    for (var x=0;x <100; x++){
        if ((x % 3 == 0) && (x % 5 == 0)){
            console.log(x +':FizzBuzz');
        }
        else if ((x % 3)== 0){
            console.log(x + ':Fizz');
        }
        else if ((x % 5)== 0){
            console.log(x + ':Buzz');
        }
        else {
            console.log(x);
        }
        
    }
}




function bubbleSort(items) {
	var length = items.length;
	for (var i = (length - 1); i >= 0; i--) {
		//Number of passes
		for (var j = (length - i); j > 0; j--) {
			//Compare the adjacent positions
			if (items[j] < items[j - 1]) {
				//Swap the numbers
				var tmp = items[j];
				items[j] = items[j - 1];
				items[j - 1] = tmp;
			}
        }
        console.log(items);
	}
}


var arr = [10, 7, 3, 1, 9, 7, 4, 3];

console.log('Initial Array :', arr.join(' '))
bubbleSort(arr);