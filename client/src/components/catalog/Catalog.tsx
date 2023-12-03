import { useState, useEffect } from "react";
import { Product } from "../../Product";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCard from "./ProductCard";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <Grid container spacing={4} columns={12}>
        {products.map((product) => (
          <Grid xs={6} md={3} justifyContent="center" key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
