export interface Product {
  imageURL: string | null;
  name: string;
  description: string;
  original_price: number | null;
  price: number;
}

export interface ProductData extends Product {
  creator: number;
}

export interface Response {
  status: boolean;
  message: string;
}

export interface ResponseProducts extends Response {
  products?: Product[];
}

export interface ResponseProduct extends Response {
  product?: Product;
}
