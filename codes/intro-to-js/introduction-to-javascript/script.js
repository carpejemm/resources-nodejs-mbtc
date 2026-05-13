// alert('Hello, World!');

// This is a comment in JavaScript
// You can write your JavaScript code here

/*
  This is a multiline comment in JavaScript
  You can use it to write longer explanations or notes
  It won't affect the execution of your code
*/

// Variables in JavaScript
// var - keyword used to declare a variable (old way, not recommended)
// greeting - name of the variable
// = - assignment operator
// 'Hello, World!' - value assigned to the variable (a string in this case)
var greeting = 'Hello, World!';
// 30 - value assigned to the variable (a number in this case)
var age = 30;
// console.log() - function used to print output to the console
console.log(greeting); // Output: Hello, World!
console.log(age); // Output: 30
console.log('Welcome to JavaScript programming!'); // Output: Welcome to JavaScript programming!

// Modern way to declare variables using let and const
let firstName = 'John';
const lastName = 'Doe';

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe

// let keyword
// You can reassign a new value to a variable declared with let

let city = 'New York';
console.log('Value of City before the reassignment:', city); // Output: New York

// Reassigning a new value to the variable city
city = 'Los Angeles';
console.log('Value of City after the reassignment:', city); // Output: Los Angeles
console.log(city); // Output: Los Angeles

// const keyword
// You cannot reassign a new value to a variable declared with const
// const is short for "constant", which means its value cannot be changed once assigned

const country = 'Philippines';
console.log('Value of Country before the reassignment:', country); // Output: Philippines

// Attempting to reassign a new value to the variable country will cause an error
// country = 'Japan'; // This will cause an error because you cannot reassign a value to a const variable

// Declaring a variable

let myVariable; // Declaring a variable without assigning a value
console.log(myVariable); // Output: undefined (because it has not been assigned a value yet)
let myName;
console.log(myName); // Output: undefined (because it has not been assigned a value yet)
let myAge;
console.log(myAge); // Output: undefined (because it has not been assigned a value yet)

// Initializing a variable

myVar = 'Hello'; // Initializing the variable with a value
console.log(myVar); // Output: Hello
myName = 'Alice'; // Initializing the variable with a value
console.log(myName); // Output: Alice
myAge = 25; // Initializing the variable with a value
console.log(myAge); // Output: 25

// Combine declaration and initialization

const myCity = 'Manila'; // Declaring and initializing the variable in one line
console.log(myCity); // Output: Manila
const myCountry = 'Philippines'; // Declaring and initializing the variable in one line
console.log(myCountry); // Output: Philippines

// JavaScript is loosely typed, which means you can assign different types of values to the same variable
let myFullName = 30; 

var myVariable1 = 'Hello';
myVariable1 = 42; // Reassigning a number to the same variable
console.log(myVariable1); // Output: 42

if (true) {
  let blockVariable = 'I am inside a block';
  // The scope of blockVariable is limited to this block, and it cannot be accessed outside of it
  var blockVariable2 = 'I am also inside a block but declared with var';
}

// console.log(blockVariable); // This will cause an error because blockVariable is not defined outside the block

console.log(blockVariable2); // Output: I am also inside a block but declared with var (because var has function scope, not block scope)

// var
// Scope is global
// Can redeclare and reassign
var blockVariable2 = 'I am outside the block but declared with var';
console.log(blockVariable2); // Output: I am outside the block but declared with var

let myNumber = 10;
console.log(myNumber); // Output: 10

// let myNumber = 20; // This will cause an error because you cannot redeclare a variable declared with let
// console.log(myNumber); // Output: 20

// Variable Naming Rules and Conventions
// - Don't start with underscore (_) or dollar sign ($) (though they are allowed, it's not recommended)
const _myVariable = 'This is not recommended';
const $myVariable = 'This is also not recommended';
// - Don't use numbers at the beginning of variable names
// const 1stVariable = 'This is not allowed'; // This will cause an error
// - Use lower camelCase for variable names (e.g., myVariable, firstName, etc.)
const myFullName2 = 'Jane Doe'; // This is a good variable name following the camelCase convention
const myMiddleName = 'Marie'; // This is also a good variable name following the camelCase convention
// - Make our variable names descriptive and meaningful - intuitive and concise
const userAge = 25; // This is a good variable name because it clearly indicates that it holds the age of a user
const userCity = 'Cebu'; // This is also a good variable name because it clearly indicates that it holds the city of a user
// - Don't use single letters or numbers as variable names (e.g., x, y, z, a, b, c, etc.) unless it's in a specific context like a loop or mathematical operation
const a = 'Jem Laguda'; // This is not a good variable name because it doesn't provide any information about what it represents
const b = 30; // This is also not a good variable name because it doesn't provide any information about what it represents
// - Avoid using reserved keywords as variable names (e.g., var, let, const, if, else, for, while, etc.)
// const let = 'This is not allowed'; // This will cause an error because let is a reserved keyword
// let if = 'This is also not allowed'; // This will cause an error because if is a reserved keyword

