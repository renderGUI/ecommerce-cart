import itemStyles from "./ShopItem.module.scss";
import { Imgs } from "../images/images";
import { useNavigate } from "react-router-dom";

const ShopItem = (props) => {
  const navigate = useNavigate();
  const selectedImage = Imgs.filter((image) => {
    return image.id === props.itemId;
  });

  const viewItemDescription = () => {
    navigate(`${props.itemId}`);
  };

  return (
    <div onClick={viewItemDescription} className={itemStyles.item}>
      <img
        src={selectedImage[0].imgSource}
        alt="guitar product"
        width="150px"
      />
      <p className={itemStyles.productName}>{props.product}</p>
      <p className={itemStyles.productPrice}>{props.price}</p>
    </div>
  );
};

export default ShopItem;
