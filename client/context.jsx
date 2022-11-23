import React, { createContext, useContext, useState, useEffect } from 'react'
import { getProductData } from './pages'

export const CartContext = createContext({})
export const CartProvider = ({ children }) => {

  useEffect(() => {
    (async function() {
      const data = await getProductData()
      console.log(data)
      setProductData(data.allProducts[0]?.fields)
    })()
  }, [])

  const [cart, setCart] = useState({})
  const [productData, setProductData] = useState({})

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      productData, 
      setProductData
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)