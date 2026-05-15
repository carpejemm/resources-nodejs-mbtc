import express from 'express';
import connectDB from './src/db/database.js';
import User from './src/models/User.js';

const app = express();
const PORT = 3000;

connectDB();


import userRoutes from './src/routes/userRoutes.js';
import postRoutes from './src/routes/postRoutes.js';

// Middleware to parse JSON request bodies
// Will run for every incoming request before it reaches the route handlers
app.use(express.json());


// step 3: define our first route handler for the default home page
// first argument - path
// second argument - callback function that will run when the route is matched
// GET/ http://localhost:3000/api/test-api
app.get('/api/v1/test-api', (request, response) => {
  // For us to be able to tap into our route handler, we can use postman
  console.log('Hello, Welcome to my first express app!');
  response.send('Hello, Welcome to my first express app!');
})

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})