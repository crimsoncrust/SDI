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


function numberFirstValidation () {

if (myFirstNumber === "") {
   myFirstNumber = prompt ("You must enter a number");
}

console.log ("Your first number is " + myFirstNumber + ".");

}

function numberSecondValidation () {

if (mySecondNumber === "") {
   mySecondNumber = prompt ("You must enter a number");
}

	console.log ("Your second number is " + mySecondNumber + ".");

}

function numberThirdValidation () {

if (myThirdNumber === "") {
   myNumber = prompt ("You must enter a number");
}

	console.log ("Your third number is " + myThirdNumber + ".");

}

function numberFourthValidation () {

if (myFourthNumber === "") {
   myFourthNumber = prompt ("You must enter a number");
}

	console.log ("Your fourth number is " + myFourthNumber + ".");

}

function numberFifthValidation () {

if (myFifthNumber === "") {
   myFifthNumber = prompt ("You must enter a number");
}

	console.log ("Your fifth number is " + myFifthNumber + ".");
}

function numberSixthValidation () {

if (mySixthNumber === "") {
   mySixthNumber = prompt ("You must enter a number");
}

console.log ("Your second number is " + mySecondNumber + ".");

}

//main code


var myFirstNumber = prompt ("Enter first number between 1 and 53.");
numberFirstValidation();

var mySecondNumber = prompt ("Enter second number between 1 and 53.");
numberSecondValidation();

var myThirdNumber = prompt ("Enter your third number between 1 and 53");
numberThirdValidation();

var myFourthNumber = prompt ("Enter your fourth number between 1 and 53");
numberFourthValidation ();

var myFifthNumber = prompt ("Enter your Fifth number between 1 and 53");
numberFifthValidation ();

var mySixthNumber = prompt ("Enter your Sixth number between 1 and 54");
numberSixthValidation ();




