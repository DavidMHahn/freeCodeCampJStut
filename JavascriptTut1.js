//freeCodeCamp.org - Learn JavaScript Full Course for Beginners

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