import itemStyles from "./ShopItem.module.scss";

const ShopItem = (props) => {
  return (
    <div className={itemStyles.itemContainer}>
      <p>{props.product}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default ShopItem;
