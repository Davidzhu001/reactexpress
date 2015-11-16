var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');
var GroceryItemStore = require('./stores/GroceryItemStore.jsx');


var inital = GroceryItemStore.getItems();

function render() {

  ReactDOM.render(<GroceryItemList items={inital}/>, app)
}

GroceryItemStore.onChange(function(items){
	inital = items;
	render();
})

render();