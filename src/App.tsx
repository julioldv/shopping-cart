import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import type { Product } from './types/Product'
import type { CartItem } from './types/CartItem'
import './App.css'

function App() {
  const [cart, setCart] = useState<CartItem[]>([])

  function handleAddToCart(product: Product, quantity: number) {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.product.id === product.id,
      )

      if (existingItem) {
        return currentCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...currentCart, { product, quantity }]
    })
  }

  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <Navbar cartQuantity={cartQuantity} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
