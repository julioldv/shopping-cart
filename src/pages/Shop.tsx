import ProductCard from '../components/ProductCard'

const product = {
  id: 1,
  title: 'Classic Backpack',
  price: 49.99,
  image:
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80',
}

function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <ProductCard product={product} />
    </>
  )
}

export default Shop
