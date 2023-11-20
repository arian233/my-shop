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

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card key={product.id}>
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
          Price: {product.price.toFixed(2)}
        </Typography>
        <Typography variant="body1">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <Button color="primary">ADD To CART</Button>
      <Button color="primary">VIEW</Button>
    </Card>
  );
}
