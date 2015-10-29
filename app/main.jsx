var React = require('react/addons');
console.log("something");
var GroceryItemList = require('./components/GroceryItemList.jsx');

React.render(<GroceryItemList />, app)
function render() {
  ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('app')
  );
}
