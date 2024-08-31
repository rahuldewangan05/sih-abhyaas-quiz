import express from 'express';

const router = express.Router();

// Protected route example
router.get('/protected-route', (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

export default router;
