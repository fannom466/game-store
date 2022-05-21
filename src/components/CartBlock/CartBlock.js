import React from 'react';
import { CgShoppingCart } from 'react-icons/cg'
import './CartBlock.css';

export  const CartBlock = () => {
  return (
    <div className='cart_block'>
    <CgShoppingCart size={27} className='cart' />
    <span className='total_prise'>23234 usa.</span>
    </div>
  )
}
