import { useState } from 'react'
import '../assets/css/burger-menu.css'
import Navigation from './Navigation'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='hamburger-menu'>
      <div className={`burger ${isOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
      <nav className={`nav-menu ${isOpen ? 'open' : 'close'}`}>
        <div onClick={toggleMenu}>
          <Navigation />
        </div>
      </nav>
    </div>
  )
}

export default BurgerMenu
