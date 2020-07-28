//freeCodeCamp.org - Learn JavaScript Full Course for Beginners
//YouTube link: https://www.youtube.com/watch?v=PkZNo7MFNFg

console.log("Hello World!"); // usual starting code

var myName = "David"; // setting a variable value, variable declaration. can be used in whole program

myName = 8; // changing the value of an existing variable

let ourName = "LA Dave"; // a local variable, limited scope within the area it was declared.

const pi = 3.14; // a variable that can't be changed. will throw an error if it is changed.

//Storing vs declaring variables
var a; //declaring a variable with null value
var b = 2; //declaring and assigning/initializing (using the = operator) a variable with a value
a = 7; // assigning a value to the previously declared variable a

// console.log() allows you to see things in the console.
console.log(a); //would print the value of 'a' into the console.

//use camelCase to name variables
var thisIsVariableName = "variable";

//arithmetic manipulation using +, -, *, /

// incrementing and decrementing
var myVar = 88;

myVar = myVar +1;
myVar++;

myVar = myVar - 1;
myVar--;

//modulo or remainder using %
var remainder;
remainder = 11 % 3; //gives the answer 2 to remainder.

//Compound assignment with augmented addition
a += 12; // is equivalent to a = a + 12;
b += 9;  // b = 9 + b;
c += 7;  // c = c + 7;

a -= 6;  // is equivalent to a = a - 6;
a *= 4;  // is equivalent to a = a * 4;
a /= 5;  // is equivalent to a = a / 5;

// strings are surrounded by " "
var firstName = "David";
var lastName = "Hahn";

//quotes within a string using escape character \
var myStr = "I am a \"double quoted\" string inside double quotes";
//can use single quotes instead of double quotes around the whole string
var myStr = 'I am a "double quoted" string inside single quotes';
//can use back ticks (accent marks) to escape all quotes
var myStr = `'I am a "double quoted" string inside 'single quotes' using back ticks'`;

//escape sequences in strings
/****
 * CODE     OUTPUT
 * \'       single quote
 * \"       double quote
 * \\       backslash
 * \n       newline
 * \r       carriage return
 * \t       tab
 * \b       backspace
 * \f       form feed
 *****/
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//String concatenation
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start. " + "This is the end."

//Concatenating strings with plus equals operator
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Constructing strings with variables
var ourName = "David Hahn";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "LA Dave";
var myStr = "This is " + myName + " coming at ya!";

//Appending variables to strings
var anAdjective = "awesome!";
var ourStr = "Free beer is ";
ourStr += anAdjective;

//Finding length of a string
var firstNameLength = 0;
var firstName = "Lenny";
firstNameLength = firstName.length;

//Bracket notation to find first character in string
var firstLetterOfLastName = "";
var lastName = "Bruce";
firstLetterOfLastName = lastName[0]; //Zero based indexing

//String Immutability - strings cannot be altered once created
var myStr = "Jello World!";
myStr[0] = "H"; //error, cant substitute an individual letter
myStr = "Hello World!"; //have to change the entire variable to a new string.

//Bracket notation to find the Nth character in a string
var firstName = "Lenny";
var secondLetterOfFirstName = firstName[1];
var thirdLetterOfFirstName = firstName[2];

//Bracket notation to find the last character in string
var firstName = "Lenny";
var lastLetterOfFirstName = firstName[firstName.length - 1];

//Bracket notation to find the Nth to last character in string
var firstName = "Lenny";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

//Word Blanks Game
    //create a function
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //function code
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the park " + myAdverb + ".";
    //return value
    return result;
}
//calling the function with variables and printing to console
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//Store multiple values with arrays
var ourArray = ["John", 23]; //arrays start and end with brackets, and elements are comma separated and of any data type.

//Nested arrays or multidimensional array, an array of arrays
var ourArray = [["the universe", 42], ["everything", 101010]];

//Access Array Data with Indexes
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50, the 0th element

