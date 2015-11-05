var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');



var inital = [
	{
	name: "001"
	}, {
	name: "something"
	},{
		name: "item2",
		purchase:true,
	}
	] 

ReactDOM.render(<GroceryItemList items={inital}/>, app)
function render() {
  ReactDOM.render(
  document.getElementById('app')
  );
}