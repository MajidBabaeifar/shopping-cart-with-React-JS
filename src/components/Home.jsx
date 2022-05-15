import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
import ProductCard from "./ProductCard";

const Home = () => {
  faker.seed(20)
  const productData = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    price: faker.commerce.price(100, 200, 0, "$"),
    name: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    image: faker.image.abstract(1234, 2345, true),
  }));
  return (
    <div style={{marginTop:100}} className="d-flex flex-wrap justify-content-evenly">
      {productData.map((product)=>(
      <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Home;
