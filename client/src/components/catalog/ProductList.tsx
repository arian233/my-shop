import { Product } from "../../Product";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4} columns={12}>
      {products.map((product) => (
        <Grid xs={3} justifyContent="center" key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
