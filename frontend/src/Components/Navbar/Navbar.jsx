import React, { useContext, useState } from 'react'
import './Navbar.css'

 import Logo from '../Assets/l.jpg';
 import cart from '../Assets/c.JPG';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);



  return ( 
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="" />
        <p>SYK SHADES</p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu('shop')}}><Link style={{ textDecoration: 'none' }} to='/'>Shop{menu==='shop'? <hr/>:<></>}</Link></li>
        <li  onClick={()=>{setMenu('mens')}}><Link  style={{ textDecoration: 'none' }} to='/mens'>Men{menu==='mens'? <hr/>:<></>}</Link></li>
        <li  onClick={()=>{setMenu('womens')}}><Link  style={{ textDecoration: 'none' }} to='/womens'>Women{menu==='womens'? <hr/>:<></>}</Link></li>
        <li  onClick={()=>{setMenu('shoes')}}><Link  style={{ textDecoration: 'none' }} to='/shoes'>Shoes{menu==='shoes'? <hr/>:<></>}</Link></li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>

      </div>


        
       </div>
  );
};
