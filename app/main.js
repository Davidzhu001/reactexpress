console.log("something");
var GroceryItemList = require('./components/GroceryItemList.jsx');

React.render(React.createElement(GroceryItemList, null), app)
function render() {
  ReactDOM.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('app')
  );
}