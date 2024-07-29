import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/loog.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png';
 

const Navbar = () => {
 
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Trendyworld</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <Link style={{textDecoration:"none"}} to='/shop'><li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<null/>:<> </>}</li></Link>
        <Link style={{textDecoration:"none"}} to='/men'><li onClick={()=>{setMenu("mens")}}>Men {menu==="mens"?<null/>:<> </>}</li></Link> 
        <Link style={{textDecoration:"none"}} to="women"> <li onClick={()=>{setMenu("womens")}}>Women {menu==="womens"?<null/>:<> </>}</li></Link> 
       <Link style={{textDecoration:"none"}} to="/kids"><li onClick={()=>{setMenu("kids")}}>Kids {menu==="kids"?<null/>:<> </>}</li></Link> 
       <Link style={{textDecoration:"none"}} to='/shoes'><li onClick={()=>{setMenu("shoes")}}>Shoes {menu==="mens"?<null/>:<> </>}</li></Link> 
      </ul>
      <div className="nav-login-cart">

        {localStorage.getItem("auth-token")
        ?<button onClick={()=>{localStorage.removeItem("auth-token"); window.location.replace("/")}} >Logout</button>
        :<Link to="/login"><button>Login</button></Link>}

        
        <Link to="/cart"><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
