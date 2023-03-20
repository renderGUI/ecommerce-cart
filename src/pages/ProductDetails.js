import { useParams } from "react-router-dom";
import { Imgs } from "../images/images";
import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";
import DetailsStyles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { productId } = useParams();

  const item = products.filter((product) => {
    return product.id === Number(productId);
  });

  const selectedImage = Imgs.filter((image) => {
    return image.id === Number(productId);
  });

  return (
    <div>
      <h2>{item[0]?.product}</h2>
      <h3>{item[0]?.price}</h3>
      <p>desc for product with id of {productId} </p>
      <img
        src={selectedImage[0].imgSource}
        alt="guitar product"
        width="150px"
      />
    </div>
  );
};

export default ProductDetails;
