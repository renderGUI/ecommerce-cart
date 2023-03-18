import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import ShopItem from "../components/ShopItem";
import shopStyles from "./Shop.module.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1 className={shopStyles.pageHeading}>SHOP</h1>
      <div className={shopStyles.shopItemsContainer}>
        {products?.map((item) => {
          return (
            <ShopItem
              key={item.id}
              product={item.product}
              price={item.price}
              itemId={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
