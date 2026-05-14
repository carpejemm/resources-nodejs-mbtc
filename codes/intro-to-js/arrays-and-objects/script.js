const num1 = 1;
const num2 = 2;
const num3 = 3;

// arrays
const nums = [1, 2, 3];

// indexing - index always starts at 0
// 1 - index 0
// 2 - index 1
// 3 - index 2

// 2 ways to initialize an array
const sampleArr = [];
// new keyword - creates an instance of an object
// Array is a built in constructor function in JavaScript
const sampleArr2 = new Array();

// Array can hold any data type
const mixedArr = [
  1, 
  'two', 
  true, 
  null, 
  undefined, 
  { name: 'John' }, // this is an object
  [1, 2, 3]
];

// Add elements to an array
const fruits = ['apple', 'banana', 'orange'];
fruits[3] = 'grapes'; // adds 'grapes' at index 3
console.log(fruits); // ['apple', 'banana', 'orange', 'grapes']

// Some of the most common built in array methods
const arrayOfLaptops = ['MacBook', 'Dell', 'HP', 'Lenovo', 1, '1', '$', null, undefined, true, false];

// push - adds an element to the end of the array
arrayOfLaptops.push('Asus');
console.log('Updated array of laptops after using push():', arrayOfLaptops); // ['MacBook', 'Dell', 'HP', 'Lenovo', 'Asus']

// pop - removes the last element from the array and returns it
const removedLaptopAtTheEnd = arrayOfLaptops.pop();
console.log('Removed laptop at the end:', removedLaptopAtTheEnd);
console.log('Updated array of laptops after using pop():', arrayOfLaptops); // ['MacBook', 'Dell', 'HP', 'Lenovo']

// reverse - reverses the order of the elements in the array
arrayOfLaptops.reverse();
console.log('Updated array of laptops after using reverse():', arrayOfLaptops); // ['Lenovo', 'HP', 'Dell', 'MacBook']

// indexOf - returns the index of the first occurrence of a specified element in the array, or -1 if it is not found
const indexOfDell = arrayOfLaptops.indexOf('Dell');
console.log('Index of Dell:', indexOfDell); // 2

// sort - sorts the elements of the array in place and returns the sorted array
arrayOfLaptops.sort();
console.log('Updated array of laptops after using sort():', arrayOfLaptops); // ['Dell', 'HP', 'Lenovo', 'MacBook']

// Objects
// Objects are collections of key-value pairs
// Objects holds our data in a structured way

const person = {
  // key: value
  firstName: 'John',
  firstName: 'Jane', // this will overwrite the previous firstName key
  lastName: 'Doe',
  age: 30,
  isStudent: false,
  hobbies: ['reading', 'traveling', 'coding'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipCode: '12345'
  },
  // method - a function that is a property of an object
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  fullAddress: () => {
    return `${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zipCode}`;
  },
  introducePerson: () => {
    return `Hi, my name is ${person.firstName} ${person.lastName} and I am ${person.age} years old. I live at ${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zipCode}. My hobbies include ${person.hobbies.join(', ')}.`;
    // join() - method that joins all elements of an array into a string, separated by the specified separator (in this case, ', ')
  }
};

const hobbies = ['reading', 'traveling', 'coding'];
console.log('Hobbies array:', hobbies.join(', ')); // reading, traveling, coding

const schoolsAttended = ['UP', 'MIT', 'Harvard'];
console.log('Schools attended:', schoolsAttended.join('| ')); // UP| MIT| Harvard

// How to access object properties
console.log('First name:', person.firstName); // John
console.log('Last name:', person.lastName);
console.log('Zip Code:', person.address.zipCode);
console.log('Hobby 1 - ', person.hobbies[0]); // reading

console.log('Person object:', person);
console.log('Full name:', person.fullName());
console.log('Full address:', person.fullAddress());
console.log('Introduce person:', person.introducePerson());

// array of objects
const officeMates = [
  { 
    firstName: 'John', 
    lastName: 'Doe',
    hobbies: ['reading', 'traveling', 'coding'],
    childHoodToys: ['lego', 'doll', 'car']
  },
  { 
    firstName: 'Jane', 
    lastName: 'Smith',
    hobbies: ['painting', 'dancing', 'cooking'],
    childHoodToys: ['barbie', 'play-doh', 'puzzle']
  },
  { 
    firstName: 'Bob', 
    lastName: 'Johnson',
    hobbies: ['gaming', 'hiking', 'fishing'],
    childHoodToys: ['action figures', 'board games', 'remote control cars']
  }
];