import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import Product from "../components/Product";
import productsStyles from "./Products.module.scss";

const Products = () => {
  const { products, isLoading } = useContext(ProductContext);

  return (
    <div>
      <h1 className={productsStyles.pageHeading}>SHOP</h1>
      {isLoading && <p>Loading...</p>}
      <div className={productsStyles.productsContainer}>
        {products?.map((product) => {
          return (
            <Product
              key={product.id}
              product={product.product}
              price={product.price}
              itemId={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
