// import fs from 'fs'
import axios from 'axios'
import Link from 'next/link'
import { loadStripe } from '@stripe/stripe-js';
import { useCart } from '../context/Cart'

const stripePublishKey = 'pk_test_51HY0jlFCLZr6OgzIv02kEpmGNyDUq1VRKhYJGbC17JxfBJPLupFOyqhnvXPy5WzSUPt13OpxR3rGAa3D8yXC8COG00HrTVJrOJ'

const Checkout = ({ products }) => {
  const { cart, removeItemFromCart } = useCart()

  const getProductName = (id) => products.find(product => product.id === id)?.name
  const getProductPrice = (id, qty) => products.find(product => product.id === id)?.price * qty / 100
  const calculateTotal = () => cart.reduce((acc, product) => acc += getProductPrice(product.id, product.qty), 0)

  const handleStripeCharge = async () => {
    const stripe = await loadStripe(stripePublishKey);
    const { data } = await axios.post('/.netlify/functions/create-session', { cart })
    await stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <>
      <h2>Checkout</h2>
      {cart.map(product => (
        <p key={product.id}>
          {product.qty}x {getProductName(product.id)}: ${getProductPrice(product.id, product.qty)}
          <button onClick={() => removeItemFromCart(product.id)}>Delete</button>
        </p>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <Link href="/">
        <a>Keep shopping</a>
      </Link>
      <button id="checkout-button" onClick={handleStripeCharge}>Process payment</button>
    </>
  )
}

export const getStaticProps = () => {
  // const products = JSON.parse(fs.readFileSync('content/products.json'))

  return {
    props: {
      products: []
    }
  }
}

export default Checkout