//Modify Array Data with Indexes
var ourArray = [18,64,99];
ourArray[1] = 45; // the array is now [18,45,99]

//Access Multi-Dimensional Arrays with Indexes
var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12], 13, 14]]; //3 layar array
var myData = myArray[0][0]; //first bracket is first element in array, second bracket is the value of the first element of the array within the array.
var myData2 = myArray[2][1]; //this equals 8, the second element of the third array.

//Manipulate Arrays with push()
var ourArray = ["Stimpson", "J", "Cat"];
ourArray.push(["happy", "joy"]); // ourArray now equals ["Stimpson", "J", "Cat" ["happy", "joy"]]
var myArray = [["John", 23],["cat", 2]];
myArray.push(["dog", 3]);

//Manipulate Arrays with pop()
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); // removedFromOurArray now equals 3, and our array now equals [1,2]
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop(); //removes the second array in this case

//Manipulate Arrays with shift()
var ourArray = ["Stimpson", "J", ["Cat"]];
var removedFromOurArray = ourArray.shift(); //removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["Cat"]]. First element is removed.

//Manipulate Arrays with unshift()
var ourArray = ["Stimpson", "J", "Cat"];
ourArray.shift(); //ourArray now equals ["J", "Cat"]
ourArray.unshift("Happy"); //ourArray now equals ["Happy", "J", "Cat"]

var myArray = [["John", 23], ["dog", 3]]
myArray.shift();
myArray.unshift(["Phil", 34]);

//Shopping List (array of arrays)
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//Functions - can be reused in your code
function ourReusableFunction() {
    console.log("Hello, World!");
}

ourReusableFunction(); //the call of the reusable function

//Passing Values to Function with Arguments
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); //outputs 5

function functionWithArgs(a, b){
    console.log(a + b);
}
functionWithArgs(10, 5); //outputs 15

//Global Scope and Functions
var myGlobal = 10; //a global variable

function fun1() {
    oopsGlobal = 5; //since not using 'var' keyword, this becomes global automatically.
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

//Local Scope and Functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar); //returns 5 to the console
}
myLocalScope(); //calls the function and it will print the 5 on console
console.log(myVar); //returns an error as the myVar is not global

//Global vs Local Scope in Functions
//you can have local and global variables with the same name, but it can be confusing for debugging purposes. The local variable takes precedent over the global variable.
var outerWear = "T-Shirt"; //global variable
function myOutfit() {
    var outerWear = "Sweater"; //local variable
    return outerWear;
}

console.log(myOutfit()); //will print Sweater
console.log(outerWear); //will print T-Shirt

//Return a Value from a Function with Return
function minusSeven(num) {  //function has an argument 'num'
    return num - 7;         //this returns the value 'num' - 7 to the function (function output)
}

console.log(minusSeven(10)); //calling the function with 10 in the argument passes the number 10 to the function which inserts it into the calculation in the return statement. The outcome of the function call with 10 as argument will print 3 (10 - 7).
//Similarly
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5)); //should output 25

//Understanding Undefined Value Returned from a Function
var sum = 0; //global variable
function addThree() {   //this function has no return, so value is 'undefined'
    sum = sum + 3;
}

function addFive() {    //this also is undefined as there is no returned value
    sum += 5;
}

//Assignment with a returned value
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);   //5 will be the result


var processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);  //2 will be the result

//Stand in Line (function of a queue)
function nextInLine(arr, item) {
    arr.push(item); //push adds an item to the end of a list
    return arr.shift(); //shift removes the first item of list and returns it.
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is a way to convert an array into a string which can be printed to console.log
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(test));

//Boolean Values
function welcomeToBooleans() {
    return false;
}

function welcomeToBooleans() {
    return true;
}

//Use Conditional Logic with If Statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";

}

console.log(trueOrFalse(true));

//Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { //val == 'some number' for equivalency test, not equal to (=)
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

