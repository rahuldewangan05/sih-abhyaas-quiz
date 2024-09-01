// /routes/userRoutes.js
import express from 'express';
import { registerUser, googleAuth } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/google-auth', googleAuth);

export default router;
