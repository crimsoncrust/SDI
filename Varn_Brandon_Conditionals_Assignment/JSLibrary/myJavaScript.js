//SDI
//Conditionals 
//2/19/15
//By Brandon C Varn


//Global Variables

var heroName;
var heroLevel;
var heroStr;
var heroInt;
var heroWis;
var heroClass;
var enterDungeon = true;
var correctLvlClass;
var informationArray;

console.log ("Hello, today we are going to see if you qualify to enter the dungeon, if you are lucky enough you might be great enough to get bonus gold apon entering!");

//alert to see if they want to enter dungeon

enterDungeon = confirm ("Do you wish to enter the dungeon?");

//prompt for variables

heroName = prompt ("What is your hero's name?");

heroLevel = prompt ("What is " + heroName + "'s" + " current level?");

heroStr = prompt ("What is " + heroName + "'s" + " current strength?");

heroInt = prompt ("What is " + heroName + "'s" + " current intelligence?");

heroWis = prompt ("What is " + heroName + "'s" + " current wisdom?");

heroClass = prompt ("What is " + heroName + "'s" + " current class?  Type either 1 for Wizard, 2 for Warrior, or 3 for Cleric");

//confirm information inputed is correct

correctLvlClass = confirm ("Is this information correct? Hero's name is " + heroName + ". " + "Hero's Str " + heroStr + ", " + "Wis" + heroWis + ", " + "Int" + heroInt + ". " + "Hero's level is " + heroLevel + ". " + "Hero's class is " + heroClass + ".");

//Check to make sure the level is ok.

(heroLevel >= 20)? console.log ("Your Hero does have a high enough level."): console.log ("Your level is not high enough to enter the dungeon.");

//sticking in array for easier use// decided not to use it as it was not mandatory in the rubric for a array

informationArray = [heroName, heroClass, heroStr, heroInt, heroWis, heroLevel];

//Must match and compare the two inputed data inputs to verify if they meet both requirements

if ((Number(heroClass) == 2 && heroStr > 20)) {
	console.log ("Your hero is very powerful and can enter the dungeon!");
	
} else if ((Number(heroClass) == 1 && heroInt > 20)) {
    console.log ("Your hero is very smart and can enter the dungeon!");
    
} else if ((Number(heroClass) == 3 && heroWis > 20)) {
	console.log ("Your hero is very wise and can enter the dungeon!");

} else {
   console.log ("But your hero is to weak, stupid, and unwise to enter the dungeon!");
}

//calculations used division and math as well as prompt verification with number

console.log ("Let's see if your hero qualifies for the bonus gold apon entrance of the dungeon!");

if (((Number(heroLevel) + (Number(heroInt) + (Number(heroStr) + (Number (heroWis) / 3) >= 33))))) {
console.log ("Your hero has gone through many trials and may receive the bonus 100 gold blessing apon successful entrance to the dungeon.");
} else {
console.log ("Your hero has not garnered high enough power to recieve the gold blessing.  You may enter the dungeon but no gold bonus for you!");
}

















