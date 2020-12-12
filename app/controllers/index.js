const adminControllers = require('./admin-controller')

module.exports = {
  home: (_req, res) => res.json({ message: 'Working success !!!' }),
  admin: adminControllers
}