//Comparison with the Strict Equality Operator (===), doesn't do type conversion
//e.g. 3 === 3 true, 3 === "3" false, 3 == "3" true, 
function testStrict(val) {
    if (val === 3) {
        return "Equal";
    }
    return "Not Equal";
}

console.log (testStrict(10));

//Practicing Comparing Different Values
function compareEquality(a, b) {
    if (a == b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10")); // returns and prints equal

//Strict
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10")); // returns and prints Not Equal

//Inequality Operator (performs type conversion)
function testNotEqual(val) {
    if (val != 9) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10)); //returns and prints Not Equal

//Strict Inequality Operator
function testNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual("17")); //Returns and prints Not Equal

//Comparisons with the Greater Than (>) Operator
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
        
    }
    return "10 or Under";
}

console.log(testGreaterThan(10)); //returns and prints 10 or Under

//Comparisons with the Greater Than Or Equal To (>=) operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterOrEqual(10)); //returns and prints 10 or Over

//Comparisons with the Less Than Operator
function testLessThan(val){
    if (val < 10) {
        return "Less Than 10";
    }
    if (val < 20) {
        return "Less Than 20";
    }
    return "Greater than or Equal to 20";
}
console.log(testLessThan(20));

//Comparisons with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val <= 10) {
        return "Less Than or Equal to 10";
    }
    if (val <= 20) {
        return "Less Than or Equal to 20";
    }
    return "More Than 20";
}
console.log(testLessOrEqual(30));

//Comparisons with the Logical 'AND' Operator (&&)
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
            return "Yes";
        }
    return "No";
}
console.log(testLogicalAnd(30));

//Comparisons with the Logical 'OR' Operator (||)
function testLogicalOr(val) {
    if (val < 10 || val > 20) { //is the value less than 10 or greater than 20
        return "Outside";
    }

    return "Inside";
}
console.log(testLogicalOr(30));

//Else Statements
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
        result = "5 or Smaller";
    }
    return result;
}
console.log(testElse(6));

//Else If statements
function testElseIf(val) {
    if (val > 10 ) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
    return "Between 5 and 10";
    }
}
console.log (testElseIf(6));

//Logical Order in If Else Statements
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10";
    }
    else if (val < 5) { //Notice that this is out of order, it should be above the top if statement.
        return "Less than 5";
    }
    else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7)); //will return 'Less than 10' for any value less than 10, including values less than 5. 
// Corrected Logical Order in If Else Statements (using above example)
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 10";
    }
    else if (val < 10) { 
        return "Less than 5";
    }
    else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7)); //This will give correct values now that the order is correct.

//Chaining If Else Statements
/*
Write chained if/else statements to fulfill the following conditions:
num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

function myChainedStatements(val) {
    if (val < 5) {
        return "Tiny";
    }
    else if (val < 10) {
        return "Small";
    }
    else if (val < 15) {
        return "Medium";
    }
    else if (val < 20) {
        return "Large";
    }
    else {
        return "Huge";
    }
}
console.log(myChainedStatements(20));

//Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 0) {
        return "Well, we're waiting";
    }
    else if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }
   
}
console.log(golfScore(5,4));

//Switch Statements
/* Write a switch statment which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));

//Default Option in Switch Statements
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
    case "a":
        answer = "apple";
        break;
    case "b":
        answer = "bird";
        break;
    case "c":
        answer = "cat";
         break;
    default:  //provides a default output when one of the cases is not met.
        answer = "stuff";
        break;
}
return answer;
}
console.log(switchOfStuff("a"));

//Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}

console.log(sequentialSizes(1));

//Replacing If Else Chains with Switch statement
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "Bob":
            answer = "Marley";
            break;
        case "42":
            answer = "The Answer";
            break;
        case "1":
            answer = "There is no #1";
            break;
        case "99":
            answer = "Missed me by this much!";
            break;
        case "7":
            answer = "Ate Nine";
            break;   
    }
/*  if (val === "Bob") {  ***The commented out code is what the switch statement replaces***
        answer = "Marley";
    }
    else if (val === 42) {
        answer = "The Answer";
    }
    else if (val === 1) {
        answer = "There is no #1";
    }
    else if (val === 99) {
        answer = "Missed me by this much!";
    }
    else if (val === 7) {
        answer = "Ate Nine";
    }
*/
    return answer;
}

