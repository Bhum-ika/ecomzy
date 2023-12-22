import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex max-w-6xl mx-auto h-screen">
      {cart.length > 0 ? (
        <div className="flex mx-auto gap-x-7">
          <div>
            {cart.map((item, index) => {
            return <CartItem key={item.id} item={item} index={index} />;
          })}
            </div>
        

           <div className="flex flex-col justify-between mt-5 max-w-3xl">
            <div>
              <h1 className="font-bold text-2xl text-green-600">Your Cart</h1>
              <h1 className="font-bold text-4xl text-green-600">Summary</h1>
              <p className="font-semibold mt-2 ">
                Total Items: <span>{cart.length}</span>
              </p>
            </div>
            <div className="mb-7">
              <p className="font-semibold mt-2">
                Total Amount: <span className="text-green-600 font-semibold">${totalAmount}</span>
              </p>
              <button className="w-full bg-green-600 text-white font-bold text-center px-3 py-2 rounded-sm mt-2">Checkout Now</button>
            </div>
            </div>
       
        </div>
      ) : (
        <div className="flex flex-col max-w-6xl w-8/12  mx-auto justify-center items-center h-screen">
          <h1 className="text-xl font-bold">Cart empty</h1>
          <NavLink to="/">
            <button className="w-[300px] bg-green-600 text-white font-bold text-center px-3 py-2 rounded-sm mt-2">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
