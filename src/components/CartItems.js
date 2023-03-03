import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
const cart_items = useSelector(state=>state.cart.itemList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cart_items.map((items)=>
        (
          <li key ={items.id}>
        <CartItem 
        id = {items.id}
        price = {items.price}
        quantity ={items.quantity}
        name = {items.name}
        total = {items.totalPrice}

        />
        </li>))}
      </ul>
    </div>
  );
};

export default CartItems;
