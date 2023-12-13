var utils = require('stylus').utils;

function plugins() {
	return function (styl) {
		styl.define('key-index', function (obj, prop) {
			var i = 0;

			obj = utils.unwrap(obj);
			prop = prop.first.val;

			for (var p in obj.nodes[0].vals) {
				if (p === prop) {
					return i;
				}

				i++;
			}

			return false;
		}, true);

		styl.define('fn-name', function () {
			var calling = this.calling;

			return calling[calling.length - 2];
		}, true);
	};
}

module.exports = plugins;
