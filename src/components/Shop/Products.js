import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: "p1",
      price: 5,
      title: "My First Book",
      description: "the first book I ever wrote",
    },
    {
      id: "p2",
      price: 11,
      title: "My Second Book",
      description: "the second book I ever wrote",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
