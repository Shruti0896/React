import { useState } from "react";
import {LOGO} from "../utils/costants";
import { Link } from "react-router-dom";

const Header = () => {

  const [isLogin, setIsLogin] = useState(true);

    return (<div className="header">
      <div className="logo">
        <img className="app-logo" src={LOGO} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="btn" onClick={()=>setIsLogin(!isLogin)}>{ isLogin ? "Login" : "Logout" }</button>
        </ul>
      </div>
    </div>)
  }

  export default Header;