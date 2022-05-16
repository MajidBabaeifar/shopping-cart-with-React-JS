import { Button, Table } from "react-bootstrap";
import { useContext } from "react";
import { Cart } from "./context";
import ProductCard from "./ProductCard";

const CartPage = () => {
  const { cart, setcart } = useContext(Cart);
  return;
  <Table responsive>
    <thead>
      <tr>
        <th>#</th>
        {Array.from({ length: 12 }).map((_, index) => (
          <th key={index}>Table heading</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        {Array.from({ length: 12 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
      <tr>
        <td>2</td>
        {Array.from({ length: 12 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
      <tr>
        <td>3</td>
        {Array.from({ length: 12 }).map((_, index) => (
          <td key={index}>Table cell {index}</td>
        ))}
      </tr>
    </tbody>
  </Table>;
  // cart.map((item) => (
  //   <div key={item.id} style={{ display: "flex", flexDirection: "row" }}>
  //     <ProductCard product={item} />
  //     <Button>delete</Button>
  //   </div>
  // ));
};

export default CartPage;
