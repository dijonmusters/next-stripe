import CartProvider from '../context/Cart';

const App = ({ Component, pageProps }) => (
  <CartProvider>
    <Component {...pageProps} />
  </CartProvider>
)

export default App
