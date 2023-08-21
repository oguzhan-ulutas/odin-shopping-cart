import { Link } from "react-router-dom";

const Header = () => {
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

        <Link to="/cart">
          <img src="/src/img/carts.png" alt="Shopping cart" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
