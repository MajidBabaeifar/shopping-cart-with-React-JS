import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Cart } from "./context";
import ProductCard from "./ProductCard";

const CartPage = () => {
  const { cart, setcart } = useContext(Cart);
  return cart.map((item) => (
    <div key={item.id} style={{ display: "flex", flexDirection: "row" }}>
      <ProductCard product={item} />
      <Button>delete</Button>
    </div>
  ));
};

export default CartPage;
