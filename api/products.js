const products = require('./products.json')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products)
  }
}
