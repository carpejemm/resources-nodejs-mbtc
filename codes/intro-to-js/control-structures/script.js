// if-elseif-else statement

const passingGrade = 80


if (passingGrade >= 80) { // if this condition is true, execute this block of code
  // code to execute if condition is true
  console.log("You passed the test!")
  // Will stop checking conditions after the first true condition is found, so the code below will not be executed even if it is true
} else if (passingGrade >= 60) { // if the previous condition is false and this condition is true, execute this block of code
  // code to execute if the previous condition is false and this condition is true
  console.log("You passed the test, but barely!")
} else { // if all previous conditions are false, execute this block of code
  // code to execute if all previous conditions are false
  console.log("You failed the test.")
}

// Another example of if-elseif-else statement

const timeOfDay = "afternoon"

if (timeOfDay === "morning") {
  console.log("Good morning!")
} else if (timeOfDay === "afternoon") {
  console.log("Good afternoon!")
} else if (timeOfDay === "evening") {
  console.log("Good evening!")
} else {
  console.log("Hello, Good day!")
}
const dayOfWeek = "Monday"
if ('') {
  console.log("Today is " + dayOfWeek)
}

if (dayOfWeek === "Monday") {
  console.log(`Happy ${dayOfWeek}!`)
} else {
  console.log(`Today is ${dayOfWeek}.`)
}

// Nested if statements
// To avoid deeply nested if statements, you can use logical operators (&& for AND, || for OR) to combine conditions in a single if statement. This can make your code cleaner and easier to read.
// In edge cases, you can use switch statements or create separate functions to handle specific conditions, which can help reduce the complexity of nested if statements and improve code readability.

const age = 25
const hasLicense = true
if (age >= 18 ) {
  if (hasLicense) {
    console.log("You can drive!")
    if ('condition') {
      console.log("You are a safe driver!")
    } else {
      console.log("You need to be more careful when driving.")
    }
  } else {
    console.log("You need a license to drive.")
  }
} else {
  console.log("You are too young to drive.")
}

// Short Exercise
// 1.
let x = 7
let y = 5

if (x > 5 && y < 10) {
  console.log("a");
} else {
  console.log("b");
}

if ((x > 5 && y < 10) && (y < 10 || x > 5)) {
  console.log("a");
} else {
  console.log("b");
}
// 2. 

let val = 3
if (val < 5) {
	console.log(true);
} else {
	console.log(false);
	console.log("Value is greater than 5");
}

// Ternary Operator

if (age >= 60) {
  console.log("You are a senior citizen.")
} else {
  console.log("You are not a senior citizen.")
}

// Convert into Ternary Operator
// ? - if
// : - else
age >= 60 ? console.log("You are a senior citizen.") : console.log("You are not a senior citizen.")

// Nested Ternary Operator

age >= 60 ? // if condition
  console.log("User is a Senior Citizen") 
  : 
  age === 18 
    ? // else if condition
    console.log("This will run if the first condition is false and this condition is true.") 
    : // else condition
    console.log("This will run if all conditions are false.")

// Switch Statement

let studentGrade = 70;

if (studentGrade >= 90) {
  console.log("Student's grade is A. Excellent work!");
} else if (studentGrade >= 80) {
  console.log("Student's grade is B. Good job!");
} else if (studentGrade >= 70) {
  console.log("Student's grade is C. You passed, but there's room for improvement. - Student 1");
} else if (studentGrade >= 60) {
  console.log("Student's grade is D. You barely passed, consider studying more.");
} else {
  console.log("Student's grade is F. Unfortunately, you failed. Please seek help and try again.");
}

// Convert into Switch Statement

let studentGrade2 = 60;
console.log(studentGrade2)

// 60
// 0
switch (studentGrade2) { // switch statement evaluates the expression and compares it to the cases
  // false vs 60
  case studentGrade2 >= 90: // value is false while the expecting value is 60, so it will not execute this block of code
    console.log("Student's grade is A. Excellent work!");
    break; // break is used to exit the switch statement after a case is executed
  // false vs 60
  case studentGrade2 >= 80: // value is false while the expecting value is 60, so it will not execute this block of code
    console.log("Student's grade is B. Good job!");
    break;
  // false vs 60
  case studentGrade2 >= 70: // value is false while the expecting value is 60, so it will not execute this block of code
    console.log("Student's grade is C. You passed, but there's room for improvement.");
    break;
  // true vs 60
  case studentGrade2 >= 60: // value is true while the expecting value is 60, so it will not execute this block of code
    console.log("Student's grade is D. You barely passed, consider studying more.");
    break;
  // false vs 60
  case studentGrade2 === 0: // value is false while the expecting value is 60, so it will not execute this block of code
    console.log("Student's grade is 0. The student did not show up for the test.");
    break;
  default: // default case will be executed if none of the above cases are true
    console.log("Student's grade is F. Unfortunately, you failed. Please seek help and try again.");
}

