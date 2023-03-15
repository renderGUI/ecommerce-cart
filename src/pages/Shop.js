import { useQuery } from "react-query";
import ShopItem from "../components/ShopItem";
import shopStyles from "./Shop.module.scss";

const Shop = () => {
  const { data } = useQuery(["products"], async () => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    return data;
  });
  return (
    <div>
      <h1 className={shopStyles.pageHeading}>SHOP</h1>
      <div className={shopStyles.shopItemsContainer}>
        {data?.map((item) => {
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
