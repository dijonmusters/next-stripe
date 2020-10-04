const products = require('./products.json')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
  const { cart } = JSON.parse(event.body)
  const lineItems = cart.map(item => {
    const product = products.find(p => p.id === item.id)

    return {
      price_data: {
        currency: 'aud',
        product_data: {
          name: product.name
        },
        unit_amount: product.price
      },
      quantity: item.qty
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: `${process.env.URL}/successful-payment`,
    cancel_url: `${process.env.URL}/cancel-payment`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: session.id
    })
  }
}
