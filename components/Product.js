import { useCart } from '../context/Cart'

const Product = ({ product }) => {
  const { addItemToCart } = useCart()

  const addToCart = () => {
    addItemToCart(product.id)
  }

  return (
    <p>
      {product.name}: ${product.price / 100}
      <button onClick={addToCart}>Add to cart</button>
    </p>
  )
}

export default Product
