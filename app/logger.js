const bunyan = require('bunyan')
const logger = bunyan.createLogger({
  name: 'cms-api',
  streams: [
    {
      level: 'info',
      stream: process.stdout            
    },
    {
        level: 'error',
        stream: process.stdout
    }
  ]
});

module.exports = logger