const { resources } = require("../..")

module.exports = (resources) => { 
    return function(req, _res, next) { 
        req.resources = resources
        next()
    }
}