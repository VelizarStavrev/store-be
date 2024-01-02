// Libraries
import express from 'express';

// Routes
import user from './routes/user';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('The server is working!');
});

// User related
router.use('/user', user);

export default router;
