// Libraries
import express from 'express';

// Services
import { getProducts } from '../services/product.service';

const router = express.Router();

router.get('/', (req, res) => {
  getProducts()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during the retrieval of products.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

export default router;
