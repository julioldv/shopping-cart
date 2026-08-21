import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section>
        <h1>Simple Store</h1>
        <p>
          Browse our selection of products and add your favorites to your cart.
        </p>
        <Link to="/shop">Shop now</Link>
      </section>
    </main>
  )
}

export default Home
