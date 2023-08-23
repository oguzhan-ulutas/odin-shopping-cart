import { useEffect, useState } from "react";
import Star from "./03-Star";
import Jewel from "./04-Jewel";
import PropTypes from "prop-types";

const Jewelry = ({ jewelryData, jewel, cart, renderJewel, addToCart }) => {
  const removeClassFromJewel = () => {
    const jewelToRemoveClass = document.querySelector(".jewel-container");

    console.log("remove class from jewel");

    if (jewelToRemoveClass) {
      jewelToRemoveClass.classList.remove("hidden");
    }
  };

  const stopBubbling = (e) => {
    e.stopPropagation();
  };

  const renderedJewelry = jewelryData.map((item) => {
    return (
      <div
        key={item.id}
        id={item.id}
        className="jewel"
        onClick={(e) => {
          renderJewel(e);
          removeClassFromJewel(e);
        }}
      >
        <img className="jewel-img" src={item.image} alt={item.description} />
        <p>{item.title}</p>
        <p>$ {item.price}</p>
        <div className="stars">
          <Star rating={item.rating} /> {item.rating.count}
        </div>
        <form
          className="jewel-form"
          id={item.id}
          onSubmit={addToCart}
          onClick={stopBubbling}
        >
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

  // Hiding bigger jewel div
  const addClassToJewel = () => {
    const jewelToAddClass = document.querySelector(".jewel-container");

    console.log("add class to jewel");

    if (jewelToAddClass) {
      jewelToAddClass.classList.add("hidden");
    }
  };

  return (
    <div className="body-store">
      {renderedJewelry}
      <Jewel
        jewel={jewel}
        addClassToJewel={addClassToJewel}
        stopBubbling={stopBubbling}
      />
    </div>
  );
};

export default Jewelry;
