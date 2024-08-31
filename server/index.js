import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth'; // Adjust the path as needed
import userRoutes from './routes/userRoutes'; // Adjust the path as needed
import { authMiddleware } from './middleware/authMiddleware'; // Adjust the path as needed

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', authMiddleware, userRoutes); // Apply auth middleware to protected routes

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  }))
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
