import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const totalQty = useSelector((state)=>state.cart.totalQuantity)
  const dispatch = useDispatch();

  const showcart = ()=>{
dispatch(cartActions.setShowCart())
  }
  return (
    <div className="cartIcon" onClick={showcart}>
      <h3>Cart: {totalQty} Items</h3>
    </div>
  );
};

export default Cart;
