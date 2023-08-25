import Star from "./02-Star";

const Jewel = ({ jewel, addClassToJewel, stopBubbling, addToCart }) => {
  if (!jewel.id) {
    return;
  }

  return (
    <div className="jewel-container" onClick={addClassToJewel}>
      <div key={jewel.id * 2} className="jewel-rendered" onClick={stopBubbling}>
        <img
          className="jewel-rendered-img"
          src={jewel.image}
          alt={jewel.description}
        />
        <div>
          <p>{jewel.title}</p>
          <p>$ {jewel.price}</p>
          <p>{jewel.description}</p>
          <div className="stars">
            <Star rating={jewel.rating} /> {jewel.rating.count}
          </div>
          <form
            id={jewel.id}
            className="jewel-form"
            onSubmit={(e) => {
              addToCart(e);
              addClassToJewel();
            }}
            onClick={stopBubbling}
          >
            <label htmlFor="quantity">Qty :</label>
            <input type="number" id="quantity" />
            <button className="jewel-add-to-cart">
              <img src="src/assets/shopping-cart.png" alt="Cart" />
              ADD TO CART
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jewel;
