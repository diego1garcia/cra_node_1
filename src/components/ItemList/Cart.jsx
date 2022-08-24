import React, { useContext, useEffect, useState } from "react";
import { GContext } from "../Cart/CartContext";


const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder } = useContext(GContext);
  useContext(GContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    console.log(inputs[0]);
    const data = Array.from(inputs).map((input, index) => input.value);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
    // updateOrder();
    // multipleUpdates();
  };
  
  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ items, quantity }) => {
      total += parseInt(items.price) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
      <ul>
        {cartItems.map(({ items, quantity }) => (
          <>
            <div key={items.id} className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={items.pictureUrl}
                alt="Card image cap"
              />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{items.title}</h5>
                <p className="card-text">{`${items.stock} units available!`}</p>
                <p className="card-text">{`$${
                  ((items.price * items.discount) / 100) * quantity
                } | with a ${items.discount}% discount!`}</p>
              </div>
            </div>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`Your total is: $${totalPrice}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="email" />
        <input type="tel" />
        <button
          type="submit"
          className="btn btn-info"
        >
          Send order
        </button>
      </form>
    </>
  );
};

export default Cart;