import React from 'react'
import { useProduct } from '../context'

const QuantitySelector = () => {
  const { 
    productCount, 
    setProductCount, 
    productData, 
    cart 
  } = useProduct()

  return (
    <div className='form__quantity'>
      <p>Qty</p>
      <div>
        <button 
          disabled={productCount === 0 ? true : false} 
          onClick={() => setProductCount(productCount - 1 )} 
          aria-label='Decrement item count'>-</button>
        <span title='Current quantity' className='form__quantity-value'>{productCount}</span>
        <button 
          disabled={
            productCount === productData?.quantity || 
            (cart.item_count + productCount) >= productData?.quantity ? true : false} 
          onClick={() => setProductCount(productCount + 1 )} 
          aria-label='Increase item count'>+</button>
      </div>
    </div>
  ) 
}

export default QuantitySelector