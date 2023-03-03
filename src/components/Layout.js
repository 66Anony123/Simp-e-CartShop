import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  
  const itemList = useSelector((state)=>state.cart.itemList)
  let total = 0;

  for(let i=0;i<itemList.length;i++)  //itemlist.forEach(item=>{total+=item.totalPrice})
 {
  total = itemList[i].totalPrice+total;
 }
  
const showcart = useSelector(state=>state.cart.showCart)
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
       {showcart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
