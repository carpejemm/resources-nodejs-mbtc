// This is Hoisting in JavaScript, which means that you can use a variable or function before it is declared in the code
console.log(greet('Coco Martin')); // Output: Hello, Coco Martin!

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

console.log('-------------------------------------------------------------');

// Increment and Decrement Operators
// ++ is the increment operator (increases a number by 1)
let count = 0;
console.log('Initial Count:', count);
// count = count + 1; // This is the long way to increment a number by 1
count++; // This is the post-increment operator, it will return the value of count before incrementing it
console.log('Count after post-increment:', count);

let number1 = 5;
// number = number + 1; // This is the long way to increment a number by 1
number1++; // This will increment number1 to 6, but it will return the value of number1 before incrementing it, which is 5
console.log('number1 after post-increment:', number1); // Output: 6 (because number1 has been incremented to 6)

let number2 = 10;
console.log('number2 before pre-increment:', number2);
// number2 = number2 + 1; // This is the long way to increment a number by 1
++number2; // This is the pre-increment operator, it will return the value of number2 after incrementing it
console.log('number2 after pre-increment:', number2); // Output: 11 (because number2 has been incremented to 11)

// -- is the decrement operator (decreases a number by 1)
let count2 = 8;
console.log('Initial Count2:', count2);
count2--; // This is the post-decrement operator, it will return the value of count2 before decrementing it
console.log('Count2 after post-decrement:', count2); // Output: 7 (because count2 has been decremented to 7)

let number3 = 22;
console.log('number3 before pre-decrement:', number3);
--number3; // This is the pre-decrement operator, it will return the value of number3 after decrementing it
console.log('number3 after pre-decrement:', number3); // Output: 21 (because number3 has been decremented to 21)

// Assignment Operators

let x = 100;
let y = 50;
let z = 90;
x = y; // This is the simple assignment operator, it assigns the value of y to x
console.log('x after simple assignment:', x); // Output: 50 (because x now has the value of y, which is 50)
x = z; // This will assign the value of z to x, so x will now have the value of 90
console.log('x after simple assignment:', x); // Output: 90 (because x now has the value of z, which is 90)
z = x; // This will assign the value of x to z, so z will now have the value of 90
console.log('z after simple assignment:', z); // Output: 90 (because z now has the value of x, which is 90)

// x = y -- result is 50 -- x now is 50
// x = z -- result is 90 -- x now is 90
// z = x -- result is 90 -- z now is 90

// += is the addition assignment operator, it adds the value on the right to the variable on the left and assigns the result to the variable on the left

let num16 = 99;
// num16 = num16 + 1; // This is the long way to increment num16 by 1
num16 += 1; // This is the short way to increment num16 by 1
console.log('num16 after addition assignment:', num16); // Output: 100 (because num16 has been incremented by 1)

let num17 = 70;
// num17 = num17 + 5; // This is the long way to add 5 to num17
num17 += 5; // This is the short way to add 5 to num17, it will add 5 to num17 and assign the result back to num17
console.log('num17 after addition assignment:', num17); // Output: 75 (because num17 has been incremented by 5)

// -= is the subtraction assignment operator, it subtracts the value on the right from the variable on the left and assigns the result to the variable on the left

let num18 = 60;
// num18 = num18 - 10; // This is the long way to subtract 10 from num18
num18 -= 10; // This is the short way to subtract 10 from num18, it will subtract 10 from num18 and assign the result back to num18
console.log('num18 after subtraction assignment:', num18); // Output: 50 (because num18 has been decremented by 10)

// *= is the multiplication assignment operator, it multiplies the variable on the left by the value on the right and assigns the result to the variable on the left
let num19 = 7;
// num19 = num19 * 3; // This is the long way to multiply num19 by 3
num19 *= 3; // This will multiply num19 by 3 and assign the result back to num19
console.log('num19 after multiplication assignment:', num19); // Output: 21 (because num19 has been multiplied by 3)

// /= is the division assignment operator, it divides the variable on the left by the value on the right and assigns the result to the variable on the left
let num20 = 100;
// num20 = num20 / 4; // This is the long way to divide num20 by 4
num20 /= 4; // This is the short way to divide num20 by 4, it will divide num20 by 4 and assign the result back to num20
console.log('num20 after division assignment:', num20); // Output: 25 (because num20 has been divided by 4)

// Comparison Operators
// returning value is always a boolean (true or false)
// > Greater than operator
let num21 = 1000;
let num22 = 500;
let num23 = 1000;
const result4 = num21 > num22;
console.log('num21 > num22:', result4); // Output: true (because 1000 is greater than 500)