console.log(chainToSwitch());

//Returning Booolean Values from Functions
function isLess(a, b) {
    return a < b;

/*    if (a < b)  ***The commented out code is replaced with a simple return statement.    Recall that all comparison operators return a boolean (True/False) value.***
        return true;
    }
    else {
        return false;
    }
*/
}
console.log(isLess(10, 15));

//Returning Early Pattern from Function
function abTest(a, b) {

    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2)); // square root of 2 + square root of 2 = 2.828, 2.828 squared = 7.99, rounded up equals 8.

//Counting Cards
var count = 0; //global count variable

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        //no need to add or subtract for 7, 8, or 9.
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --;
            break;
    }
    var holbet = "Hold";
    if (count > 0) {
        holdbet = "Bet";
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc("K"); cc("A");
console.log(cc(4));

//Build Javascript Objects
var ourDog = {      //Generic Dog object
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {       //Our Dog Object based on Generic Dog object
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

//Accessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat; //assigns the value of the hat item in the object to hatValue
var shirtValue = testObj.shirt; //assigns the value of the shirt item to shirtValue

console.log(hatValue); //prints ballcap
console.log(shirtValue);//prints jersey

//Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "hamburger", //must use bracket notation if there is a space in the property value
    "my side": "veggies",
    "the drink": "water",
};

var entreeValue = testObj["an entree"]; //note that you will use either ""
var drinkValue = testObj['the drink'];  //or '' for strings inside the brackets.

console.log(entreeValue);
console.log(drinkValue);

//Accessing Object Properties with Variables
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16; //create a variable and assign value of 16 which corresponds to a player name in the testObj.
var player = testObj[playerNumber]; //pass the variable playerNumber (16) into the testObj and assign that value to player. Since 16 is "Montana", the testObj will return "Montana" and assign it to the variable player.
var player2 = testObj[19]; //More directly, this assigns "Unitas" to the variable player2, without using an additional variable to look up the value in the testObj.

console.log(player); //prints out Montana
console.log(player2); //prints out Unitas

//Updating Object Properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"]
};
ourDog.name = "Happy Camper"; //changes the value of the name property in the ourDog object to "Happy Camper"

var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers!"]
};
myDog.name = "Happy Coder";

console.log(ourDog.name);
console.log(myDog.name);

//Add New Properties to an Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
ourDog.bark = "bow-wow"; //adding a new property to ourDog
console.log(ourDog);

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog['bark'] = "woof!"
console.log(myDog);

//Delete Properties from an Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "bark": "bow-wow"
};
console.log(ourDog);
delete ourDog.bark;
console.log(ourDog);

var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "bark": "woof"
};
console.log(myDog);
delete myDog.tails;
console.log(myDog);

//Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";

/* can replace the switch statement below with an object for doing lookups.
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Easy";
            break;
    }
*/
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

//Testing Objects for Properties
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
   if (myObj.hasOwnProperty(checkProp))  {
    return myObj[checkProp];
    }
    else {
    return "Not Found";
    }
}
console.log(checkObj("gift"));

//Manipulating Complex Objects
var myMusic = [ //Array called myMusic containing objects.
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },                          //add a comma after each element in an array, including multiple objects within an array.
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];

//Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents); //prints maps
//alternatively
var gloveBoxContents = myStorage.car.outside["trunk"]; //prints jack

//Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]; //remember that arrays start counting at 0
console.log(secondTree);

//Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection)); //Keep a copy of the collection for tests. This makes a copy of the collection object.

