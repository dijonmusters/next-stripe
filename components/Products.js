import Product from './Product'

const Products = ({ products }) => products.map(product => <Product key={product.id} product={product} />)

export default Products