// < Less than Operator
const result5 = num21 < num22;
console.log('num21 < num22:', result5); // Output: false (because 1000 is not less than 500)


// >= Greater than or equal to operator
const result6 = num21 >= num22;
console.log('num21 >= num22:', result6); // Output: true (because 1000 is greater than or equal to 500)
const result7 = num21 >= num23;
console.log('num21 >= num23:', result7); // Output: true (because 1000 is greater than or equal to 1000)

// <= Less than or equal to operator
const result8 = num21 <= num22;
console.log('num21 <= num22:', result8); // Output: false (because 1000 is not less than or equal to 500)
const result9 = num21 <= num23;
console.log('num21 <= num23:', result9); // Output: true (because 1000 is less than or equal to 1000)

// == Equality operator (compares values for equality with type coercion, doesnt check data type)
const num24 = 88; // number
const num25 = '88'; // string
const num26 = 77; // number
const result10 = num24 == num25;
// 88 == '88'
// 88 == 88 (because the string '88' is coerced to the number 88 before comparison is made)
// true (because 88 is equal to 88)
console.log('num24 == num25:', result10); // Output: true (because the string '88' is coerced to the number 88 before comparison is made)

const result11 = num24 == num26;
// 88 == 77
// false (because 88 is not equal to 77)
console.log('num24 == num26:', result11); // Output: false (because 88 is not equal to 77)




// === Strict equality operator (compares values and data type for equality without type coercion, checks both value and data type)
let num27 = 55; // number
let num28 = '55'; // string
let num29 = 58; // number
// 55 === '55'
// 55 is a number and '55' is a string, so they are not strictly equal because they have different data types
// false (because the string '55' is not the same data type as the number 55, even though they have the same value)
const result12 = num27 === num28;

let num30 = 0; // number
let num31 = true; // boolean
let num32 = false; // boolean
let num33 = 1; // number
const result13 = num30 === num31;
// 0 === true
// 0 is a number and true is a boolean, so they are not strictly equal because they have different data types
// false (because the boolean true is not the same data type as the number 0, even though they are both falsy values)
console.log('num30 === num31:', result13); // Output: false (because the boolean true is not the same data type as the number 0, even though they are both falsy values)

// if we will use equality operator (==) instead of strict equality operator (===) in the above example, the result will be true because of type coercion, where the boolean true is coerced to the number 1 and the boolean false is coerced to the number 0 before comparison is made.
const result14 = num33 == num31;
// 1 == true
// 1 == 1 (because the boolean true is coerced to the number 1 before comparison is made)
// true (because 1 is equal to 1)
console.log('num33 == num31:', result14); // Output: true (because 1 is equal to 1, even though the boolean true is coerced to the number 1 before comparison is made)

const result15 = num30 == num32;
// 0 == false
// 0 == 0 (because the boolean false is coerced to the number 0 before comparison is made)
// true (because 0 is equal to 0)
console.log('num30 == num32:', result15); // Output: true (because 0 is equal to 0, even though the boolean false is coerced to the number 0 before comparison is made) 


// != Inequality operator (compares values for inequality with type coercion)
// ! - is the logical NOT operator, it negates the value of a boolean expression
const num34 = 100;
const num35 = '100';
const num36 = 50;
const result16 = num34 != num35
// 100 != '100'
// 100 != 100 (because the string '100' is coerced to the number 100 before comparison is made)
// false (because 100 is equal to 100)
console.log('num34 != num35:', result16); // Output: false (because the string '100' is coerced to the number 100 before comparison is made)


// !== Strict inequality operator (compares values and data type for inequality without type coercion)
let num37 = 200;
let num38 = '200';
let num39 = 150;
const result17 = num37 !== num38;
// 200 !== '200'
// 200 is a number and '200' is a string, so they are not strictly equal because they have different data types
// true (because the string '200' is not the same data type as the number 200, even though they have the same value)
console.log('num37 !== num38:', result17); // Output: true (because the string '200' is not the same data type as the number 200, even though they have the same value)
const result18 = num37 !== num38;
// 200 !== '200'
// true (because 200 is not equal to 150)
console.log('num37 !== num38:', result18); // Output: true (because 200 is not equal to 150) 

// This is an object in JavaScript, which is a collection of key-value pairs
const person = {
  name: 'Jem Laguda',
  age: 30,
  city: 'Manila'
}
const myVar2 = true;
// const myVar3 = 

if (undefined) {
  console.log('This is a block of code that will be executed if the condition is true');
} else {
  console.log('This is a block of code that will be executed if the condition is false');
}

