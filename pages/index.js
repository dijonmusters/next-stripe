import axios from 'axios'
import Products from '../components/Products'
import CheckoutButton from '../components/CheckoutButton'

const Home = ({ products }) => (
  <>
    <Products products={products} />
    <CheckoutButton />
  </>
)

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:8888/.netlify/functions/products')

  return {
    props: {
      products: data
    }
  }
}

export default Home
