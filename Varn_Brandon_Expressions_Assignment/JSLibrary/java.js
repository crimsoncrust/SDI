// JavaScript Document
//Brandon C Varn
//Expressions

var TransUnion;
var Equifax;
var Experian;
var ThreeBureaus;
var AverageThreeBureau;
var MinimumScore
var AverageScore
var ScoreIsTrue = true;
var EvictionConfirmationCheck
var numberOfEvictions

console.log ("Hello, we are going to verify if your tenant has sufficient credit and a good background to rent from you.")

//prompt for three major credit bureau scores

TransUnion = prompt ("What is your perspective Tenants TransUnion Credit Score?");
Equifax = prompt ("What is your perspective Tenants Equifax Score?");
Experian = prompt ("What is your perspective Tenants Experian score?");

//confirm the scores entered are correct

ThreeBureaus = confirm ("To confirm the three scores are " + TransUnion + "," + Equifax + "," + Experian + ".");

//put scores into a array

AverageThreeBureau = [TransUnion, Equifax, Experian];

//prompt for minimum score

MinimumScore = prompt ("What is the average minimum score you mandate for your rental?");

//Average three scores with addition and division calculation

AverageScore = (Number(AverageThreeBureau[0]) + Number(AverageThreeBureau[1]) + Number(AverageThreeBureau[2]))/3;

//true or false if the average score is equal to or greater then the minimum score inputed

if ((AverageScore >= MinimumScore) == true){
	console.log ("The score is good enough to rent to your perspective renter.");
	
	// if they do not meet the score requirement then they are not recommended to rent
	
	} else {
	console.log ("The perspective renter does not meet your requirements and you should not rent to them.");    

}

//verify if they want to go through the eviction record verification process 

EvictionConfirmationCheck = confirm ("Do you wish to check Eviction and evaluate if they do have a eviction wether or not you want to rent to them based on our recommendation.?");

//prompt for number of evictions the tenant has

numberofEvictions = prompt ("How many evictions does your perspective tenant have?");
