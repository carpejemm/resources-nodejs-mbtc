import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const createUser = async (req, res) => {

  console.log("This is the request object: ", req.body);

  // destructure the request body to get the user details
  const { firstName, lastName, email, password } = req.body;
  
  try {
    // We need to hash the password before saving the user to the database
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Create a new user object with the hashed password
    const userData = {
      firstName,
      lastName,
      email,
      password: passwordHash
    }
    const newUser = await User.create(userData);
    const { password: _pw, ...userWithoutPassword } = newUser.toObject();

    const data = {
      status: 'success',
      message: 'User created successfully!',
      user: userWithoutPassword
    }

    res.status(201).json({ data });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ status: 'error', message: 'Failed to create user' });
  } 
}

export const getAllUsers = async (req, res)  => {
  try {
      const allUsers = await User.find({});

      console.log('This is the allUsers variable: ', allUsers);
  
      const data = {
        status: 'success',
        message: 'Users fetched successfully!',
        users: allUsers
      }
  
      res.status(200).json({ data });
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ status: 'error', message: 'Failed to fetch users' });
    }
}

export const deleteUser = async (req, res) => {
  try {
    console.log('This is the request params object: ', req.params);
    
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    const data = {
      status: 'success',
      message: 'User deleted successfully',
      deletedUser: deletedUser
    }

    res.status(200).json({ data });

  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ status: 'error', message: 'Failed to delete user' });
  } 
}

export const updateUser = async (req, res) => {
  try {
    console.log('This is the request params object: ', req.params);

    if(req.body.email) {
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ status: 'error', message: 'Email already exists' });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    const data = {
      status: 'success',
      message: 'User updated successfully',
      user: updatedUser
    }

    res.status(200).json({ data });

  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ status: 'error', message: 'Failed to update user' });
  }
}

export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });

    if(!user) return res.status(400).json({ status: 'error', message: 'Invalid email or password' });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) return res.status(400).json({ status: 'error', message: 'Invalid email or password' });

    res.status(200).json({ status: 'success', message: 'Login successful' });
    
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ status: 'error', message: 'Failed to login user' });
  }
}