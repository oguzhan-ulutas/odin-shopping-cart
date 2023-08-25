import PropTypes from "prop-types";

const Qty = ({ cart }) => {
  const quantity = cart.reduce((accumulator, currentValue) => {
    return accumulator + Number(currentValue.qty);
  }, 0);

  return <div className="qty">{quantity}</div>;
};

export default Qty;
