// Libraries
import mongoose from 'mongoose';

interface IProduct {
  image_url: string | null;
  name: string;
  description: string;
  original_price: number | null;
  price: number;
}

const productSchema = new mongoose.Schema({
  image_url: String,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  original_price: Number,
  price: {
    type: Number,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
}, { optimisticConcurrency: true });

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