// another better example

const userRole = "admin"

switch (userRole) { // "admin"
  case "admin": // "admin" === "admin" - true
    console.log("Welcome, Admin! You have full access to the system.");
    break;
  case "editor": // "editor" === "admin" - false, so it will not execute this block of code
    console.log("Welcome, Editor! You can edit content but have limited access to settings.");
    break;
  case "viewer": // "viewer" === "admin" - false, so it will not execute this block of code
    console.log("Welcome, Viewer! You can view content but cannot make changes.");
    break;
  default: // default case will be executed if none of the above cases are true
    console.log("Welcome! Please log in to access more features.");
}

const deliveryStatus = "shipped"

switch (deliveryStatus) { // "shipped"
  case "to be shipped": // "to be shipped" === "shipped"
    console.log("Your order is being prepared for shipment by the seller.");
    break;
  case "shipped": // "shipped" === "shipped"
    console.log("Your order has been shipped and is on its way to you.");
    break;
  case "delivered": // "delivered" === "shipped"
    console.log("Your order has been delivered. Enjoy your purchase!");
    break;
  default: // default case will be executed if none of the above cases are true
    console.log("The shipment status is unknown because the parcel fell into the sea.");
}
const eWalletBalance = 100
const paymentMethod = "credit card"
// const paymentMethod = "e-wallet"

switch (paymentMethod) { // "credit card"
  case "cash":
    console.log("You have chosen to pay with cash. Please prepare the exact amount upon delivery.");
    break;
  case "credit card": // "credit card" === "credit card"
    console.log("You have chosen to pay with a credit card. Don't pay the delivery rider to avoid duplication of payment.");
    break;
  case "e-wallet":
    console.log("You have chosen to pay with an e-wallet. Please ensure you have sufficient balance and follow the instructions for payment.");
    if (eWalletBalance >= 100) {
      console.log("Payment successful. Your e-wallet balance is sufficient.");
    } else {
      console.log("Insufficient balance in your e-wallet. Please top up and try again.");
    }
    break;
  default:
    console.log("Unknown payment method. Please contact customer support for more information.");
}

// Short Exercise
// Make a function that returns the chinese zodiac based on the year

const getChineseZodiac = (year) => {
  switch (year % 12) {
    case 0:
      return "Monkey";
    case 1:
      return "Rooster";
    case 2:
      return "Dog";
    case 3:
      return "Pig";
    case 4:
      return "Rat";
    case 5:
      return "Ox";
    case 6:
      return "Tiger";
    case 7:
      return "Rabbit";
    case 8:
      return "Dragon";
    case 9:
      return "Snake";
    case 10:
      return "Horse";
    case 11:
      return "Goat";
    default:
      return "Invalid year";
  }
}

console.log(getChineseZodiac(1966));
console.log(getChineseZodiac(1998));
console.log(getChineseZodiac(1996));
console.log(getChineseZodiac(1979));

// Loops in JavaScript

// While Loop
// For Loop
// Do-While Loop

// While Loop - executes a block of code as long as a specified condition is true. The condition is evaluated before the execution of the loop's body, which means that if the condition is false at the beginning, the loop's body will not be executed at all.

let count = 0; // initialize a variable to keep track of the count
// looping variable
// condition checker variable

