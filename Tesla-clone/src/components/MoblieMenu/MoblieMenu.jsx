import './MobileMenu.css'

function MobileMenu({menu,handleMenu}) {
  return (
  <ul className={`mobile-menu ${menu ? 'open' : 'close'}`}>
      <li onClick={handleMenu} className='close-btn'>
        <img src="./public/images/close.svg" alt="X" />
      </li>
      <li className='mobile-option'>
        <a href="#">Vehicles</a>
      </li>
      <li className='mobile-option'>
        <a href="#">Energy</a>
      </li>
      <li className='mobile-option'>
        <a href="#">Charging</a>
      </li>
      <li className='mobile-option'>
        <a href="#">Discover</a>
      </li>
      <li className='mobile-option'>
        <a href="#">Shop</a>
      </li>
      <li className='mobile-option'>
        <a href="#">Support</a>
      </li>
      <li className='mobile-location-list'>
        <div className="locations">
             <div className="location-icon">
                 <img src="./public/images/region-lang.svg" alt="location" />
             </div>
             <div className="current-text">
                 <p className='location'>United States</p>
                 <p className='lang'>English</p>
             </div>
        </div>
      </li>
    </ul>
  )
}

export default MobileMenu