import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/Frontend_Assets/logo.png'
import cart_icon from '../../assets/Frontend_Assets/cart_icon.png'

function Navbar() {
  const [menu, setMenu] = useState("shop")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to={'/'}>Shop</Link> {menu === "shop" && <hr/>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link to={'/mens'}>Men</Link> {menu === "mens" && <hr/>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link to={'/womens'}>Women</Link> {menu === "womens" && <hr/>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link to={'kids'}>Kids</Link> {menu === "kids" && <hr/>}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to={'/login'}>Login</Link></button>
        <Link to={'/cart'}><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar