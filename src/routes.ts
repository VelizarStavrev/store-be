// Libraries
import express from 'express';

// Routes
import user from './routes/user';
import products from './routes/products';
import product from './routes/product';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('The server is working!');
});

// User related
router.use('/user', user);

// Shop related
router.use('/products', products);
router.use('/product', product);

export default router;
