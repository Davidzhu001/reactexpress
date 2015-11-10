var dispatcher = require('./../dispatcher.js');

function GroceryItemStore(){
	var items = [];
	var listeners = [];

	function getItems(){

		 return items;
	}

	function onChange(listener){
		 listeners.push(listener)
	}

	function addGroceryItem(item){
		items.push(item);
		triggleListeners();

	}

	function triggleListeners() {
		changeListeners.forEach(function(listener){
			listener(groceryItems)
		})
	};

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if (split(0) === 'grocery-item'){

			switch(split[1]){
				case 'add';
					addGroceryItem(event.payload);
					break;
			}
		}

	});

	return {
		getItems:getItems,
		onChange:onChange;
	}

};


module.exports = new GroceryItemStore();