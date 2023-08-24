import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./02-Header";
import Body from "./03-Body";
import Footer from "./04-Footer";
import About from "../02-About/01-About";
import Store from "../03-Store/01-Store";
import Cart from "../05-Cart/Cart";

function MainPage() {
  const { section } = useParams();
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
  const [cart, setCart] = useState([]);

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

  // Adding items to cart
  const addToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let boughtItem = {};
    jewelryData.forEach((item) => {
      if (item.id == e.target.id) {
        boughtItem = {
          id: item.id,
          image: item.image,
          title: item.title,
          qty: e.target.elements[0].value,
        };
      }
    });

    if (cart.length === 0) {
      setCart([boughtItem]);
    } else {
      cart.forEach((item) => {
        if (item.id == boughtItem.id) {
          boughtItem.qty = Number(boughtItem.qty) + Number(item.qty);

          const arr = cart.filter((filtered) => filtered.id != boughtItem.id);
          arr.push(boughtItem);
          setCart(arr);
        } else {
          setCart([...cart, boughtItem]);
        }
      });
    }

    console.log(cart);
  };
  return (
    <div className="main-page">
      <Header cart={cart} />
      {section === "about" ? (
        <About />
      ) : section === "store" ? (
        <Store
          jewelryData={jewelryData}
          jewel={jewel}
          cart={cart}
          renderJewel={renderJewel}
          addToCart={addToCart}
        />
      ) : section === "cart" ? (
        <Cart />
      ) : (
        <Body />
      )}

      <Footer />
    </div>
  );
}

export default MainPage;
