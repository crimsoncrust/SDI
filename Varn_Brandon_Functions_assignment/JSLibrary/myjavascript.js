//Created by Brandon C Varn
//2/24/15
//Functions

//variables

var myFirstNumber 
var mySecondNumber
var myThirdNumber
var myFourthNumber 
var myFifthNumber 
var mySixthNumber 
var powerballFLoridaLotto

//functions


function randomLottoNumberGenerator(){

var myRandomLottoArray = [];

	for (var i = 0; i <6; i++){

// finding random number between 1 and 53
	var randomNumber = Math.random() * (53 - 1) + 1;
	
	//return lowest integer rounded
	randomNumber = Math.floor(randomNumber);
	myRandomLottoArray [i] = randomNumber;
}
	return myRandomLottoArray;


}

function randomLottoNumberPowerBall (){

   
   var myRandomPowerball = [];
   
   for (var i = 0; i < 6; i++){
   
   var randomNumber = Math.random() * (59 - 1) + 1;
   
   randomNumber = Math.floor(randomNumber);
   myRandomPowerball [i] = randomNumber;
	
}

	return myRandomPowerball;

}


function randomLottoPowerball (){

var randomNumber = Math.random() * (35-1) +1;
randomNumber = Math.floor(randomNumber);
return randomNumber;

}



function numberFirstValidation (numberOne) {

while (numberOne === "") {
   numberOne = prompt ("You must enter a number");
   
}   
   if (numberOne > 53 && numberOne < 1){
     numberOne = prompt ("You must enter a number BETWEEN 1 and 53!");
   
}

console.log ("Your first number is " + numberOne + ".");

}



//main code


	//great them and tell them rules
	
var powerballFloridaLotto = prompt ("Type Powerball for powerball or FLorida for the Florida Lotto.");
if (powerballFloridaLotto == "Florida" || powerballFloridaLotto == "Powerball"){
	
	console.log ("You entered " + powerballFloridaLotto + ".");
	
	} else {
	
	var powerballFloridaLotto = prompt ("Type Powerball for powerball or FLorida for the Florida Lotto. You did it wrong the first time this is your last chance!");

}

if (powerballFloridaLotto == "Florida"){

console.log ("Ready to play the Florida Lottery! Get ready to enter 6 numbers between 1 and 53!");

	//retrieve there numbers and validate them with a function displaying at the end of each input.  infinite loop placed as all 6 numbers are needed.

var myFirstNumber = prompt ("Enter first number between 1 and 53.");
numberFirstValidation(myFirstNumber);

var mySecondNumber = prompt ("Enter second number between 1 and 53.");
numberFirstValidation(mySecondNumber);

var myThirdNumber = prompt ("Enter your third number between 1 and 53");
numberFirstValidation(myThirdNumber);

var myFourthNumber = prompt ("Enter your fourth number between 1 and 53");
numberFirstValidation (myFourthNumber);

var myFifthNumber = prompt ("Enter your Fifth number between 1 and 53");
numberFirstValidation (myFifthNumber);

var mySixthNumber = prompt ("Enter your Sixth number between 1 and 54");
numberFirstValidation (mySixthNumber);

//create a array to so we can bounce of lottery numbers to see if they win

var myInputedNumberArray = [myFirstNumber, mySecondNumber, myThirdNumber, myFourthNumber, myFifthNumber, mySixthNumber];


console.log ("Your six numbers are " + myInputedNumberArray + ".");


//Generate 6 lotto numbers

console.log ("The winning numbers are bu du du duuuuu.");

var myLottoArray = randomLottoNumberGenerator();

console.log ("The numbers are " + myLottoArray + ".");

console.log ("If " + myLottoArray + " are the same as your numbers. " + myInputedNumberArray + " then you are a winner.");

}

if (powerballFloridaLott == "Powerball"){









}