import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./Product";
import Catalog from "./components/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Hi</h1>
      <Catalog products={products} />
    </>
  );
}

export default App;
