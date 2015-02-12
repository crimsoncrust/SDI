// JavaScript Document
//Brandon C Varn
//Expressions
//2/15




// global variables 


var TransUnion;
var Equifax;
var Experian;
var ThreeBureaus;
var AverageThreeBureau;
var MinimumScore
var AverageScore
var ScoreIsTrue = true;
var EvictionConfirmationCheck;
var numberOfEvictions;
var ageOfEvictions;
var date = new Date () .getFullYear();


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

numberOfEvictions = prompt ("How many evictions does your perspective tenant have?");

//check to see if they put in 0 if they put in 0 run the console log saying they have no evictions

if (numberOfEvictions == 0){
	console.log ("Your applicant has no evictions and pass our recommendation for them to become a member.");
}

//if they have one eviction then we will need to do more verification first lets see if they have more then one.

   else if (numberOfEvictions == 1) {
   console.log ("Your applicant has one eviction and we must verify the data inputed.  Please hold on for date input.");
   ageOfEviction = prompt ("Please enter the 4 digit year the eviction happend on.");
   
  } else {
 	console.log ("Your applicant has to many evictions and we do not recommend you rent to them.");

}

//if the evictions did equal 1 then we need to check it against our recommendations our recommendation is it be at least 10 years old with another calculation

if (ageOfEviction <= (date - 10)) {
    console.log ("The Eviction is old enough that we recommend you rent to this perspective tenant.");

} else {
	if (ageOfEviction >= (date-9)) { 
   console.log ("The Eviction is to old and we do not recommend renting to this applicant.");
   
   }

}