function updateRecords(id, prop, value) {
    if (value === "") { //if the value is blank, then delete the id and property
        delete collection[id][prop];
    }
    else if (prop === "tracks") { //for tracks, we would want to add another track to the existing array of tracks, not replace a track.
        collection[id][prop] = collection[id][prop] || []; //if the tracks property is empty, we want to create an array [].
        collection[id][prop].push(value); //when the property 'tracks' exists, this code allows the addition of a track (passed in via the value variable) to the end of the array.
    }
    else {
        collection[id][prop] = value; //if the value isn't blank, nor is it 'tracks' then we push the value onto the property.
    }

    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));

console.log(updateRecords(2468, "tracks", "song"));

console.log(updateRecords(2468, "test", "bloke"));

//Iterate While Loops
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//Iterate with For Loops
var ourArray = [];
for (var i = 0; i < 5; i++) { //first item in parentheses is initialization, then condition, then expression
    ourArray.push(i);
}
console.log(ourArray);

//Example 2 of For Loop
var myArray = [];

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}
console.log(myArray);

//Iterate Odd Numbers with a For Loop
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

//For Loop Iterating Odd Numbers
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(myArray);

//Count Backwards with a For Loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);


var myArray = [];
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
console.log(myArray);

//Iterate Through an Array with a For Loop
var ourArray = [9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArray.length; i++) {
    ourTotal += ourArray[i];
}
console.log(ourTotal);

var myArray = [2, 3, 4, 5, 6];
var myTotal = 0;
for (var i = 0; i < myArray.length; i++) {
    myTotal += myArray[i];
}
console.log(myTotal);

//Nesting For Loops, when you have a nested array, in order to access all of the array elements
function multiplyAll(arr) {
    var product = 1;
    
    for (var i = 0; i < arr.length; i++) { //iterate through outer array
        for (var j = 0; j < arr[i].length; j++) { //iterate through inner array
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

//Iterate with Do...While Loops. A 'Do...While' loop will run at least one time and then it checks the condition.
var myArray = [];
var i = 10;

//While loop
while (i < 5) { //check 'while' condition before running any code in the loop. I is NOT less than 5, so it does nothing really.
    myArray.push(i);
    i++;
}
console.log(i, myArray); //Prints 10, []

//Do...While Loop, runs once before checking 'while' condition.
do {
    myArray.push(i);
    i++;
}
while (i < 5)
console.log(i, myArray); //Prints 11, [10]

//Coding Challenge
var contacts = [ //Create an array named 'contacts', and fill it with data
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwards", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) { //lookup function to find the data we are interested in retrieving
    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].firstName === name) {
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No Such Contact";
}

var data = lookUpProfile("Akira", "likes");

console.log(data);

//Generate Random Fractions
function randomFraction() {

    return Math.random(); //creates a pseudorandom decimal number between and including 0 up to, but not including, 1.
}
console.log(randomFraction());

//Generate Random Whole Numbers
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); //Generates a random number between 0 and 19.
console.log(randomNumberBetween0and19());

function randomWholeNum() {

    return Math.floor(Math.random() * 10); //Gives a random number between 0 and 9
}
console.log(randomWholeNum());

//Generate Random Whole Numbers within a Range
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

console.log(ourRandomRange(1, 9));

//Example
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);

console.log(myRandom);

//Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("56"));

//Use the parseInt Function with a Radix - Radix is the base of the number in the string (e.g. base 2, base 10).
function convertToInteger(str) {
    return parseInt(str, 2); //pass in the string as base 2.
}
console.log(convertToInteger("10011")); //Prints 19 to the console

//Use the Conditional (Ternary) Operator -- condition ? statement-if-true : statement-if-false;
function checkEqual(a, b) {
    return a === b ? true : false; // return a === b; is functionally the same
//Can use the Conditional Operator above to replace the code below
/*    if(a == b) {
        return true;
    }
    else {
        return false;
    }
*/
}
console.log(checkEqual(1, 2));

//Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));

