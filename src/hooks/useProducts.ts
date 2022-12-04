import ProductService from '@/services/ProductService';
import { useQuery } from '@tanstack/react-query';

export default function () {
  const getProducts = async () => {
    const response = await ProductService.fetchProducts();

    return response.data;
  };

  const { data: products } = useQuery(['products'], getProducts);

  return { products };
}
