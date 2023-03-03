import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { uiAction } from "./store/ui-slice";

let firstRender = true;
function App() {
const cart = useSelector((state)=>state.cart)
  const isLogged = useSelector((state)=>state.auth.isLoggedIn)

  const dispatch = useDispatch();  
const notification = useSelector((state)=>state.ui.notification);

  useEffect(()=>{
    if(firstRender){
      firstRender =false;
      return;
    }
    const sendRequest = async ()=>{
     
      dispatch(uiAction.showNotification({
        open : true,
        message : 'Sending Request',
        type : "warning"
      }))

const res = await fetch('https://redux-http-a20a4-default-rtdb.firebaseio.com/cartItems.json',{
  method:"PUT",
  body : JSON.stringify(cart)
})
const data = await res.json();
dispatch(uiAction.showNotification({
  open : true,
  message : "Data Sent SUccessfully",
  type : 'success'
}));
};
sendRequest().catch(err=>{
  dispatch(uiAction.showNotification({
    open : true,
    message : "Data Request Failed",
    type : 'error'
  }))
});
},[cart, dispatch])
  return (
    <div className="App">
     {notification && <Notification type ={notification.type} message={notification.message}/>}
      {!isLogged && <Auth />}
      {isLogged &&  <Layout /> }
    </div>
  );
}

export default App;
