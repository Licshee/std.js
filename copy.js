var each = require('./each'),
	isArray = require('./isArray')

module.exports = function copy(obj, deep) {
	var result = isArray(obj) ? new Array(obj.length) : {}
	each(obj, function(val, key) {
		result[key] = (deep && typeof val == 'object') ? copy(val, deep) : val
	})
	return result
}
