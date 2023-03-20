import { Link } from "react-router-dom";
import navigationStyles from "./NavigationBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <div className={navigationStyles.container}>
      <div className={navigationStyles.cartContainer}>
        <Link to="/cart">
          <FontAwesomeIcon
            className={navigationStyles.cartIcon}
            icon={faCartShopping}
          ></FontAwesomeIcon>
        </Link>
      </div>
      <div className={navigationStyles.menu}>
        <Link to="/" className={navigationStyles.navText}>
          HOME
        </Link>
        <Link to="/products" className={navigationStyles.navText}>
          SHOP
        </Link>
      </div>
      <hr />
    </div>
  );
};
export default NavigationBar;
