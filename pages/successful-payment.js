import { useEffect } from 'react'

const SuccessfulPayment = () => {
  useEffect(() => {
    localStorage.removeItem('cart')
  }, [])

  return (
    <>
      <h1>Payment successful</h1>
      <p>Thanks for the payment</p>
    </>
  )
}

export default SuccessfulPayment
