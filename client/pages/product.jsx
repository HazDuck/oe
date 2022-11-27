import React  from 'react'
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

  //handle atc clicks
  const handleClick = () => {
    setCart((prevState) => ({
      ...prevState,
      item_count: prevState.item_count + productCount,
      items: [
        ...prevState.items, {id: 1, quantity: productCount, price: productData.price}
      ],
      total_price: prevState.total_price + (productData.price * productCount)
    }))
    setProductCount(1)
  }
  
  return (
    productData?.id ? (
      <div className='product'>
        <Header />
        <main>
          <div className='image-container'>
            <img src={productData.img_url} alt={`${productData.name} product image`} />
          </div>
          <div className='container'>
            <div className='details'>
              <h1 className='details__title'>{productData.name}</h1>
              {/* Packet of 4 should probably be returned within the product data */}
              <p className='details__info'>{productData.power} // Packet of 4</p>
            </div>
            <div className='form'>
              {productData.price ? <p className='form__price'>{`£${productData.price / 100}`}</p> : null}
              <QuantitySelector />
            </div>
            <button className='form__atc' onClick={handleClick} disabled={cart.item_count >= productData.quantity ? true : false}>
              Add to cart
            </button>
          </div>
        </main>
      </div>
    ) : <LoadingIcon/>
  )
}

export default Product