import { NavLink } from 'react-router-dom'

type NavbarProps = {
  cartQuantity: number
}

function Navbar({ cartQuantity }: NavbarProps) {
  return (
    <header className="navbar">
      <NavLink className="navbar__brand" to="/">
        JCL Store
      </NavLink>

      <nav className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart ({cartQuantity})</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
