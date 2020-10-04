import fs from 'fs'
import Products from '../components/Products'
import CheckoutButton from '../components/CheckoutButton'

const Home = ({ products }) => console.log(process.env) ||  (
  <>
    <Products products={products} />
    <CheckoutButton />
  </>
)

export const getStaticProps = () => {
  const products = JSON.parse(fs.readFileSync('api/products.json'))

  return {
    props: {
      products
    }
  }
}

export default Home
