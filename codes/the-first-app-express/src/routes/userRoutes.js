import { Router } from 'express';
import { createUser, getAllUsers, deleteUser, updateUser, loginUser } from '../controllers/userController.js';

const router = Router();

// POST/ http://localhost:3000/api/v1/users/create-user
router.post('/create-user', createUser);
// GET/ http://localhost:3000/api/v1/users/get-users
router.get('/get-users', getAllUsers);
// DELETE/ http://localhost:3000/api/v1/users/delete-user/:id
router.delete('/delete-user/:id', deleteUser);
// PATCH/ http://localhost:3000/api/v1/users/update-user/:id
router.patch('/update-user/:id', updateUser);

// Let's make another route for registration of a user
// POST/ http://localhost:3000/api/v1/users/register
router.post('/register', createUser);
// POST/ http://localhost:3000/api/v1/users/login
router.post('/login', loginUser);

export default router;