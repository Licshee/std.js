var each = require('./each')
var isList = require('./isList')

module.exports = function map(obj, fn) {
	var result = isList(obj) ? new Array(obj.length) : {}
	each(obj, function(val, key) {
		result[key] = fn(val, key)
	})
	return result
}
