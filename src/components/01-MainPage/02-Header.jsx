import { Link } from "react-router-dom";
import Qty from "./05-Quantity";
import PropTypes from "prop-types";

const Header = ({ cart }) => {
  return (
    <div className="header">
      <div className="header-head">Jewelery Hell</div>
      <div className="header-container">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/store">
          <div>Store</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/cart" className="cart-item">
          <img src="public/assets/carts.png" alt="Shopping cart" />
          {cart.length ? <Qty cart={cart} /> : null}
        </Link>
      </div>
    </div>
  );
};

Header.protoTypes = {
  cart: PropTypes.array,
};

export default Header;
