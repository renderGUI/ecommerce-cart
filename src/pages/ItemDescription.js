import { useParams } from "react-router-dom";

const ItemDescription = () => {
    const {itemId} = useParams();
  return (
    <div>
      <h1>desc for item with id of {itemId} </h1>
    </div>
  );
};

export default ItemDescription;
