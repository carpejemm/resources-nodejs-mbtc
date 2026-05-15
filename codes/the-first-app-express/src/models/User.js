import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password : {
    type: String,
    required: true,
    // remove the password field from query results by default for security reasons
    // select: false,
  }
})

export default mongoose.model('User', userSchema);