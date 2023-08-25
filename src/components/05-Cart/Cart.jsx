import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  const grandTotal = cart.reduce((acc, cur) => {
    return acc + Number(cur.qty) * Number(cur.price);
  }, 0);

  const renderedCart = cart.map((item) => {
    console.log(cart);
    return (
      <div key={item.id} className="bought-item">
        <img src={item.image} alt={item.title} />
        <div className="bought-item-title">
          {item.title.length < 50
            ? item.title
            : item.title.substring(0, 50) + "..."}
        </div>
        <div className="bought-item-unit-price">Unit Price: ${item.price}</div>
        <div className="bought-item-qty">Quantity: {item.qty}</div>
        <div className="bought-item-subtotal">
          Total: ${Number(item.price) * Number(item.qty)}
        </div>
      </div>
    );
  });
  return (
    <div className="cart-container">
      <div className="carts">
        {!cart.length ? (
          <div className="no-item">Your Cart is empty.</div>
        ) : (
          renderedCart
        )}
      </div>
      <div className="grand-total">Grand Total: ${grandTotal}</div>
      <Link className="payment" to="/about">
        <div>Proceed the payment</div>
      </Link>
    </div>
  );
};

export default Cart;
