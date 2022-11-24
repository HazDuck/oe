import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import LoadingIcon from '../components/LoadingIcon'
import QuantitySelector from '../components/QuantitySelector'
import { useProduct } from '../context'

const Product = () => {
  const {
    productData,
    cart,
    setCart,
    setProductCount,
    productCount
  } = useProduct()
  const {
    img_url,
    name,
    power,
    price,
  } = productData

  const handleClick = () => {
    setCart((prevState) => ({
      ...prevState,
      item_count: prevState.item_count + productCount,
      items: [
        ...prevState.items, {id: 1, quantity: productCount, price: productData.price}
      ],
      total_price: prevState.total_price + (productData.price * productCount)
    }))
    setProductCount(0)
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])
  
  return (
    productData?.id ? (
      <div className='product'>
        <Header />
        <main className='main'>
          <div className='main__image-container'>
            <img src={img_url} alt={`${name} product image`} />
          </div>
          <div className='main__details'>
            <h1 className='main__details-title'>{name}</h1>
            {/* Packet of 4 should probably be returned with the product data */}
            <p>{power} // Packet of 4</p>
          </div>
          <div className='flex space-between'>
            {price ? <p className='main__price'>{`£${price / 100}`}</p> : null}
            <QuantitySelector/>
          </div>
          <button onClick={handleClick} disabled={productCount ? false : true}>
            Add to cart
          </button>
        </main>
      </div>
    ) : <LoadingIcon/>
  )
}

export default Product