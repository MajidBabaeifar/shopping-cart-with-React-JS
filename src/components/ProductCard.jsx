import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card
      style={{ width: "18rem", padding: "10px", margin: "10px", height: "500px"}}
      key={product.id}
    >
      <Card.Img
        style={{ height: "300px", objectFit: "cover" }}
        variant="top"
        src={product.image}
      />
      <Card.Body className="card--body">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text className="text-muted  description-text" >{product.description}</Card.Text>
        <div className="addtocart-price-group">
          <span>{product.price}</span>
          <Button variant="primary">add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