//Differences Between the 'var' and 'let' Keywords for declaring variables
//ES6 allows us to declare variables using 'let' and 'const'.
//'let' doesn not allow us to declare a variable twice.
/* var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + "says Meow!";
}
console.log(catTalk()); //Won't give an error of duplicate declaration "catName"
*/
//Change 'var' to 'let'
let catName = "Quincy";
let quote;

let catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + "says Meow!";
}
console.log(catTalk()); //gives an error of duplicate declaration "catName"

//You can use 'let' to declare the catName variable and then later reset it without using 'let'
let catName = "Quincy";
let quote;

catName = "Beau"; //resetting the catName variable after declaring it using 'let'

function catTalk() {
    "use strict";   //This enables strict mode to catch mistakes and unsafe actions

    catName = "Oliver";
    quote = catName + "says Meow!";
}
console.log(catTalk());

//Compare Scopes of the 'var' and 'let' Keywords. 'var' declarations are global unless declared in a function where they are local. 'let' declarations are limited in scope to the block statement or expression they are declared in.
function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}
checkScope(); //Prints to console - Block scope i is: "block scope". Function scope i is: "block scope". Note that both scopes are block scope, because the var i declaration is overwritten in the block (i = "block scope").
//Rewriting the above code using let
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) { //A block is anything within { }.
       let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}
checkScope();//Prints to console - Block scope i is: "block scope". Function scope i is: "function scope". 'let' allows the two declarations to be separate and not overwrite one with the other.

//Example of 'var' declaration being accessible outside of a block.
function checkScope() {
    "use strict";
    
    if (true) { //A block is anything within { }.
       var i = "block scope"; //'var' declaration being accessible outside of block
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}
checkScope(); //Prints to console - Block scope i is: "block scope". Function scope i is: "block scope". Variable i is still accessible outside of the block

//Example of 'let' declaration not being accessible outside of block
function checkScope() {
    "use strict";
    
    if (true) { //A block is anything within { }.
       let i = "block scope"; //'let' declaration not being accessible outside of block
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
}
checkScope(); //Prints to console - Block scope i is: "block scope". ReferenceError. i is not defined (for the function scope).

//Declare a Read-only Variable with the 'const' Keyword
function printManyTimes(str) {
    "use strict";
    var sentence = str + " is cool!"; //sentence variable declared as 'var'
    sentence = str + " is amazing"; //sentence variable reassigned
    
    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp"); //Prints to console - freeCodeCamp is amazing!

function printManyTimes(str) {
    "use strict";
    const sentence = str + " is cool!"; //sentence variable declared as 'const'
    sentence = str + " is amazing"; //sentence variable reassigned. This fails.
    
    for(var i = 0; i < str.length; i += 2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp"); //Prints to console - Error: SyntaxError: unknown: "sentence" is read-only. This happens because sentence was declared as 'const' so it can not be reassigned. Note: if you know for sure that you never want to reassign a variable, use 'const' when declaring it. Also, it is very common to use ALL CAPS for the variable name as below.
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!"; //sentence variable declared as 'const'
    //sentence = str + " is amazing"; //sentence variable reassigned. This fails. Commented this line out.
    
    for(let i = 0; i < str.length; i += 2) { //declaring i using 'let'
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//Mutate an Array Declared with 'const'
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s = [2, 5, 7];
}
editInPlace(); //This causes an error, 's' is read-only
//However you can do this:
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2; //Here we have reassigned the each index in the array
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

//Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

try {
    MATH_CONSTANTS.PI = 99;
}
catch( ex ) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI); //Prints to console - 99 (i.e. the initial value was overwritten)

//Here we use Object.freeze to prevent the 'const' value from changing/being overwritten
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); //prevents MATH_CONSTANTS from being overwritten

try {
    MATH_CONSTANTS.PI = 99;
}
catch( ex ) { //this is the catch block to throw an exception.
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI); //Prints - TypeError: cannot assign to read-only property 'PI' of object

//Use Arrow Function to Write Concise Anonymous Functions
var magic = function() { //this is an anonymous function it doesn't have a name, it is just assigned to the magic variable
    return new Date();
};
//Rewriting the above code using Arrow Function
var magic = () => {
    return new Date();
};
//Can be rewritten even further
var magic = () => new Date();
//alternatly
const magic = () => new Date();

//Write Arrow Functions with Parameters
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

//converting the above function into an arrow (=>) function
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); //Prints - [1, 2, 3, 4, 5]

//Write Higher Order Arrow Functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Rewriting the above code using higher order Arrow function. We want to square only the positive integers (using filter and map functions).
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//Using Default Parameters in functions.
const increment = (function() {
    return function increment(number, value = 1) { //setting a default for value (1).
        return number + value;
    };
}) ();
console.log(increments(5, 2));
console.log(increments(5));

//Use the Rest Operator (...) with Function Parameters. The rest operator allows you to create a function with a variable number of arguments.
const sum = (function() {
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); //Prints 6.

//Converting the code above into using the Rest Operator
const sum = (function() {
    return function sum(...args) { //... allows for any number of arguments to be passed in.
        //const args = [ x, y, z ]; commented out
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4)); //Prints 10

//Use the Spread Operator to Evaluate Arrays In-place. Spread operator looks like the rest operator (...), but it expands/spreads an already existing array into the individual parts. Can only be used in an argument to a function or in an array literal.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = arr1;
    arr1[0] = 'potato'
})();
console.log(arr2); //prints ["potato", "FEB", "MAR", "APR", "MAY"] in the above example the array is changed to replace the 0th element from 'JAN' to 'potato'
//Rewriting the above code to use the Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; //using the spread operator inside brackets (array) to make arr2 equal to the contents of array 1.
    arr1[0] = 'potato'
})();
console.log(arr2); //prints ["JAN", "FEB", "MAR", "APR", "MAY"]
console.log(arr1); //prints ["potato", "FEB", "MAR", "APR", "MAY"]

