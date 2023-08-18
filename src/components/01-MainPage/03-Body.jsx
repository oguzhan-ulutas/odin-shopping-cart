import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body">
      <div className="body-content">
        <div className="body-header">
          Welcome to best Jewelry Store of the world!!
        </div>
        <div>
          Elevating elegance to new heights, our jewelry store stands as the
          epitome of luxury and craftsmanship in the realm of adornments. A
          harmonious fusion of impeccable design and unparalleled artistry, we
          curate a collection that resonates with the refined tastes of
          connoisseurs worldwide. Each piece, meticulously crafted by master
          artisans, encapsulates the allure of rare gemstones and precious
          metals, creating wearable poetry that transcends time. Our commitment
          to authenticity and excellence is woven into every creation, offering
          patrons an entrancing journey through the world's most coveted jewels.
          Step into a realm where dreams sparkle to life, redefining opulence
          and igniting passions.
        </div>
        <Link to="store">
          <button>Shop now</button>
        </Link>
      </div>
      <img
        src="src/img/andie-gomez-acebo-sEq4onJnWrI-unsplash.jpg"
        alt="A girl wearing some jewelry"
      />
    </div>
  );
};

export default Body;
