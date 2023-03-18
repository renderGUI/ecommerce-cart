import { useParams } from "react-router-dom";
import { Imgs } from "../images/images";
import { useContext } from "react";
import { ProductContext } from "../contexts/product-context";

const ItemDescription = () => {
  const { products } = useContext(ProductContext);
  const { itemId } = useParams();

  const item = products.filter((product) => {
    return product.id === Number(itemId);
  });

  const selectedImage = Imgs.filter((image) => {
    return image.id === Number(itemId);
  });

  return (
    <div>
      <h2>{item[0]?.product}</h2>
      <h3>{item[0]?.price}</h3>
      <p>desc for item with id of {itemId} </p>
      <img
        src={selectedImage[0].imgSource}
        alt="guitar product"
        width="150px"
      />
    </div>
  );
};

export default ItemDescription;