// Primitive Data Types in JavaScript
// 1. String - a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `)
const myString = 'Hello, World!'; // Using single quotes
const anotherString = "Welcome to JavaScript programming!"; // Using double quotes
const templateLiteral = `This is a template literal.`; // Using backticks

const myFirstName = 'Jem';
const myLastName = 'Laguda';
const fullName = `My Full Name is ${myFirstName} ${myLastName}.`; // Using template literals to embed variables
console.log('Using Template Literals:', fullName); // Output: My Full Name is Jem Laguda.
const fullName2 = 'My Full Name is ' + myFirstName + ' ' + myLastName + '.'; // Using string concatenation to combine strings and variables
console.log('Using String Concatenation:', fullName2); // Output: My Full Name is Jem Laguda. 

// 2. Number - represents both integer and floating-point numbers
const myNumber2 = 42; // An integer
const myFloat2 = 3.14; // A floating-point number
const PI2 = 3.14159; // A constant representing the value of pi
const negativeNumber2 = -10; // A negative number
const zero2 = 0; // Zero is also a number
// except for fractions
const fraction2 = 1 / 3; // A fraction that results in a floating-point number

// 3. Boolean - represents a logical entity that can have two values: true or false
const isJavaScriptFun = true;
const isCodingDifficult = true;
const isSkyGreen = false;

let test = 6 > 3; // This will evaluate to true because 6 is greater than 3
console.log(test); // Output: true

// 4. Null - represents the intentional absence of any object value

const myNullValue = null; // This variable is explicitly set to null, indicating that it has no value
const anotherNullValue = null; // This variable is also explicitly set to null, indicating that it has no value

// 5. Undefined - represents a variable that has been declared but has not been assigned a value
let myUndefinedVariable; // This variable is declared but not assigned a value, so it is undefined
console.log(myUndefinedVariable); // Output: undefined
const anotherUndefinedVariable = undefined; // This variable is explicitly set to undefined, indicating that it has not been assigned a value
console.log(anotherUndefinedVariable); // Output: undefined

let thisIsUndefinedVar;
console.log(thisIsUndefinedVar); // Output: undefined (because it has been declared but not assigned a value yet)
thisIsUndefinedVar = 'Now it has a value';
console.log(thisIsUndefinedVar); // Output: Now it has a value (because it has been assigned a value)

const myNumber3 = '10'; // This is a string, not a number, because it's enclosed in quotes
const myNumber4 = "123"; // This is also a string, not a number, because it's enclosed in quotes

console.log(typeof myNumber3); // Output: string  
console.log(typeof myNumber4); // Output: string

// Type Conversion/Coercion 
// 1. Explicit Type Conversion - when you manually convert a value from one type to another using built-in functions like String(), Number(), Boolean(), etc.
const num1 = '123456789';
console.log('num1 before conversion: ', typeof num1); // Output: string (because it's a string)
const convertedNum1 = Number(num1) // Explicitly converting the string '123456789' to a number using the Number() function
console.log('Explicit Type Conversion:', convertedNum1); // Output: 123456789 (as a number)
console.log('convertedNum1 after conversion: ', typeof convertedNum1); // Output: number (because it has been converted to a number)

const str1 = 888.88;
console.log('str1 before conversion:', typeof str1);
const convertedStr1 = String(str1); // Explicitly converting the number 888.88 to a string using the String() function
console.log('str1 after conversion:', typeof convertedStr1); // Output: string (because it has been converted to a string)
console.log(str1); // Output: 888.88 (as a number)
console.log(convertedStr1); // Output: '888.88' (as a string)

// 2. Implicit Type Coercion - when JavaScript automatically converts a value from one type to another based on the context in which it is used
const num2 = '10'; // string
const num3 = 5; // numbers
const result1 = num2 + num3;
console.log(result1); // Output: '105' (because the number 5 is coerced to a string and concatenated with the string '10')

