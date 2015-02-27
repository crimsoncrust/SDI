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


var arr = []
while(arr.length < 8){
  var randomnumber=Math.ceil(Math.random()*100)
  var found=false;
  for(var i=0;i<arr.length;i++){
	if(arr[i]==randomnumber){found=true;break}
  }
  if(!found)arr[arr.length]=randomnumber;
}
document.write(arr);



function randomLottoNumberGenerator(){

var myRandomLottoArray = [];
while (myRandomLottoArray.length <  6){

// finding random number between 1 and 53
	var randomNumber = Math.floor (Math.random() * (53 - 1) + 1);
	var found = false;
	for (var i = 0; i <myRandomLottoArray.length; i++){
		if (myRandomLottoArray[i]==randomNumber){found=true;break}
		}
		if(!found)myRandomLottoArray[myRandomLottoArray.length]= randomNumber;
	
}
	return myRandomLottoArray;


}

function randomLottoNumberPowerBall (){

   
   var myRandomPowerball = [];
   while (myRandomPowerball.length <5){
   
    var randomNumber = Math.floor (Math.random() * (59 - 1) + 1);
    var found = false;
   for (var i = 0; i < myRandomPowerball.length; i++){
   		if (myRandomPowerball [i] == randomNumber){found=true;break}
   		}
   		if(!found)myRandomPowerball[myRandomPowerball.length]=randomNumber;
	
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

if (powerballFloridaLotto == "Powerball"){

console.log ("Hello and welcome to the Powerball!");


var myPowerBall = randomLottoNumberPowerBall ();
var myPowerBallPowerNumber = randomLottoPowerball ();

console.log ("Your 5 powerball numbers are " + myPowerBall + ". " + "And your special powerball is " + myPowerBallPowerNumber + ".");






}