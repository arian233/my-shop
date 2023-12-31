import { useState, useEffect } from "react";
import { Product } from "../../Product";
import Grid from "@mui/material/Unstable_Grid2";
import ProductCard from "./ProductCard";
import agent from "../../app/api/agent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <Grid container spacing={4} columns={12}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={3} justifyContent="center" key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