const result2 = num2 == num3;
// The double equals (==) operator performs type coercion before comparing the values, so it converts the string '10' to the number 10 before comparing it to the number 5
console.log(result2); // Output: false (because '10' is not equal to 5)

const num4 = '1'; // string
const num5 = 1; // number
console.log(typeof num4); // Output: string
console.log(typeof num5); // Output: number

console.log(num4 == num5); // Output: true (because the string '1' is coerced to the number 1 before comparison is made)

console.log(1 == '1'); // Output: true (because the string '1' is coerced to the number 1 before comparison is made)

// Arithmeric Operators
const num6 = 10;
const num7 = 5;
const additionResult = num6 + num7; // Addition operator
console.log('Addition:', additionResult); // Output: 15

// + is concatenation operator approach first in JavaScript, so it will concatenate the values if one of them is a string
const result3 = num6 + '10'; // This will result in '1010' because num6 is coerced to a string and concatenated with '10'
console.log(result3); // Output: '1010' (string)

// - is subtraction operator
const subtractionResult = num6 - num7;
console.log('Subtraction:', subtractionResult); // Output: 5
const subtractionResult2 = num6 - '5'; // This will result in 5 because the string '5' is coerced to a number and subtracted from num6
console.log(subtractionResult2); // Output: 5 (number)
const subtractionResult3 = 'num8' - num7; // This will result in NaN because the string 'num8' cannot be coerced to a number
console.log(subtractionResult3); // Output: NaN (Not a Number)

// * is multiplication operator
const multiplicationResult = num6 * num7;
console.log('Multiplication:', multiplicationResult);
const multiplicationResult2 = num6 * '100'; // This will result in 1000 because the string '100' is coerced to a number and multiplied with num6
console.log(multiplicationResult2);
const multiplicationResult3 = 'num8' * num7; // This will result in NaN because the string 'num8' cannot be coerced to a number
console.log(multiplicationResult3); // Output: NaN (Not a Number)

// / is division operator
const divisionResult = num6 / num7;
console.log('Division:', divisionResult);
const divisionResult2 = num6 / '2'; // This will result in 5 because the string '2' is coerced to a number and num6 is divided by it
console.log(divisionResult2);
const divisionResult3 = 'num8' / num7; // This will result in NaN because the string 'num8' cannot be coerced to a number
console.log(divisionResult3); // Output: NaN (Not a Number)

// % is modulus operator (returns the remainder of a division operation)
const num8 = 20;
const num9 = 3;
const num10 = 15;
const num11 = 5;
const modulusResult = num8 % num9;
// 20 divided by 3 - 6 with a remainder of 2, so the modulus operator returns 2
console.log('Modulus:', modulusResult); // Output: 2 (because 20 divided by 3 leaves a remainder of 2)

const modulusResult2 = num10 % num11;
// 15 divided by 5 - 3 with a remainder of 0, so the modulus operator returns 0
console.log('Modulus Result 2:', modulusResult2); // Output: 0 (because 15 divided by 5 leaves no remainder)

// ** Operator - exponentiation operator (raises the first operand to the power of the second operand)
const num12 = 2;
const num13 = 3;
const exponentiationResult = num12 ** num13;
// 2 raised to the power of 3 is 2 * 2 * 2 = 8
console.log('Exponentiation:', exponentiationResult); // Output: 8 (because 2 raised to the power of 3 is 8)

const num14 = 5;
const num15 = 8;
const exponentiationResult2 = num14 ** num15;
// 5 raised to the power of 8 is 5 * 5 * 5 * 5 * 5 * 5 * 5 * 5 = 390625
console.log('Exponentiation Result 2:', exponentiationResult2); // Output: 390625 (because 5 raised to the power of 8 is 390625)

// We follow the order of operations (parentheses, exponents, multiplication and division from left to right, addition and subtraction from left to right) when evaluating expressions with multiple operators
const complexExpressionResult = (num12 + num13) * num14 ** num15 - num8 / num9;
// First, we evaluate the parentheses: (2 + 3) = 5
// Then we evaluate the exponentiation: 5 ** 8 = 390625
// Then we evaluate the multiplication: 5 * 390625 = 1953125
// Then we evaluate the division: 20 / 3 ≈ 6.666666666666667
// Finally, we evaluate the subtraction: 1953125 - 6.666666666666667 ≈ 1953118.3333333333
console.log('Complex Expression Result:', complexExpressionResult); // Output: 1953118.3333333333 (following the order of operations)