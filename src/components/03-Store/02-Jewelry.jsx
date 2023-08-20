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
      <div key={item.id}>
        <img src={item.image} alt={item.description} />
        <p>{item.title}</p>
        <p>$ {item.price}</p>
        <div>
          <Star rating={item.rating} id={item.id} /> {item.rating.count}
        </div>
        <p>{item.description.slice(0, 50)}...</p>
      </div>
    );
  });

  return <div className="body">{renderedJewelry}</div>;
};

export default Jewelry;