// && / AND Logical Operator
const isAdult = true;
const hasID = true;
const canEnterClub = isAdult && hasID;
console.log('Can enter club:', canEnterClub); // Output: true (because both isAdult and hasID are true)

let grade = 90;
let isEnrolled = true;
const canTakeExam = grade >= 80 && isEnrolled;
console.log('Can take exam:', canTakeExam); // Output: true (because grade is greater than or equal to 80 and isEnrolled is true)

let i = 5;
let j = 10;
const result19 = i > 10 && i == 10;
// 5 > 10 && 5 == 10
// false && false
// false (because both conditions are false)
console.log('Result of i > 10 && i == 10:', result19); // Output: false (because both conditions are false)

// || / OR Logical Operator
const isWeekend = false;
const isHoliday = true;
const walaBangPasok = isWeekend || isHoliday;
console.log('Wala bang pasok:', walaBangPasok); // Output: true (because isHoliday is true, even though isWeekend is false)

const isMonday = false;
const isSunday = true;
const isWeekend2 = isMonday || isSunday;
console.log('Is it weekend?', isWeekend2); // Output: true (because isSunday is true, even though isMonday is false)

// ! / NOT Logical Operator
const isRaining = false;
const coding = true;
const isSunny = !isRaining;
console.log('Is it sunny?', isSunny); // Output: true (because isRaining is false, so !isRaining is true)

const isNotCoding = !coding;
console.log('Is it not coding?', isNotCoding); // Output: false (because coding is true, so !coding is false)

const isAdmin = true;
const isSuperAdmin = true;
const hasAccess = isAdmin || !isSuperAdmin;
// isAdmin || !isSuperAdmin
// true || false
// true (because isAdmin is true, even though !isSuperAdmin is false)
console.log('Has access:', hasAccess); // Output: true (because isAdmin is true, even though !isSuperAdmin is false)

// Short Exercise
console.log('Short Exercise 1:', true == '1');
// Why true == '1' results to true?
// Because of type coercion, the boolean true is coerced to the number 1 before comparison is made, so it becomes 1 == '1', and then the string '1' is coerced to the number 1, so it becomes 1 == 1, which is true.

console.log('Short Exercise 2:', false === 0); // Strict equality operator (===) compares both value and data type
// false === 0
// false is a boolean and 0 is a number, - data type is different, so they are not strictly equal
// false (because the boolean false is not the same data type as the number 0, even though they are both falsy values)
console.log('Short Exercise 3:', false == 0); // Equality operator (==) performs type coercion, so the boolean false is coerced to the number 0 before comparison is made, so it becomes 0 == 0, which is true.

console.log(false == '0'); // Equality operator (==) performs type coercion, so the boolean false is coerced to the number 0 before comparison is made, so it becomes 0 == '0', and then the string '0' is coerced to the number 0, so it becomes 0 == 0, which is true.

const value1 = 1;
const value2 = 9;
console.log('Short Exercise 4:', (value1 > value2 || value1 == 1) && !(value2 === '9'));
// (1 > 9 || 1 == 1) && !(9 === '9')
// (false || true) && !(false)
// true && true
// true (because value1 == 1 is true, and !(value2 === '9') is also true)

// Functions in JavaScript
// A function is a reusable block of code that performs a specific task. It can take input parameters, perform operations, and return a value.

var testVar = 'Hello World in a function using var keyword';

// function is our keyword in declaring or creating a function in JavaScript
// convertsDollarToPesos - function name, it should be descriptive and meaningful to indicate what the function does
// amountInDollars - parameter/params - a variable that is used to receive the input value when the function is called, it acts as a placeholder for the value that will be passed to the function
function convertsDollarToPesos(amountInDollars) {
  // This is the scope of the function, any variable declared inside this function is only accessible within this function
  const exchangeRate = 61.37; // current exchange rate from dollars to pesos as of May 13, 2026
  console.log(exchangeRate); // Output: 61.37

  // var testVar = 'Hello World in a function using var keyword';
  console.log(testVar);

  // return statement is used to specify the value that a function should return when it is called, it allows us to get the result of the function's operations and use it outside the function
  return amountInDollars * exchangeRate; // This will return the result of multiplying the amount in dollars by the exchange rate, which will give us the equivalent amount in pesos
}

// console.log(exchangeRate) // This will cause an error because exchangeRate is not defined outside the function, it is only accessible within the function

console.log(testVar); // This will also cause an error because testVar is not defined outside the function, it is only accessible within the function

