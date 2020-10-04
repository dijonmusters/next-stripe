import fs from 'fs'
import Products from '../components/Products'
import CheckoutButton from '../components/CheckoutButton'

const Home = ({ products }) => (
  <>
    <Products products={products} />
    <CheckoutButton />
  </>
)

export const getStaticProps = () => {
  const products = JSON.parse(fs.readFileSync('content/products.json'))

  return {
    props: {
      products
    }
  }
}

export default Home
