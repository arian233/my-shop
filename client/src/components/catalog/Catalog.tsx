import { Product } from "../../Product";

interface Props {
  products: Product[];
}

export default function Catalog({ products }: Props) {
  console.log(products);
  return (
    <div>
      <h1>Catalog</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {" "}
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
