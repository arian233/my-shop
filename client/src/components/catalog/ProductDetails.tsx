import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../Product";
import Grid from "@mui/material/Unstable_Grid2";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(product);

  useEffect(() => {
    console.log("productID: ", id);
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [id]);

  if (loading) return <Typography variant="h2">Loading...</Typography>;
  if (!product) return <Typography variant="h2">Product not found</Typography>;

  return (
    <Grid container spacing={2}>
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
