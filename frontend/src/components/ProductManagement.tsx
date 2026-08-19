import { useApi } from "../hooks/useApi";
import type { Product } from "../types";

export function ProductManagement() {
  const { data, loading, error } = useApi<Product[]>("/products");

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </section>
  );
}

