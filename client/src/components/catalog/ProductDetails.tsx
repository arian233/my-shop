import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../Product";
import Grid from "@mui/material/Unstable_Grid2";
import agent from "../../app/api/agent";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(product);

  useEffect(() => {
    id &&
      agent.Catalog.details(parseInt(id))
        .then((response) => setProduct(response))
        .catch((error) => console.log(error.response))
        .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Typography variant="h2" mt={8}>
        Loading...
      </Typography>
    );
  if (!product)
    return (
      <Typography variant="h2" mt={8}>
        Product not found
      </Typography>
    );

  return (
    <Grid container spacing={2} sx={{ mt: 8 }}>
      <Grid xs={12} md={6}>
        <img
          src={product.pictureUrl}
          alt={product.name}
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid xs={12} md={6}>
        <TableContainer component={Paper} sx={{ borderRadius: "3%" }}>
          <Table>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>{product.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell>{product.brand}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell>{product.description}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Quantity In Stock</TableCell>
              <TableCell>{product.quantityInStock}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
