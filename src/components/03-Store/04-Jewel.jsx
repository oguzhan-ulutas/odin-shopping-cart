import Star from "./03-Star";

const Jewel = ({ jewel }) => {
  if (!jewel.id) {
    return;
  }
  return (
    <div key={jewel.id * 2} className="jewel-rendered">
      <img
        className="jewel-rendered-img"
        src={jewel.image}
        alt={jewel.description}
      />
      <p>{jewel.title}</p>
      <p>$ {jewel.price}</p>
      <p>{jewel.description}</p>
      <div className="stars">
        <Star rating={jewel.rating} /> {jewel.rating.count}
      </div>
      <form className="jewel-form">
        <label htmlFor="quantity">Qty :</label>
        <input type="number" id="quantity" />
        <button className="jewel-add-to-cart">
          <img src="src/img/shopping-cart.png" alt="Cart" />
          ADD TO CART
        </button>
      </form>
    </div>
  );
};

export default Jewel;