//Use Destructuring Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54}; //object with 3 elements
var x = voxel.x; // x = 3.6     This is the old way of assigning each element of the
var y = voxel.y; // y = 7.4     object with it's own variable.
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const tempOfTomorrow = undefined;
}

//Rewriting the above code using Destructuring Assignment

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperatures; //Destructuring syntax
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); //Prints 79

//Why not this way?
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw() {
    "use strict";
    const { tomorrow : tempOfTomorrow } = AVG_TEMPERATURES; //Destructuring syntax
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); //Also prints 79

//This works too
const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(AVG_TEMPERATURES) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = AVG_TEMPERATURES; //Destructuring syntax
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // Prints 79

//Destructuring Assignment with Nested Objects
const LOCAL_FORCAST = {                 //Nested objects
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6}
};
function getMaxOfTmrw(forecast) {
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forecast; //Gets max from tomorrow and sets it to maxOfTomorrow.

    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORCAST)); //Prints 84.6

//Use Destructuring Assignment to Assign Variables from Arrays
const [z, x] = [1, 2, 3, 4, 5, 6]; //assigns z and x to the first 2 variables of the array by default
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; //assigns z to first element, x to second element, skips third element, and assigns y to fourth element.
console.log(z, x, y); //prints 1, 2, 4

//Destructuring to switch places of a and b
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
})();
console.log(a);
console.log(b);

//Use destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , , ...arr] = list; //removes first two variables by assigning them no value
    return arr;
}
const arr = removeFirstTwo(source)
console.log(arr); //Prints [3,4,5,6,7,8,9,10]

//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half(stats) { //passing in the entire stats object as function argument
        return (stats.max + stats.min) / 2.0 //but we only need max and min
    };
})();
console.log(stats);
console.log(half(stats));

//Rewriting the above code to pass in only what we need. This is commonly used with API calls/AJAX requests
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    return function half({ max, min }) { //passing in only what we need
        return (max + min) / 2.0
    };
})();
console.log(stats);
console.log(half(stats));

//Create Strings using Template Literals
