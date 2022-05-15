import { useContext } from "react";
import { Cart } from "./context";
import ProductCard from "./ProductCard";

const CartPage = () => {
  const { cart, setcart } = useContext(Cart);
  return cart.map((item) => <ProductCard product={item} />)
};

export default CartPage;
