import React, { useEffect, useState } from 'react'
import { getProductData } from '.'
import LoadingIcon from '../components/LoadingIcon'

const Product = () => {
  const [productData, setProductData] = useState(null)

  useEffect(() => {
    (async function() {
      const data = await getProductData()
      console.log(data)
      setProductData(data.allProducts[0]?.fields)
    })()
  }, [])
  
  return (
    productData?.id ? (
      <div className='product'>
        <header className='header'>
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
            <img src={productData.img_url} alt={`${productData.img_url} product image`} />
          </div>
          <div className='main__form'>
            <h1 className='main__form-title'>{productData.name}</h1>
          </div>
        </main>
        
      </div>
    ) : <LoadingIcon/>
  )
}

export default Product