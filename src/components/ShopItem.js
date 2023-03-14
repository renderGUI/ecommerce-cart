import itemStyles from "./ShopItem.module.scss";
import { Imgs } from "../images/images";

const ShopItem = (props) => {
  const selectedImage = Imgs.filter((image) => {
    return image.id === props.itemId;
  });

  return (
    <div className={itemStyles.item}>
      <img
        src={selectedImage[0].imgSource}
        alt="guitar product"
        width="150px"
      />
      <p>{props.product}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default ShopItem;
