import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()
const useCart = () => useContext(Context);

const isClient = () => typeof window !== 'undefined'

const getLocalCart = () => JSON.parse(localStorage.getItem('cart'))

const Cart = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  useEffect(() => {
    const localCart = getLocalCart()
    localCart && setCart(localCart)
  }, [])

  const addItemToCart = (id, qty = 1) => {
    const item = cart.find(i => i.id === id)

    if (item) {
      item.qty += qty
      setCart([...cart])
    } else {
      setCart([...cart, { id, qty }])
    }
  }

  const removeItemFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const exposed = {
    cart,
    addItemToCart,
    removeItemFromCart
  }

  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export { Cart as default, useCart }
