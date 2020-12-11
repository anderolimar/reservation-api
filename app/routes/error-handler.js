const logger = require('../logger')
const ApiException = require('../models/exceptions/api-exception')

function notFoundHandler (_req, res, _next) {
  return res.status(404).json({ code: 'NOT_FOUND' })
}

function internalErrorHandler (err, _req, res, _next) {
  if(err instanceof ApiException) {
    return res.status(err.code).json(err.content)
  }

  logger.error(err)
  return res.status(500).json({ code: 'INTERNAL_SERVER_ERROR' })
}

module.exports = {
  internalErrorHandler,
  notFoundHandler
}
