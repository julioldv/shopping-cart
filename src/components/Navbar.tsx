import { NavLink } from 'react-router-dom'

type NavbarProps = {
  cartQuantity: number
}

function Navbar({ cartQuantity }: NavbarProps) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart ({cartQuantity})</NavLink>
    </nav>
  )
}

export default Navbar
