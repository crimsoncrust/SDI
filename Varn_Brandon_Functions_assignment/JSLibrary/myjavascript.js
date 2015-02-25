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

//functions


function randomNumberOneGenerator(){

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
