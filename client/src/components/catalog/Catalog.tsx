import { useState, useEffect } from "react";
import { Product } from "../../Product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <ProductList products={products} />
    </>
  );
}
