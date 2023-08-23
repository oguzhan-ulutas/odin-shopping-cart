import PropTypes from "prop-types";

const Qty = ({ cart }) => {
  const quantity = cart.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    return accumulator + Number(currentValue.qty);
  }, 0);
  console.log(quantity);
  return <div className="qty">{quantity}</div>;
};

Qty.prototype = {
  cart: PropTypes.array,
};

export default Qty;
