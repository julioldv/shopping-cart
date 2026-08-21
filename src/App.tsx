import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
