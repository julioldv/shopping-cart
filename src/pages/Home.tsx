import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <p className="home__eyebrow">JCL Store</p>

        <h1>Find something you’ll love.</h1>

        <p className="home__description">
          Browse a simple selection of products and add your favorites to your
          cart.
        </p>

        <Link className="primary-link" to="/shop">
          Shop now
        </Link>
      </section>
    </main>
  )
}

export default Home
