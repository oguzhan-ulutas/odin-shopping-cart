import { useEffect, useState } from "react";
import Star from "./03-Star";
import { Outlet } from "react-router-dom";
import Jewel from "./04-Jewel";

const Jewelry = () => {
  const [jewelryData, setJewelryData] = useState([]);
  const [jewel, setJewel] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: { rate: 0, count: 0 },
  });

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

  const renderJewel = (e) => {
    const jewelId = e.target.id;

    jewelryData.forEach((data) => {
      if (data.id == jewelId) {
        setJewel(data);
      }
    });
  };

  const removeClassfromJewel = () => {
    const jewelToRemoveClass = document.querySelector(".jewel-rendered");
    if (jewelToRemoveClass) {
      jewelToRemoveClass.classList.remove("hidden");
    }
  };

  const renderedJewelry = jewelryData.map((item) => {
    return (
      <div
        key={item.id}
        id={item.id}
        className="jewel"
        onClick={(e) => {
          renderJewel(e);
          removeClassfromJewel();
        }}
      >
        <img className="jewel-img" src={item.image} alt={item.description} />
        <p>{item.title}</p>
        <p>$ {item.price}</p>
        <div className="stars">
          <Star rating={item.rating} /> {item.rating.count}
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
  });

  // Deleting bigger jewel div
  const deleteJewel = () => {
    const jewelToDelete = document.querySelector(".jewel-rendered");
    if (jewelToDelete) {
      jewelToDelete.classList.add("hidden");
    }
  };

  return (
    <div className="body-store" onClick={deleteJewel}>
      {renderedJewelry}
      <Jewel jewel={jewel} />
    </div>
  );
};

export default Jewelry;
