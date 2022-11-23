import React from 'react'
import { useCart } from '../context'

const QuantitySelector = () => {
  const { cart } = useCart()
  
  return (
    <div className='main__quantity'>
      <span>Qty</span>
      <div className='flex'>
        <button></button>
      </div>
    </div>
  ) 
}

export default QuantitySelector