// while - is our keyword to start the loop
while (count < 11) { // condition to check before each iteration
  console.log(count); // code to execute in each iteration
  count++; // increment the count variable to avoid an infinite loop

  // 1st iteration: count = 0 - (0 < 11) - therefore the condition is true - execute the code again and increment count to 1
  // 2nd iteration: count = 1 - (1 < 11) - therefore the condition is true - execute the code again and increment count to 2
  // 3rd iteration: count = 2 - (2 < 11) - therefore the condition is true - execute the code again and increment count to 3
  // 4th iteration: count = 3 - (3 < 11) - therefore the condition is true - execute the code again and increment count to 4
  // 5th iteration: count = 4 - (4 < 11) - therefore the condition is true - execute the code again and increment count to 5
  // 6th iteration: count = 5 - (5 < 11) - therefore the condition is true - execute the code again and increment count to 6
  // 7th iteration: count = 6 - (6 < 11) - therefore the condition is true - execute the code again and increment count to 7
  // 8th iteration: count = 7 - (7 < 11) - therefore the condition is true - execute the code again and increment count to 8
  // 9th iteration: count = 8 - (8 < 11) - therefore the condition is true - execute the code again and increment count to 9
  // 10th iteration: count = 9 - (9 < 11) - therefore the condition is true - execute the code again and increment count to 10
  // 11th iteration: count = 10 - (10 < 11) - therefore the condition is true - execute the code again and increment count to 11
  // 12th iteration: count = 11 - (11 < 11) - therefore the condition is false - exit the loop
}

// Another example of while loop

let number = 1;

while (number <=5 ) {
  console.log(number);
  number++;
}

let correctPassword = "password123";
let enteredPassword = "sdfsdfsdf";
let attempts = 5;

while (enteredPassword !== correctPassword && attempts < 3) {
  console.log("Incorrect password. Please try again.");
  // Simulate user entering a new password (for demonstration purposes)
  enteredPassword = "password123"; // In a real application, you would get this input from the user
  
  attempts++;
}

if (attempts >= 3) {
  console.log("Too many failed attempts. Your account has been locked.");
} 

// For Loops - executes a block of code a specified number of times. It consists of three parts: the initialization, the condition, and the increment/decrement. The loop continues to execute as long as the condition is true.

// for - is our keyword to start the loop
for (let i = 0; i < 11; i++) { // initialization; condition; increment
  console.log(i); // code to execute in each iteration
}

// convert into while loop
let i = 0; // initialization of the looping variable
while (i < 11) {
  console.log(i);
  i++;
}

// examples of for loops

// Array of objects representing items in a shopping cart
const cart = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Headphones", price: 199.99 }
]

let totalPrice = 0; // variable to keep track of the total price
// length() function is getting the length of the cart array
// in our case - cart.length is 3 because there are 3 items in the cart array
for (let i = 0; i < cart.length; i++) {
  console.log(cart[i].name); // access the name of the item at index i
  totalPrice += cart[i].price; // add the price of the item at index i to the total price
  // totalPrice = totalPrice + cart[i].price

  // 1st iteration: i = 0 - cart[0].name is "Laptop" and cart[0].price is 999.99 - totalPrice = 0 + 999.99 = 999.99
  // 2nd iteration: i = 1 - cart[1].name is "Smartphone" and cart[1].price is 499.99 - totalPrice = 999.99 + 499.99 = 1499.98
  // 3rd iteration: i = 2 - cart[2].name is "Headphones" and cart[2].price is 199.99 - totalPrice = 1499.98 + 199.99 = 1699.97
  // 4th iteration: i = 3 - i < cart.length (3 < 3) - condition is false - exit the loop
}

console.log("Total Price:", totalPrice);

// Another example of for loop

for (let j = 0; j <= 10000; j++) {
  console.log(j)
}

let totalSavings = 0;

for (let month = 1; month <= 12; month++) {
  totalSavings += 3000;
  console.log(`Month ${month}: Total Savings = PHP ${totalSavings}`);
}

var count1 = 0;
while(count1 < 10) {
  console.log(count1);
  count1++;

  // how to stop the loop if there is no count1+
  // create a condition to break the loop if count1 reaches 50 times
  if (count1 >= 11) {
    console.log("Loop has been stopped to prevent an infinite loop.");
    break; // exit the loop
    // return; // exit the function (if this code is inside a function)
  }
}

// catch in there's any infinite loop through out the app
// error boundaries (React)

// do while loop - executes a block of code at least once, and then continues to execute as long as a specified condition is true. The condition is evaluated after the execution of the loop's body, which means that the loop's body will be executed at least once even if the condition is false at the beginning.


// do this is code while our condition is true
let num = 0;

do {
  console.log(num); // code to execute in each iteration
  num++; // increment the num variable to avoid an infinite loop    
} while (num < 11); // condition to check after each iteration

// Convert into while loop
let num2 = 0; // initialize a variable to keep track of the count
while (num2 < 11) { // condition to check before each iteration
  console.log(num2); // code to execute in each iteration
  num2++; // increment the num variable to avoid an infinite loop
}
