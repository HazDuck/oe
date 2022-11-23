import React, { useEffect, useState } from 'react'
import { getProductData } from '.'
import LoadingIcon from '../components/LoadingIcon'
import QuantitySelector from '../components/QuantitySelector'

const Product = () => {
  const [productData, setProductData] = useState({})

  useEffect(() => {
    (async function() {
      const data = await getProductData()
      console.log(data)
      setProductData(data.allProducts[0]?.fields)
    })()
  }, [])

  const {
    img_url,
    name,
    power,
    price
  } = productData
  
  return (
    productData?.id ? (
      <div className='product'>
        <header className='header flex space-between'>
          <div 
            className='header__logo'
            alt='Octopus Energy Logo'>
          </div>
          <div 
            className='header__basket' 
            alt='Add to basket'>
          </div>
        </header>
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
            <p className='main__price'>{price}</p>
            <QuantitySelector />
          </div>
        </main>
        
      </div>
    ) : <LoadingIcon/>
  )
}

export default Product