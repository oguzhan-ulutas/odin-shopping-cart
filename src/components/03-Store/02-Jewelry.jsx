import { useEffect, useState } from "react";
import Star from "./03-Star";

const Jewelry = () => {
  const [jewelryData, setJewelryData] = useState([]);
  useEffect(() => {
    const getJewelry = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/jewelery`
        );

        const data = await response.json();

        setJewelryData(data);

        return;
      } catch {
        alert("Server is busy, please try again later");
      }
    };
    getJewelry();
  }, []);

  const renderedJewelry = jewelryData.map((item) => {
    return (
      <div key={item.id} className="jewel">
        <img className="jewel-img" src={item.image} alt={item.description} />
        <p>{item.title}</p>
        <p>$ {item.price}</p>
        <div className="stars">
          <Star rating={item.rating} id={item.id} /> {item.rating.count}
        </div>
        <p>{item.description.slice(0, 50)}...</p>
        <button className="jewel-add-to-cart">
          <img src="src/img/shopping-cart.png" alt="Cart" />
          ADD TO CART
        </button>
      </div>
    );
  });

  return <div className="body-store">{renderedJewelry}</div>;
};

export default Jewelry;
