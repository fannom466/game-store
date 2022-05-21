import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../CartBlock';
import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
        <div className='wrapper'>
         <Link to='/' className='title'>
             Game Store
         </Link>
        </div>
        <div className='header_cart_btn_wrapper'>
             <CartBlock />
        </div>
    </div>
  )
}
