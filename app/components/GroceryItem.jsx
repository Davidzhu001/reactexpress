var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass(
{
	render:function(){

		return (
			<div>
			  <h4 className={this.props.item.purchase ? "strikethrough" : ""}>{this.props.item.name}</h4>
			  </div>
        		
			)
	}
})