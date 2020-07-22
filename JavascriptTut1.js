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
