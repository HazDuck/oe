import React, { createContext, useContext, useState, useEffect } from 'react'
import getProductData from './getProductData'

export const ProductContext = createContext({})
export const ProductProvider = ({ children }) => {

  useEffect(() => {
    (async function() {
      const data = await getProductData()
      console.log(data)
      setProductData(data.allProducts[0]?.fields)
    })()
  }, [])

  const intialCart = {
    item_count: 0,
    items: [],
    total_price: 0
  }

  const [cart, setCart] = useState(intialCart)
  const [productData, setProductData] = useState({})
  const [productCount, setProductCount] = useState(1)

  return (
    <ProductContext.Provider value={{
      cart,
      setCart,
      productData, 
      setProductData,
      productCount, 
      setProductCount
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)