var React = require('react');
var ReactDOM = require('react-dom');
var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList />, app)
function render() {
  ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
  );
}