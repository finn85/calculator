console.log("скрипт подключен");

var MAX_LENGTH_STROKE = 18,
	SCREEN_NUMBERS = document.getElementById("screenNumbers"),
	firstNumber,
	secondNumber,
	currentSign;

function point(){
	SCREEN_NUMBERS.innerHTML += ".";
	//добавить исключение двух точек
}

function equal(){
	var result;
		secondNumber = SCREEN_NUMBERS.innerHTML;
	switch(currentSign){
		case "+":
			result = +firstNumber + +secondNumber;
			break;
		case "-":
			result = +firstNumber - +secondNumber;
			break;
		case "*":
			result = +firstNumber * +secondNumber;
			break;
		case "/":
			result = +firstNumber / +secondNumber;
			break;
	}
	SCREEN_NUMBERS.innerHTML = result;
}

function sign(curSign){
	firstNumber = SCREEN_NUMBERS.innerHTML;
	currentSign = curSign;
	cancel();
}

function cancel(){
	SCREEN_NUMBERS.innerHTML = 0;
}

function writeNumbers(num){
	if(SCREEN_NUMBERS.innerHTML.length < MAX_LENGTH_STROKE){
		if (SCREEN_NUMBERS.innerHTML === "0") {
			SCREEN_NUMBERS.innerHTML = num;
		} else{
			SCREEN_NUMBERS.innerHTML += num;
		}
	}
}