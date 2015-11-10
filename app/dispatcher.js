var guid = require('guid')

var listeners = {};

module.exports = {
	register:function(cb){
		var id = guid.raw();
		listeners[id] = callback;
		return id;
	},
	dispatch:function(payload){
		console.info("dispatching.....", payload)
		for (var id in listeners) {
			var listeners = listeners[id];
			listeners(payload);

		}
	}


}