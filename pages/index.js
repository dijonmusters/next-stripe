// import fs from 'fs'
import Head from 'next/head'
import Products from '../components/Products'
import CheckoutButton from '../components/CheckoutButton'
import { useEffect } from 'react'

const Home = ({ products }) => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Products products={products} />
      <CheckoutButton />
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

export default Home
