import { useQuery } from "react-query";
import ShopItem from "../components/ShopItem";

const getData = async () => {
  const response = await fetch("http://localhost:3004/products");
  const data = await response.json();
  console.log(data);
};

getData();

const Shop = () => {
  const { data } = useQuery(["products"], async () => {
    const response = await fetch("http://localhost:3004/products");
    const data = await response.json();
    return data;
  });
  return (
    <div>
      <h1>Shop</h1>
      {data?.map((item) => {
        return (
          <ShopItem key={item.id} product={item.product} price={item.price} />
        );
      })}
    </div>
  );
};

export default Shop;
