import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../../Product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card key={product.id} sx={{ borderRadius: "5%" }}>
      <CardHeader
        sx={{ bgcolor: "none" }}
        title={product.name}
        avatar={<Avatar>{product.name[0]}</Avatar>}
        titleTypographyProps={{ fontWeight: "bold" }}
      />
      <CardMedia
        sx={{
          height: 140,
          backgroundSize: "contain",
        }}
        image={product.pictureUrl}
      />
      <CardContent>
        <Typography variant="h6" color={"primary"}>
          Price: {(product.price / 100).toFixed(2)} CAD
        </Typography>
        <Typography variant="body1">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <Button color="primary">ADD To CART</Button>
      <Button color="primary" component={Link} to={`/catalog/${product.id}`}>
        VIEW
      </Button>
    </Card>
  );
}
