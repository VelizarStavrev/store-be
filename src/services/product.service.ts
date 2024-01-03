// Models
import Product from '../models/Product';

// Types
import { Product as ProductType, ProductData, Response, ResponseProduct, ResponseProducts } from '../types/product';

export async function productCreate(newProductData: ProductData): Promise<Response> {
  const newProduct = new Product(newProductData);
  const saveResponse = await newProduct.save();

  if (saveResponse) {
    return { status: true, message: 'Product created successfully!' };
  }

  return { status: false, message: 'An error occurred!' };
}

export async function productEdit(productId: string, userId: string, productData: ProductType): Promise<Response> {
  const product = await Product.findOne({ _id: productId, creator: userId });

  if (!product) {
    return { status: false, message: 'The product does not exist!' };
  }

  product.imageURL = productData.imageURL;
  product.name = productData.name;
  product.description = productData.description;
  product.original_price = productData.original_price;
  product.price = productData.price;
  product.save();

  return { status: true, message: 'Product edited successfully!' };
}

export async function productDelete(productId: string, userId: string): Promise<Response> {
  const product = await Product.deleteOne({ _id: productId, creator: userId });

  if (!product.deletedCount) {
    return { status: false, message: 'The product does not exist!' };
  }

  return { status: true, message: 'Product deleted successfully!' };
}

export async function getProduct(productId: string): Promise<ResponseProduct> {
  const product = await Product.findOne({ _id: productId });

  if (!product) {
    return { status: false, message: 'The product does not exist!' };
  }

  return { status: true, message: 'Product retrieved successfully!', product };
}

export async function getProducts(): Promise<ResponseProducts> {
  const products = await Product.find({});

  return { status: true, message: 'Products retrieved successfully!', products };
}
