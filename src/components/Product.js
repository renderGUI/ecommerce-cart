import productStyles from "./Product.module.scss";
import { Imgs } from "../images/images";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();
  const selectedImage = Imgs.filter((image) => {
    return image.id === props.itemId;
  });

  const viewProductDetails = () => {
    navigate(`${props.itemId}`);
  };

  return (
    <div onClick={viewProductDetails} className={productStyles.product}>
      <img
        src={selectedImage[0].imgSource}
        alt="guitar product"
        width="150px"
      />
      <p className={productStyles.productName}>{props.product}</p>
      <p className={productStyles.productPrice}>{props.price}</p>
    </div>
  );
};

export default Product;
