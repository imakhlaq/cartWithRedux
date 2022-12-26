import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch } from "react-redux";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My first book",
    description: "My first book i ever wrote",
  },
  {
    id: "p2",
    price: 43,
    title: "My second book",
    description: "My second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((iteam) => (
          <ProductItem
            key={iteam.id}
            id={iteam.id}
            title={iteam.title}
            price={iteam.price}
            description={iteam.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
