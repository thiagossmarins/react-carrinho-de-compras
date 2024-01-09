import React from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import './Logo.css'

const Logo = () => {
  return (
      <button type='button' className='logo-button'>
          <FaShoppingBasket />
          <h3 className='logo-title'>Carrinho de<br /> compras</h3>
      </button>
  )
}

export default Logo