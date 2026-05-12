// We import the createServer function from the http module to create a server that listens for incoming requests and sends responses back to the client. We set the server to listen on port 3000 and respond with "Hello World!" when a request is made to the server.
import { createServer } from 'node:http';

// Define the port number for the server to listen on
const PORT = 3000;

// We created a server using the createServer function, which takes a callback function as an argument. The callback function is executed every time a request is made to the server. In this case, we set the response header to indicate that the content type is plain text and send "Hello World!" as the response body. Finally, we start the server and log a message to the console indicating that the server is running and listening on the specified port.
const server = createServer((request, response) => {
  // Set the response header to indicate that the content type is plain text
  // 200 - OK status code indicates that the request was successful
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send "Hello World!" as the response body and end the response
  response.end('Hello World! Welcome to NodeJS Training Course!');
})


// Start the server and listen on the specified port. When the server is running, log a message to the console indicating that the server is running and listening on the specified port.
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Hello, server is up and running!');
})