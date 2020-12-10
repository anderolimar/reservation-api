const logger = require('../logger')

function notFoundHandler (_req, res, _next) {
  res.status(404).json({ code: 'NOT_FOUND' })
}

function internalErrorHandler (err, _req, res, _next) {
  logger.error(err)
  res.status(500).json({ code: 'INTERNAL_SERVERERRROR' })
}

module.exports = {
  internalErrorHandler,
  notFoundHandler
}
