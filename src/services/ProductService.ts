import axios from 'axios';
import ProductsResponse from '@/models/response/ProductsResponse';

export default class ProductService {
  static async fetchProducts() {
    return axios.get<ProductsResponse>('/products.json');
  }
}
