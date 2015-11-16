var React = require('react');
var ReactDOM = require('react-dom');
var action = require('./../action/GroceryItemActionCreator.jsx')


module.exports = React.createClass({
	getInitialState:function() {
		return {input:""};
	},
	handleInputName:function(e){
		this.setState({input: e.target.vaule});
	},
	addItem:function(e) {
		e.preventDefault();
		action.add({
			name:this.state.input

		});
		this.setState({
			input:''
		})
	},
	render: function(){
		return (
			<div className = 'grocery-addItem' >
				<form onSubmit={this.addItem}>
					<input value={this.state.input} onChange={this.handleInputName}/>
					<button> Add Item </button>
				</form>
			</div>

			)

	}


});