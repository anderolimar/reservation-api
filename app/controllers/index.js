const adminControllers = require('./admin-controller')
const productsControllers = require('./products-controller')

module.exports = {
  home: (_req, res) => res.json({ message: 'Working success !!!' }),
  admin: adminControllers,
  product: productsControllers
}
