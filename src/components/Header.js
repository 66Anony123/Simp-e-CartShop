import React from "react";
import { useDispatch } from "react-redux";
import Cart from "./Cart";
import "./Header.css";
import { authAction  } from "../store/auth.js";

const Header = () => {
const dispatch =useDispatch()
  function backToHome()
  {
dispatch(authAction.LoggedOut())
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart /> <span><button onClick={backToHome}>LogOut</button></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
