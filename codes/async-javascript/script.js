// Callbacks are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API or reading a file.

// In JavaScript, callbacks are often used with functions that perform asynchronous operations. For example, when making an HTTP request, you can pass a callback function that will be executed once the response is received. This allows you to handle the response data without blocking the main thread of execution.

// Here's an example of a simple callback function:

const fetchData = (callBack) => {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callBack(data);
  }, 2000); // Simulating an asynchronous operation with a timeout (2 seconds)
}


fetchData((data) => {
  console.log('Data received:', data);
});

// Example 2 - using readFile with a callback - fs

import { readFile } from 'node:fs';
import { fileURLToPath } from 'node:url';

const self = fileURLToPath(import.meta.url);

readFile(self, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // console.log('File content:', data);
  // console.log(`read ${data.length} bytes characters from ${self}`);
});

// Callback Hell - When you have multiple nested callbacks, it can lead to a situation known as "callback hell" or "pyramid of doom". This occurs when you have several levels of nested callbacks, making the code difficult to read and maintain. To avoid this, you can use Promises or async/await syntax, which provide a cleaner and more manageable way to handle asynchronous operations.

const step = (name, time, cb) => {
  setTimeout(() => {
    console.log(`done: ${name}`);
    cb(null, `${name} result`);
  }, time);
}

step('step 1', 1000, (err, result1) => {
  if (err) {
    console.error('Error in step 1:', err);
    return;
  }
  step('step 2', 1000, (err, result2) => {
    if (err) {
      console.error('Error in step 2:', err);
      return;
    }
    step('step 3', 1000, (err, result3) => {
      if (err) {
        console.error('Error in step 3:', err);
        return;
      }
      console.log('All steps completed:', result1, result2, result3);
    });
  });
});

// Promises - Promises are a modern way to handle asynchronous operations in JavaScript. They provide a cleaner and more manageable way to work with asynchronous code compared to callbacks. A Promise represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is fulfilled, it means that the asynchronous operation completed successfully, and the resulting value is available. When a Promise is rejected, it means that the asynchronous operation failed, and an error is available.

// Here's an example of how to use Promises:

const wait = time => {
  return new Promise((resolve, reject) => {
    if (typeof time !== 'number') {
      reject(new Error('Time must be a number'));
      return;
    }
    setTimeout(() => {
      resolve(`Waited for ${time} milliseconds`);
    }, time);
  })
}

wait(1000).then(result => console.log(result)).catch(error => console.error(error));
wait('This is not a number').then(result => console.log(result)).catch(error => console.error(error));

// Async/Await - Async/await is a syntactic sugar built on top of Promises that allows you to write asynchronous code in a more synchronous and readable manner. It makes it easier to work with Promises by allowing you to use the `await` keyword to pause the execution of a function until a Promise is resolved or rejected.

const fetchDataAsync = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

fetchDataAsync();

const anotherFunction = () => {
  console.log('This is inside Another Function');
}

anotherFunction();

console.log('This will log before the data is fetched because fetchDataAsync is asynchronous');
console.log('This will log before the data is fetched because fetchDataAsync is asynchronous v2');

// Error Handling

// Callback Error Handling

const fetchDataWithErrorHandling = (callBack) => {
  setTimeout(() => {
    const error = null; // Simulating an error condition
    const data = { name: 'John', age: 30 };
    if (error) {
      callBack(error, null);
    } else {
      callBack(null, data);
    }
  }, 2000);
}

// Promises Error Handling

const waitWithErrorHandling = time => {
  return new Promise((resolve, reject) => {
    if (typeof time !== 'number') {
      reject(new Error('Time must be a number'));
      return;
    }
    setTimeout(() => {
      resolve(`Waited for ${time} milliseconds`);
    }, time);
  })
}

waitWithErrorHandling(1000)
  .then(result => console.log(result))
  .catch(error => console.error(error));


// Async/Await Error Handling

const fetchDataAsyncWithErrorHandling = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('This will always execute, regardless of success or error');
  }
}