// 100 - is the argument that we are passing to the function, it is the actual value that will be used when the function is executed, and it will be assigned to the parameter amountInDollars
convertsDollarToPesos(100); // Output: 61.37 (because the function will log the exchange rate to the console, but it does not return any value yet)

console.log(convertsDollarToPesos(1000)); // Output: 61370 (because the function will return the result of multiplying 1000 by the exchange rate, which is 61.37)
console.log(convertsDollarToPesos(500)); // Output: 30685 (because the function will return the result of multiplying 500 by the exchange rate, which is 61.37)


function validateLoginForm(username, password) {
  const validUserName = 'admin';
  const validPassword = 'password123';

  if(username === validUserName && password === validPassword) {
    console.log('Login successful!');
    return 'Login successful!';
  } else {
    console.log('Invalid username or password. Please try again.');
    return 'Invalid username or password. Please try again.';
  }
}

validateLoginForm('superadmin', 'password123'); // Output: Invalid username or password. Please try again.
validateLoginForm('admin', 'password123'); // Output: Login successful!

// Short Exercise
function test1(x) {
  // function will only have one return statement that will be executed, and once a return statement is executed, the function will exit and any code after the return statement will not be executed
  return x;
  console.log('hello!') // dead code, this will never be executed because it is after the return statement
  return x + 5; // dead code as well, this will never be executed because it is after the first return statement
}

// test1(10)
console.log(test1(10)); // Output: 10 (because the function will return x, which is 10, and the console.log statement after the first return will not be executed, so 'hello!' will not be logged to the console, and the second return statement will also not be executed)


// Function Syntax - 3 ways on how to write a function in JavaScript
// 1. Function Declaration - a traditional way to define a function using the function keyword, followed by the function name and parentheses for parameters, and curly braces for the function body
// Hoisting applies to function declarations, which means that the function can be called before it is defined in the code, because the function declaration is hoisted to the top of its scope during the compilation phase

console.log(greet('Angel Locsin')); // Output: Hello, Angel Locsin! (because of hoisting, we can call the function before it is defined in the code)

// Hoisting means - we can call a function before it is defined in the code, because the function declaration is hoisted to the top of its scope during the compilation phase, so it is available for use even before it is defined in the code. This is only applicable to function declarations, not to function expressions or arrow functions.
function greet(name) {
  // function body - the block of code that defines what the function does, it is enclosed in curly braces {}
  return `Hello, ${name}!`;
}
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(greet('Jem')); // Output: Hello, Jem!
console.log(greet('Jeremie')); // Output: Hello, Jeremie!
console.log(greet('Rachel')); // Output: Hello, Rachel!

// const result20 = greet2 + 'Mabuhay!'; // This will cause error because greet2 is not defined yet, it is declared after this line of code


// const greet2 = 'Hello, Trainosys!!'

// 2. Function Expression - a way to define a function by assigning it to a variable, it can be anonymous (without a name) or named, and it is not hoisted, which means that it cannot be called before it is defined in the code
// Hoisting does not apply to function expressions

const greet2 = function(name) {
  return `Hello, ${name}!`;
}

greet2('Trainosys'); // Output: Hello, Trainosys! (because the function expression is not hoisted, we cannot call the function before it is defined in the code)
console.log(greet2('Trainosys')); // Output: Hello, Trainosys! (because the function expression is not hoisted, we cannot call the function before it is defined in the code)

// 3. Arrow Function - a more concise way to define a function using the arrow syntax (=>), it is always anonymous and it does not have its own this keyword, and it is not hoisted, which means that it cannot be called before it is defined in the code
// Hoisting does not apply to arrow functions

// arrow or fat arrow function syntax
const greet3 = (name) => {
  console.log('Arrow Function, paramter name is: ', name); // This will log the parameter name to the console, which is the value that is passed to the function when it is called
  return `Hello, ${name}!`;
}
// const name = 'Trainosys';
// console.log(name)

const greet4 = name => `Hello, ${name}!`; // This is a more concise way to write an arrow function with a single parameter and an implicit return

greet3('again, Trainosys!'); // Output: Hello, Trainosys! (because the arrow function is not hoisted, we cannot call the function before it is defined in the code)
console.log(greet3('again, Trainosys!')); // Output: Hello, Trainosys! (because the arrow function is not hoisted, we cannot call the function before it is defined in the code)

const helloWorldFunction = (adasdasdasd) => {
  // console.log(adasdasdasd);
  return adasdasdasd;
}

helloWorldFunction('Hello, Universe!!! Mabuhay')
console.log(helloWorldFunction('Hello, Trainosys!!!!!!')); 