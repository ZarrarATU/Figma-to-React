import './Navbar.css'
import MobileMenu from '../MoblieMenu/MoblieMenu'
import { useState } from 'react'

function Navbar() {

  let [menu,setMenu] = useState(false)

  function handleMenu(){
    setMenu(!menu)
  }

  return (
    <nav>
      <div className="logo">
        <img src="public/images/logo.svg" alt="tesla" />
      </div>

      <ul className="options">
        <li>
          <a href="#">Vehicles</a>
        </li>
        <li>
          <a href="#">Energy</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
      </ul>

      <ul className="menu-container">
        <li>
          <img className='menu-option' src="/public/images/support.svg" alt="support" />
        </li>
        <li>
          <img className='menu-option' src="/public/images/region-lang.svg" alt="region & lang" />
        </li>
        <li>
          <img className='menu-option' src="/public/images/account.svg" alt="account" />
        </li>
        <li>
          <button onClick={handleMenu} className="menu-btn">Menu</button>
        </li>
      </ul>

      <MobileMenu menu={menu} handleMenu={handleMenu}></MobileMenu>
    </nav>
  )
}

export default Navbar