// Libraries
import express from 'express';

// Services
import {
  getProduct,
  productCreate,
  productDelete,
  productEdit,
} from '../services/product.service';

// Middlewares
import { tokenAuth } from '../middleware/auth';

// Types
import { ProductData } from '../types/product';

const router = express.Router();

router.get('/:productId', (req, res) => {
  const productId = req.params.productId;

  getProduct(productId)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during product retrieval.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

router.post('/create', tokenAuth, (req, res) => {
  const productData: ProductData = {
    image_url: req.body.image_url,
    name: req.body.name,
    description: req.body.description,
    original_price: req.body.original_price,
    price: req.body.price,
    creator: req.body.userId,
  };

  productCreate(productData)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during product creation.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

router.post('/edit/:productId', tokenAuth, (req, res) => {
  const userId = req.body.userId;
  const productId = req.params.productId;

  productEdit(productId, userId, req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during product edit.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

router.post('/delete/:productId', tokenAuth, (req, res) => {
  const userId = req.body.userId;
  const productId = req.params.productId;

  productDelete(productId, userId)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      console.log('An error occurred during product deletion.', error);
      res.send({ status: false, message: 'An error occurred!' });
    });
});

export default router;
