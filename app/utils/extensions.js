String.prototype.tableAlias = function(tableAlias) {
    return `${tableAlias}.${this}`
}

module.exports = { }